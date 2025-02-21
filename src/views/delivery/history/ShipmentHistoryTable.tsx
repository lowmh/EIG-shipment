import { useState, useEffect, MouseEvent, useCallback } from 'react'
import toast from 'react-hot-toast'
import { useRouter } from 'next/router'

// ** Importing date-fns to format dates
import { format } from 'date-fns'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Menu from '@mui/material/Menu'
import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider'
import MenuItem from '@mui/material/MenuItem'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import Select, { SelectChangeEvent } from '@mui/material/Select'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Components Imports
import CustomChip from 'src/@core/components/mui/chip'
import ShipmentDrawer from './tools/ShipmentDrawer'

//import CustomTextField from 'src/@core/components/mui/text-field'

// ** Third Party Components
import axios from 'axios'

// ** Types Imports
import { ThemeColor } from 'src/@core/layouts/types'

// ** Custom Table Components Imports
import TableHeader from './tools/TableHeader'

interface ShipmentStatusType {
  [key: string]: ThemeColor
}

interface CellType {
  row: ShipmentType
}

interface ShipmentType {
  id: number
  b2b_order_id: string
  tracking_number: string
  user_first_name: string
  user_last_name: string
  car_plate: string
  eta_name: string
  eta_time_range: string
  shipment_status: string
  eda_date: Date
  created_date: Date
  updated_date: Date
}

interface StatusType {
  id: number
  name: string
}

const shipmentStatusObj: ShipmentStatusType = {
  Shipped: 'warning',
  Completed: 'success',
  Cancelled: 'error',
}

