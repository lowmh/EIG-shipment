// ** Next Import
//import Link from 'next/link'

// ** MUI Imports
import Grid from '@mui/material/Grid'

//import { styled } from '@mui/material/styles'

import { Divider } from '@mui/material'
import Typography from '@mui/material/Typography'

// ** Custom Components Imports
import PageHeader from 'src/@core/components/page-header'
import StepForm from 'src/views/delivery/complete/StepperAlternativeLabel'

const CompleteForm = () => {
  return (
    <Grid container spacing={6}>
      <PageHeader
        title={
          <Typography variant='h2'>
              Complete Shipment
          </Typography>
        }

        // subtitle={
        //   <Typography sx={{ color: 'text.secondary' }}>
        //     Data Grid is a fast and extendable react data table and react data grid.
        //   </Typography>
        // }

      />
      <Grid item xs={12} mt={3} mb={3}>
        <Divider />
      </Grid>
      <Grid item xs={12}>
        <StepForm />
      </Grid>
    </Grid>
  )
}
CompleteForm.acl = {
  action: 'read',
  subject: 'complete-page'
}
export default CompleteForm
