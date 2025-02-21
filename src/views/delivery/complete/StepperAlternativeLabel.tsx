// ** React Imports
import { Fragment,  useState, useMemo } from 'react'

// import { Fragment, forwardRef, useState, useMemo, useEffect } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Step from '@mui/material/Step'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Stepper from '@mui/material/Stepper'
import StepLabel from '@mui/material/StepLabel'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Divider from '@mui/material/Divider'
import CardHeader from '@mui/material/CardHeader'
import CircularProgress from '@mui/material/CircularProgress'
import { DataGrid, GridColDef } from '@mui/x-data-grid'

// ** Custom Components Imports
import StepperCustomDot from './StepperCustomDot'
import CustomTextField from 'src/@core/components/mui/text-field'
import ImageDialog from 'src/views/image/imageDialog'
import SignatureDialog from 'src/views/signature/signatureDialog'

// ** Third Party Imports
import toast from 'react-hot-toast'

// ** Styled Component
import StepperWrapper from 'src/@core/styles/mui/stepper'

// ** Axios
import axios from 'axios'

interface Data {
  b2b_order_id: string
  order_address_id: number
  customer_name: string
  customer_email: string
  company_name: string
  customer_address: string[],
  address_zip: string
  address_city: string
  address_state: string
  address_country: string
  shipping_method: string
  merchant_shipping_cost: string
  items: ProductType[]
}

interface ProductType {
  order_product_id: number
  product_id: number
  product_name: string
  product_sku: string
  quantity: number
}

interface ImageType{
  id: number
  image_url: string
  image_name: string
}

interface SignatureType{
  id: number
  image_url: string
  image_name: string
}

const steps = [
  {
    title: 'BigCommerce Order',
    subtitle: 'Enter order number'
  },
  {
    title: 'Order Details',
    subtitle: 'Check order & customer details'
  },
  {
    title: 'Shipment Details',
    subtitle: 'Enter delivery details'
  }
]

