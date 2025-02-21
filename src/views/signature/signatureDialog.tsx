import { useState, useRef } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import CircularProgress from '@mui/material/CircularProgress'
import Typography from '@mui/material/Typography'

// ** Import third-party
import SignatureCanvas from 'react-signature-canvas'
import axios from 'axios'

// ** Custom Components Imports
import CustomTextField from 'src/@core/components/mui/text-field'

interface ImageType{
  id: number
  image_url: string
  image_name: string
}

interface SignatureDialogProps {
  setConfirmSignature: React.Dispatch<React.SetStateAction<ImageType[]>>;
}

const SignatureDialog = ({ setConfirmSignature }:SignatureDialogProps) => {
  const sigCanvas = useRef<SignatureCanvas>(null)

  const [popUp, setPopUp] = useState<boolean>(false)
  const [imageURL, setImageURL] = useState<string | null>(null)
  const [name, setName] = useState<string>("")
  const [signatureFile, setSignatureFile] = useState<File | null>(null)
  const [uploadedSignature, setUploadedSignature] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(false)

  const handleOpenPopUp = () => {
    setPopUp(true)
  }

  const handleClosePopUp = () => setPopUp(false)

  const handleCreateSignature = async () => {
    if (sigCanvas.current) {
      // Ensure the canvas is not empty
      if (sigCanvas.current.isEmpty()) {
        console.error("Signature canvas is empty!");

        return;
      }

      // Get signature canvas
      const canvas = sigCanvas.current.getCanvas();

      // Create a new canvas with a white background
      const newCanvas = document.createElement("canvas");
      newCanvas.width = canvas.width;
      newCanvas.height = canvas.height;
      const newCtx = newCanvas.getContext("2d");

      if (newCtx) {
        // Fill with white background
        newCtx.fillStyle = "white";
        newCtx.fillRect(0, 0, newCanvas.width, newCanvas.height);

        // Draw the signature on top of the white background
        newCtx.drawImage(canvas, 0, 0);
      }

      // Convert new canvas to DataURL
      const base64URL = newCanvas.toDataURL("image/png");

      console.log(base64URL); // Debug: Check output image

      // Convert DataURL to Blob
      const response = await fetch(base64URL);
      const blob = await response.blob();

      // Generate file name with date
      const now = new Date();
      const formattedDate = now.toISOString().split("T")[0];
      const file = new File([blob], `${name}_signature_${formattedDate}.png`, { type: "image/png" });

      // Set Image URL (for preview) and File (for upload)
      setImageURL(URL.createObjectURL(blob));
      setSignatureFile(file);
    }
  };

  const handleUploadSignature = async() => {
    if (!signatureFile) {
      console.error("No signature file to upload.");

      return;
    }
    try{
      setLoading(true);
      const url = `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_POST_IMAGE}`;
      const formData = new FormData();
      formData.append("files", signatureFile, signatureFile.name);
      const res = await axios.post(url, formData);
      if(res.data){
        setUploadedSignature(imageURL)
        setConfirmSignature(res.data?.uploadedImages[0])
      }
    }catch(err){
      console.error("Error uploading images:", err);
    }finally{
      setLoading(false);
      setPopUp(false)
    }
  }

  return (
    <>
      <Grid item xs={12}>
        <Typography variant='h6'>Signature</Typography>
      </Grid>
      <Grid item xs={12}>
        <Dialog fullWidth maxWidth="md" open={popUp} onClose={handleClosePopUp}>
          <DialogContent sx={{alignItems: 'center'}}>
            <Box display='flex' flexDirection='column' alignItems='center'>
            {loading ? (
              <CircularProgress />
            ):(
              <>
                {imageURL ? (
                  <>
                    <Box>
                      <img width="150" src={imageURL} alt="signature" className="signature" />
                      <Button variant="text" color="primary" onClick={() => setImageURL("")}>Clear</Button>
                    </Box>
                    <Typography>{name}</Typography>
                  </>
                ) : (
                  <>
                    <Box
                      display="flex"
                      flexDirection="column"
                      alignItems="center"
                      justifyContent="center"
                      p={2}
                      mb={6}
                      sx={{
                        width: { xs: "300px", md: "500px" },
                        height: { xs: "300px", md: "250px" },
                        border: '2px dashed #ccc',
                        borderRadius: '10px',
                        textAlign: 'center',
                        backgroundColor: '#f9f9f9',
                        '&:hover': { backgroundColor: '#f1f1f1' }
                      }}
                    >
                      <SignatureCanvas
                        penColor="black"
                        canvasProps={{ width: 250, height: 200 }}
                        ref={sigCanvas}
                      />
                      <Button onClick={() => sigCanvas.current?.clear()}>Clear</Button>
                    </Box>
                    <CustomTextField
                      fullWidth
                      label='Name'
                      value={name}
                      onChange={e => setName(e.target.value)}
                    />
                  </>
                )}
              </>
            )}
            </Box>
          </DialogContent>
          <DialogActions sx={{ justifyContent: 'center' }}>
            {imageURL ? (
              <Button
                variant="contained"
                sx={{ mr: 2 }}
                onClick={handleUploadSignature}
              >
                Upload
              </Button>
              ) : (
                <Button
                  variant="contained"
                  sx={{ mr: 2 }}
                  onClick={handleCreateSignature}
                >
                  Save
                </Button>
              )
            }
            <Button variant="tonal" color="secondary" onClick={() => handleClosePopUp()}>
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </Grid>
      {/* Display Selected Signatures Image Below Signature Button */}
      <Grid item xs={12}>
        {uploadedSignature ? (
          <>
            <Box>
              <img width="150" src={uploadedSignature} alt="signature" className="signature" />
            </Box>
          </>
        ):(
          <Button variant="outlined" color="inherit" onClick={handleOpenPopUp}>
            Signature
          </Button>
        )}

      </Grid>
    </>
  )
}

export default SignatureDialog
