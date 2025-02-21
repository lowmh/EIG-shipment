// ** Next Import
// import Link from 'next/link'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'

// ** Custom Components Imports
import PageHeader from 'src/@core/components/page-header'
import ShipmentHistoryTable from 'src/views/delivery/history/ShipmentHistoryTable'

// ** Styled Component
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'


const HistoryTable = () => {
  return (
    <DatePickerWrapper>
    <Grid container spacing={6}>
      <PageHeader
        title={
          <Typography variant='h2'>
              Shipment History
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
        <ShipmentHistoryTable />
      </Grid>
    </Grid>
    </DatePickerWrapper>
  )
}

HistoryTable.acl = {
  action: 'read',
  subject: 'history-page'
}

export default HistoryTable