const ShipmentHistoryTable = () => {
  const router = useRouter()

  const RowOptions = ({ id, status }: { id: number, status: string }) => {
    // ** State
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const rowOptionsOpen = Boolean(anchorEl)

    const handleRowOptionsClick = (event: MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget)
    }
    const handleRowOptionsClose = () => {
      setAnchorEl(null)
    }
    const handleView = () => {
      setShipmentCondition('view')
      setShipmentId(id)
      toggleShipmentDrawer();
      handleRowOptionsClose();
    };
    const handleEdit = () => {
      setShipmentCondition('edit')
      setShipmentId(id)
      toggleShipmentDrawer();
      handleRowOptionsClose();
    };
    const handleCancel = () => {
      setShipmentCondition('cancel')
      setShipmentId(id)
      toggleShipmentDrawer();
      handleRowOptionsClose();
    }

    return (
      <>
        <IconButton size='small' onClick={handleRowOptionsClick}>
          <Icon icon='tabler:dots-vertical' />
        </IconButton>
        <Menu
          keepMounted
          anchorEl={anchorEl}
          open={rowOptionsOpen}
          onClose={handleRowOptionsClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right'
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
          PaperProps={{ style: { minWidth: '8rem' } }}
        >
          <MenuItem onClick={handleView} sx={{ '& svg': { mr: 2 } }}>
            <Icon icon='tabler:eye' fontSize={20} />
            View
          </MenuItem>
          {status !== 'Completed' && (
            <MenuItem onClick={handleEdit} sx={{ '& svg': { mr: 2 } }}>
              <Icon icon='tabler:edit' fontSize={20} />
              Edit
            </MenuItem>
          )}
          {status !== 'Cancelled' && (
            <MenuItem onClick={handleCancel} sx={{ '& svg': { mr: 2 } }}>
              <Icon icon='tabler:trash' fontSize={20} />
              Cancel
            </MenuItem>
          )}
        </Menu>
      </>
    )
  }

  const columns: GridColDef[] = [
    {
      flex: 0.2,
      minWidth: 200,
      field: 'b2b_order_id',
      headerName: 'Order Number',
      renderCell: ({ row }: CellType) => {
        const { b2b_order_id, tracking_number } = row

        return (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography noWrap sx={{ fontWeight: 500, color: 'text.secondary' }}>
                {b2b_order_id}
              </Typography>
              <Typography noWrap variant="body2" sx={{ color: 'text.disabled' }}>
                Tracking Number: {tracking_number}
              </Typography>
            </Box>
          </Box>
        )
      },
    },
    {
      flex: 0.15,
      field: 'status',
      minWidth: 100,
      headerName: 'Status',
      renderCell: ({ row }: CellType) => {
        const { shipment_status } = row

        return (
          <CustomChip
            rounded
            skin='light'
            size='small'
            label={shipment_status}
            color={shipmentStatusObj[shipment_status]}
            sx={{ textTransform: 'capitalize' }}
          />
        )
      },
    },
    {
      flex: 0.15,
      minWidth: 100,
      field: 'created_date',
      headerName: 'Date Created',
      renderCell: ({ row }: CellType) => {
        const { created_date } = row
        const formattedDate = created_date ? format(new Date(created_date), 'yyyy-MM-dd HH:mm') : ''

        return (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography noWrap sx={{ color: 'text.secondary' }}>
              {formattedDate}
            </Typography>
          </Box>
        )
      },
    },
    {
      flex: 0.15,
      minWidth: 100,
      field: 'updated_date',
      headerName: 'Date Completed',
      renderCell: ({ row }: CellType) => {
        const { created_date, updated_date, shipment_status } = row
        const formattedDate = updated_date ? format(new Date(updated_date), 'yyyy-MM-dd HH:mm') : ''

        return (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography noWrap sx={{ color: 'text.secondary' }}>
              {shipment_status === "Completed" && updated_date !== created_date ? formattedDate : '-'}
            </Typography>
          </Box>
        )
      },
    },
    {
      flex: 0.1,
      minWidth: 80,
      sortable: false,
      field: 'actions',
      headerName: 'Actions',
      renderCell: ({ row }: CellType) =>
        <RowOptions id={row.id} status={row.shipment_status} />
    }
  ]

  // ** State Variables
  const [value, setValue] = useState<string>('')
  const [status, setStatus] = useState<string>('')
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 10 })
  const [shipment, setShipment] = useState<ShipmentType[]>([])
  const [statusList, setStatusList] = useState<StatusType[]>([])
  const [shipmentOpen, setShipmentOpen] = useState<boolean>(false)
  const [shipmentId, setShipmentId] = useState<number>(0)
  const [shipmentCondition, setShipmentCondition] = useState<string>("")

  const fetchData = async (params: any) => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_GET_ALL_SHIPMENT}`, { params })
      setShipment(res.data?.data || [])
      setPaginationModel({
        page: (res.data.page || 1) - 1,
        pageSize: res.data.limit || 10,
      })
    } catch (error) {
      toast.error('Error fetching shipment data')
    }
  }

  const getAllShipmentStatus = async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_GET_ALL_SHIPMENT_STATUS}`)
      setStatusList(res.data || [])
    } catch (error) {
      toast.error('Error fetching shipment statuses')
    }
  }

  const handleFilter = useCallback((val: string) => setValue(val), [])
  const handleStatusChange = useCallback(
    (e: unknown) => {
      const event = e as SelectChangeEvent<string>;
      setStatus(event.target.value);
    },
    []
  );


  useEffect(() => {
    fetchData({ status, search: value, page: paginationModel.page + 1, limit: paginationModel.pageSize })
  }, [status, value, shipmentOpen])

  useEffect(() => {
    getAllShipmentStatus()
  }, [])

  const toggleShipmentDrawer = () => setShipmentOpen(!shipmentOpen)

  return (
    <Grid container spacing={6.5}>
      <Grid item xs={12}>
        <Card>
          <CardHeader title="Search Filters" />
          <CardContent>
            <Grid container spacing={6}>
              <Grid item sm={4} xs={12}>
                <Select
                  fullWidth
                  value={status}
                  onChange={handleStatusChange}
                  displayEmpty
                >
                  <MenuItem value="">Select Status</MenuItem>
                  {statusList.map((status) => (
                    <MenuItem key={status.id} value={status.id}>
                      {status.name}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>
            </Grid>
          </CardContent>
          <Divider sx={{ m: '0 !important' }} />
          <TableHeader value={value} handleFilter={handleFilter} toggle={() => router.push('/carrier/shipment')} />
          <DataGrid
            autoHeight
            rowHeight={62}
            rows={shipment}
            columns={columns}
            disableRowSelectionOnClick
            pageSizeOptions={[1, 5, 10, 25, 50]}
            paginationModel={paginationModel}
            onPaginationModelChange={setPaginationModel}
          />
        </Card>
      </Grid>

      <ShipmentDrawer open={shipmentOpen} toggle={toggleShipmentDrawer} shipmentId={shipmentId} condition={shipmentCondition}/>
    </Grid>
  )
}

export default ShipmentHistoryTable
