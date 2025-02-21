// ** React Imports
import { useState, useEffect } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import IconButton from '@mui/material/IconButton'
import CircularProgress from '@mui/material/CircularProgress';

// ** Icon Imports
import Icon from 'src/@core/components/icon'


// ** Axios
import axios from 'axios'

interface ImageType{
  id: number
  image_url: string
  image_name: string
  image_status?: string
}

interface ImageDialogProps {
  confirmImages: ImageType[];
  setConfirmImages: React.Dispatch<React.SetStateAction<ImageType[]>>;
  disabled?: boolean;
  drawer?: boolean
}

const ImageDialog = ({ confirmImages, setConfirmImages, disabled, drawer }:ImageDialogProps) => {
  const [popUp, setPopUp] = useState<boolean>(false)
  const [paginationModel, setPaginationModel] = useState({ page: 1, limit: 6 })
  const [totalImages, setTotalImages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [imageList, setImageList] = useState<ImageType[]>([])
  const [selectedImages, setSelectedImages] = useState<ImageType[]>([]);
  const [uploadMultiImage, setUploadMultiImage] = useState<File[]>([]);

  const imagePickList = async (page: number) => {
    try {
      setLoading(true);
      const url = `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_GET_ALL_IMAGE}`;

      const startTime = Date.now();

      const res = await axios.get(url, {
        params: { page, limit: 6 }
      });

      setImageList((prev) => [...prev, ...res.data.images]);
      setTotalImages(res.data.total);
      setPaginationModel((prev) => ({ ...prev, page }));

      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(2000 - elapsedTime, 0);

      await new Promise((resolve) => setTimeout(resolve, remainingTime));
    } catch (error) {
      console.error("Error fetching images:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (popUp) {
      setImageList([]); // Clear previous images when reopening
      setPaginationModel({ page: 1, limit: 6 }); // Reset pagination
      imagePickList(1);
    }
  }, [popUp]);

  const handleOpenPopUp = () => {
    setPopUp(true)
    setSelectedImages(confirmImages)

  }

  const handleClosePopUp = () => setPopUp(false)

  const handleToggleImage = (image: ImageType) => {
    setSelectedImages((prevSelected) => {
      const isAlreadySelected = prevSelected.some((img) => img.id === image.id);

      return isAlreadySelected
        ? prevSelected.filter((img) => img.id !== image.id)
        : [...prevSelected, image];
    });
  };

  const handleSaveSelection = (value:string) => {
    handleClosePopUp();
    if(value === 'save'){
      setConfirmImages(selectedImages)
    }else{
      setConfirmImages(confirmImages)
    }
  };

  const handleRemoveImage = (id:number) => {
    setConfirmImages((prevImages) => prevImages.filter((image) => image.id !== id));
  }

  // Handle file selection
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    setUploadMultiImage(files);
  };

  // Handle image upload
  const handleUploadImage = async () => {
    if (uploadMultiImage.length === 0) {
      alert("Please select an image first!");

      return;
    }
    try{
      setLoading(true);
      const url = `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_POST_IMAGE}`;
      const formData = new FormData();
      uploadMultiImage.forEach((file) => {
        formData.append("files", file);
      });

      const res = await axios.post(url, formData);
      if(res.data){
        setUploadMultiImage([])
        setImageList([])
        setPaginationModel({ page: 1, limit: 6 })
        imagePickList(1);
      }
    }catch(err){
      console.error("Error uploading images:", err);
    }finally{
      setLoading(false);
    }
  };

  const handleLoadMore = () => {
    const nextPage = paginationModel.page + 1;
    imagePickList(nextPage);
  };

  return (
    <>
      <Grid item xs={12}>
          <Typography variant='h6'>Image</Typography>
      </Grid>
      <Grid item xs={12}>
        <Dialog fullWidth maxWidth='md' open={popUp} onClose={handleClosePopUp}>
          <DialogContent>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              gap={2}
              p={2}
              mb={6}
              sx={{
                border: "2px dashed #ccc",
                borderRadius: "10px",
                textAlign: "center",
                backgroundColor: "#f9f9f9",
                "&:hover": { backgroundColor: "#f1f1f1" },
              }}
            >
              {/* Custom file input */}
              <label htmlFor="upload-image">
                <input
                  id="upload-image"
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleFileChange}
                  hidden
                />
                <Button
                  component="span"
                  variant="contained"
                  color="primary"
                  startIcon={<Icon icon='tabler:upload' fontSize='1.75rem' />}
                >
                  Choose Images
                </Button>
              </label>

              {/* Show selected file names */}
              {uploadMultiImage.length > 0 && (
                <Box display="flex" flexDirection="column" alignItems="center" mt={1}>
                  {uploadMultiImage.map((file, index) => (
                    <Typography key={index} variant="body2" color="textSecondary">
                      {file.name}
                    </Typography>
                  ))}
                </Box>
              )}

              {/* Upload Button */}
              <Button
                variant="contained"
                color="success"
                onClick={handleUploadImage}
                disabled={uploadMultiImage.length === 0}
                sx={{ mt: 1 }}
              >
                Upload
              </Button>
            </Box>
            {loading ? (<Box display='flex' alignItems="center" justifyContent="center"><CircularProgress /></Box>) : (
              <>
                <Box
                  display='grid'
                  alignItems='left'
                  gridTemplateColumns={{
                    xs: "1fr 1fr",   // 1 column for mobile
                    sm: "1fr 1fr 1fr", // 2 columns for tablets
                    md: "1fr 1fr 1fr" // 3 columns for desktops
                  }}
                  gap={2}
                  justifyContent="center"
                >
                  {imageList.map((image) => (
                    <Box
                      key={image.id}
                      display="flex"
                      alignItems="flex-start"
                      justifyContent="center"
                      flexDirection="column"
                      overflow='hidden'
                      sx={{
                        textAlign: 'center',
                        maxWidth: { xs: "150px", md: "100%" }
                      }}
                    >
                      <Box
                        sx={{
                          width: { xs: "150px", md: "200px" },
                          height: { xs: "150px", md: "200px" },
                          overflow: "hidden",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <img
                          src={image.image_url}
                          alt={image.image_name}
                          draggable="false"
                          style={{
                            height: "100%",
                            width: "100%",
                            objectFit: "cover",
                            borderRadius: "5px",
                          }}
                        />
                      </Box>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={selectedImages.some((img) => img.id === image.id)}
                            onChange={() => handleToggleImage(image)}
                          />
                        }
                        label={image.image_name}
                      />
                    </Box>
                  ))}
                </Box>

                {imageList.length < totalImages && (
                  <Box display="flex" justifyContent="center" mt={3}>
                    <Button variant="outlined" color="primary" onClick={handleLoadMore} disabled={loading}>
                      {loading ? (<Box display='flex' alignItems="center" justifyContent="center"><CircularProgress /></Box>) : "Load More"}
                    </Button>
                  </Box>
                )}
              </>
            )}
          </DialogContent>
          <DialogActions sx={{ justifyContent: 'center' }}>
            <Button variant='contained' sx={{ mr: 2 }} onClick={() => handleSaveSelection('save')}>
              Save
            </Button>
            <Button variant='tonal' color='secondary' onClick={() => handleSaveSelection('cancel')}>
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </Grid>
      {/* Display Selected Images Below Upload Button */}
      <Grid item xs={12}>
        {drawer ?
          (
            <Box
              display="flex"
              flexDirection='column'
              gap={1}
              justifyContent="center"
            >
                {(() => {
                  const hasStatus = confirmImages.some((image: ImageType) => image.image_status);

                  if (hasStatus) {
                    // Define type for grouped images
                    const groupedImages: Record<string, ImageType[]> = confirmImages.reduce(
                      (acc: Record<string, ImageType[]>, image: ImageType) => {
                        const status = image.image_status || "Unknown"; // Fallback if status is missing
                        if (!acc[status]) acc[status] = [];
                        acc[status].push(image);

                        return acc;
                      },
                      {}
                    );

                    return Object.entries(groupedImages).map(([status, images]) => (
                      <Box key={status} display="flex" flexDirection='column' sx={{ mt: 4 }}>
                        <Typography variant="subtitle2" sx={{ mb: 4 }}>{status}</Typography>
                        <Box display="flex" flexWrap='wrap' gap={1}>
                          {images.map((image: ImageType) => (
                            <Box
                              key={image.id}
                              display="flex"
                              alignItems="center"
                              justifyContent="center"
                              flexDirection="column"
                              sx={{ textAlign: "center" }}
                            >
                              <Box display="flex" alignItems="flex-end" flexDirection="column">
                                {!disabled && (
                                  <IconButton
                                    sx={{ position: "absolute", width: "35px" }}
                                    onClick={() => handleRemoveImage(image.id)}
                                  >
                                    <Icon icon="tabler:x" />
                                  </IconButton>
                                )}
                                <Box
                                  sx={{
                                    width: { xs: "100px", md: "150px" },
                                    height: { xs: "100px", md: "150px" },
                                    overflow: "hidden",
                                    display: "flex",
                                    justifyContent: "center",
                                  }}
                                >
                                  <img
                                    src={image.image_url}
                                    alt={image.image_name}
                                    draggable="false"
                                    style={{
                                      height: "100%",
                                      width: "100%",
                                      objectFit: "cover",
                                      borderRadius: "5px",
                                    }}
                                  />
                                </Box>
                              </Box>
                              <Typography paragraph={true} variant="body2" mt={2}>{image.image_name}</Typography>
                            </Box>
                          ))}
                        </Box>
                      </Box>
                    ));
                  } else {
                    // No image_status, show all images normally
                    return (
                      <Box display="flex" gap={2} flexWrap="wrap">
                        {confirmImages.map((image: ImageType) => (
                          <Box
                            key={image.id}
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            flexDirection="column"
                            sx={{ textAlign: "center" }}
                          >
                            <Box display="flex" alignItems="flex-end" flexDirection="column">
                              {!disabled && (
                                <IconButton
                                  sx={{ position: "absolute", width: "35px" }}
                                  onClick={() => handleRemoveImage(image.id)}
                                >
                                  <Icon icon="tabler:x" />
                                </IconButton>
                              )}
                              <Box
                                sx={{
                                  width: { xs: "100px", md: "150px" },
                                  height: { xs: "100px", md: "150px" },
                                  overflow: "hidden",
                                  display: "flex",
                                  justifyContent: "center",
                                }}
                              >
                                <img
                                  src={image.image_url}
                                  alt={image.image_name}
                                  draggable="false"
                                  style={{
                                    height: "100%",
                                    width: "100%",
                                    objectFit: "cover",
                                    borderRadius: "5px",
                                  }}
                                />
                              </Box>
                            </Box>
                            <Typography variant="body2" mt={2}>{image.image_name}</Typography>
                          </Box>
                        ))}
                      </Box>
                    );
                  }
                })()}

                {!disabled && (
                  <>
                    {confirmImages.length > 0 ? (
                      <Box display='flex' justifyContent='center' alignItems='center'>
                        <Button variant='outlined' color='inherit' onClick={handleOpenPopUp}>Upload image</Button>
                      </Box>
                    ):(
                      <Box mb={5}>
                        <Button variant='outlined' color='inherit' onClick={handleOpenPopUp}>Upload image</Button>
                      </Box>
                    )}
                  </>
                )}
            </Box>
          )
          :
          (
            <Box
              display="grid"
              gridTemplateColumns={{
                xs: "1fr 1fr",   // 1 column for mobile
                sm: "1fr 1fr 1fr", // 2 columns for tablets
                md: "1fr 1fr 1fr 1fr" // 3 columns for desktops
              }}
              gap={1}
              justifyContent="center"
            >
                {confirmImages.map((image) => (
                  <Box
                    key={image.id}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    flexDirection="column"
                    sx={{ textAlign: 'center' }}
                  >
                    <Box
                      display="flex"
                      alignItems="flex-end"
                      flexDirection="column"
                    >
                      {!disabled && (
                        <IconButton sx={{position:'absolute', width:'35px'}} onClick={()=>handleRemoveImage(image.id)}>
                          <Icon icon="tabler:x" />
                        </IconButton>
                      )}
                      <Box
                        sx={{
                          width: { xs: "100px", md: "200px" },
                          height: { xs: "100px", md: "200px" },
                          overflow: "hidden",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <img
                          src={image.image_url}
                          alt={image.image_name}
                          draggable="false"
                          style={{
                            height: "100%",
                            width: "100%",
                            objectFit: "cover",
                            borderRadius: "5px",
                          }}
                        />
                      </Box>
                    </Box>
                    <Typography variant='body2' mt={2}>{image.image_name}</Typography>
                  </Box>
                ))}
                {!disabled && (
                  <>
                    {confirmImages.length > 0 ? (
                      <Box display='flex' justifyContent='center' alignItems='center'>
                        <Button variant='outlined' color='inherit' onClick={handleOpenPopUp}>Upload image</Button>
                      </Box>
                    ):(
                      <Box mb={5}>
                        <Button variant='outlined' color='inherit' onClick={handleOpenPopUp}>Upload image</Button>
                      </Box>
                    )}
                  </>
                )}
            </Box>
          )
        }

      </Grid>
    </>
  )
}

export default ImageDialog