const StepperAlternativeLabel = () => {
  // ** States
  // ** Steps
  const [activeStep, setActiveStep] = useState<number>(0)
  const [loading, setLoading] = useState<boolean>(false)

  // ** Step 1
  const [orderId, setOrderId] = useState<number>(0)
  const [orderNumber, setOrderNumber] = useState<string>("")
  const [orderData, setOrderData] = useState<Data | null>(null)
  const [error, setError] = useState<string>("")

  // ** Step 2
  const [pagination, setPagination] = useState({ page: 0, pageSize: 5 })

  // ** Step 3
  const [confirmImages, setConfirmImages] = useState<ImageType[]>([]);
  const [confirmSignature, setConfirmSignature] = useState<SignatureType[]>([])

  const columns: GridColDef[] = useMemo(() => [
    {
      flex: 0.2,
      minWidth: 100,
      field: 'product_name',
      headerName: 'Product Name',
      renderCell: ({ row }: { row: ProductType }) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
            <Typography
              noWrap
              sx={{
                fontWeight: 500,
                textDecoration: 'none',
                color: 'text.secondary',
                '&:hover': { color: 'primary.main' }
              }}
            >
              {row.product_name}
            </Typography>
            <Typography noWrap variant='body2' sx={{ color: 'text.disabled' }}>
              {row.product_sku}
            </Typography>
          </Box>
        </Box>
      )
    },
    {
      flex: 0.08,
      minWidth: 20,
      field: 'quantity',
      headerName: 'Quantity',
      renderCell: ({ row }: { row: ProductType }) => (
        <Typography
          noWrap
          sx={{
            fontWeight: 500,
            textDecoration: 'none',
            color: 'text.secondary',
            '&:hover': { color: 'primary.main' }
          }}
        >
          {row.quantity}
        </Typography>
      )
    }
  ], [])

  // Handle Stepper
  const handleBack = () => {
    setError('');
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleNext = async () => {
    setError('');

    const validationErrors: { [key: string]: string } = {};

    if (activeStep === 0) {
      if(!orderData || orderData.b2b_order_id !== orderNumber){
        setLoading(true)
        try {
          const url = `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_GET_BIGCOMMERCE_ORDER}/${orderNumber}?page=complete`;
          const res = await axios.get(url);
          setOrderId(res.data?.id)
          setOrderData(res.data?.orderData);
          setLoading(false)
        } catch (error:any) {
          setLoading(false)
          setError(error?.response?.data?.message);

          return
        }
      }
    }

    if (activeStep === steps.length - 1) {
      if (!Array.isArray(confirmImages) || confirmImages.length === 0) {
        validationErrors.confirmImages = 'At least one image is required';
      }

      if (Object.keys(validationErrors).length > 0) {
        Object.values(validationErrors).forEach((error) => toast.error(error));

        return;
      }

      try {
        const body = {
          shipment_status_id: 2,
        };

        const combinedArray = [...confirmImages, confirmSignature];
        const imageGroupUrl = `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_PUT_IMAGE_GROUP}/${orderNumber}`;
        const response = await axios.put(imageGroupUrl, { shipmentStatus: 'Completed', files: combinedArray });
        if(response.data){
          const url = `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_PUT_SHIPMENT}/${orderId}`;
          const res = await axios.put(url, body);
          if(res.data){
            toast.success("Shipment Completed!");
          }
        }
      } catch (err) {
        console.log(err);
        toast.error('Please try again!');

        return;
      }
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleReset = () => {
    setOrderNumber('');
    setOrderData(null);
    setConfirmImages([]);
    setActiveStep(0);
  };

  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <Fragment>
            {loading ? (
              <Grid item xs={12} textAlign='center'><CircularProgress/></Grid>
            ):(
              <>
                <Grid item xs={12} sm={6}>
                <CustomTextField
                  fullWidth
                  label="Order number"
                  value={orderNumber}
                  placeholder="abc123"
                  onChange={e => setOrderNumber(e.target.value)}
                  onKeyDown={e => {
                    if (e.key === 'Enter') {
                      handleNext()
                    }
                  }}
                />
                </Grid>
                <Grid item xs={12} sm={6}></Grid>
                {error && (
                  <Grid item xs={12} sm={6}>
                    <Typography variant='caption' color='error'>{error}</Typography>
                  </Grid>
                )}
              </>
            )}

          </Fragment>
        )
      case 1:
        return (
          <Fragment key={step}>
            <Grid item xs={12} sm={6}>
              <CustomTextField
                fullWidth
                value={orderData?.customer_name}
                label='Customer Name'
                disabled
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomTextField
                fullWidth
                value={orderData?.customer_email}
                label='Customer Email'
                disabled
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomTextField
                fullWidth
                value={orderData?.company_name}
                label='Company Name'
                disabled
              />
            </Grid>
            <Grid item xs={12} sm={6}></Grid>
            {orderData?.customer_address?.map((address, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <CustomTextField
                  fullWidth
                  value={address}
                  label={`Address ${index + 1}`} // Start from 1 instead of 0 (optional)
                  disabled
                />
              </Grid>
            ))}
            <Grid item xs={12} sm={3}>
              <CustomTextField
                fullWidth
                value={orderData?.address_city}
                label='City'
                disabled
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <CustomTextField
                fullWidth
                value={orderData?.address_state}
                label='State'
                disabled
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <CustomTextField
                fullWidth
                value={orderData?.address_country}
                label='Country'
                disabled
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <CustomTextField
                fullWidth
                value={orderData?.address_zip}
                label='Postcode'
                disabled
              />
            </Grid>
            <Grid item xs={12}>
              <Divider sx={{ width: '100%'}} />
            </Grid>
            <Grid item xs={12}>
              <Card>
                <CardHeader title='Products' />
                <DataGrid
                  autoHeight
                  rowHeight={62}
                  rows={orderData?.items ? orderData.items.map(item => ({ ...item, id: item.order_product_id })) : []}
                  columns={columns}
                  disableRowSelectionOnClick
                  pageSizeOptions={[5, 10, 25, 50]}
                  paginationModel={pagination}
                  onPaginationModelChange={setPagination}
                />
              </Card>
            </Grid>
          </Fragment>
        )
      case 2:
        return (
          <Fragment key={step}>
            <ImageDialog confirmImages={confirmImages} setConfirmImages={setConfirmImages} />

            <SignatureDialog setConfirmSignature={setConfirmSignature}/>
          </Fragment>
        )
      default:
        return 'Unknown Step'
    }
  }

  const renderContent = () => {
    if (activeStep === steps.length) {
      return (
        <Fragment>
          <Typography>All steps are completed!</Typography>
          <Box sx={{ mt: 4, display: 'flex', justifyContent: 'flex-end' }}>
            <Button variant='contained' onClick={handleReset}>
              Reset
            </Button>
          </Box>
        </Fragment>
      )
    } else {
      return (
        <form onSubmit={e => e.preventDefault()}>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <Typography variant='body2' sx={{ fontWeight: 600, color: 'text.primary' }}>
                {steps[activeStep].title}
              </Typography>
              <Typography variant='caption' component='p'>
                {steps[activeStep].subtitle}
              </Typography>
            </Grid>
            {getStepContent(activeStep)}
            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button variant='tonal' color='secondary' disabled={activeStep === 0} onClick={handleBack}>
                Back
              </Button>
              <Button variant='contained' onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
              </Button>
            </Grid>
          </Grid>
        </form>
      )
    }
  }

  return (
    <Fragment>
      <StepperWrapper>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((step, index) => {
            return (
              <Step key={index}>
                <StepLabel StepIconComponent={StepperCustomDot}>
                  <div className='step-label'>
                    <div>
                      <Typography className='step-title'>{step.title}</Typography>
                      <Typography className='step-subtitle'>{step.subtitle}</Typography>
                    </div>
                  </div>
                </StepLabel>
              </Step>
            )
          })}
        </Stepper>
      </StepperWrapper>
      <Card sx={{ mt: 4 }}>
        <CardContent>{renderContent()}</CardContent>
      </Card>
    </Fragment>
  )
}

export default StepperAlternativeLabel
