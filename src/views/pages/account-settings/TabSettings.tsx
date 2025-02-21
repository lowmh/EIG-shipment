// ** React
import { useState, useEffect, useCallback, MouseEvent, useMemo } from 'react'
import toast from 'react-hot-toast'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Menu from '@mui/material/Menu'
import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider'
import MenuItem from '@mui/material/MenuItem'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { DataGrid, GridColDef } from '@mui/x-data-grid'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Components
import axios from 'axios'

// ** Types
import { RoleType, StatusType } from 'src/types/apps/userTypes'
import CardHeader from '@mui/material/CardHeader'

// ** Row Options Component
const RowOptions = ({ onEdit, onDelete }: { onEdit: () => void, onDelete: () => void }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const rowOptionsOpen = Boolean(anchorEl)

  const handleRowOptionsClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleRowOptionsClose = () => {
    setAnchorEl(null)
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
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{ style: { minWidth: '8rem' } }}
      >
        <MenuItem onClick={() => { onEdit(); handleRowOptionsClose(); }} sx={{ '& svg': { mr: 2 } }}>
          <Icon icon='tabler:edit' fontSize={20} />
          Edit
        </MenuItem>
        <MenuItem onClick={() => { onDelete(); handleRowOptionsClose(); }} sx={{ '& svg': { mr: 2 } }}>
          <Icon icon='tabler:trash' fontSize={20} />
          Delete
        </MenuItem>
      </Menu>
    </>
  )
}

const TabUsers = () => {
  // ** State
  const [paginationRole, setPaginationRole] = useState({ page: 0, pageSize: 10 })
  const [paginationStatus, setPaginationStatus] = useState({ page: 0, pageSize: 10 })
  const [roleList, setRoleList] = useState<RoleType[]>([])
  const [statusList, setStatusList] = useState<StatusType[]>([])

  // ** API Calls
  const getAllUserRole = useCallback(async () => {
    try {
      const url = `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_GET_ALL_USER_ROLE}`
      const res = await axios.get(url)
      setRoleList(res.data || [])
    } catch (error) {
      toast.error('Failed to fetch user roles')
    }
  }, [])

  const getAllUserStatus = useCallback(async () => {
    try {
      const url = `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_GET_ALL_USER_STATUS}`
      const res = await axios.get(url)
      setStatusList(res.data || [])
    } catch (error) {
      toast.error('Failed to fetch user statuses')
    }
  }, [])

  useEffect(() => {
    getAllUserRole()
    getAllUserStatus()
  }, [getAllUserRole, getAllUserStatus])

  // ** Column Definitions
  const roleColumns: GridColDef[] = useMemo(() => [
    {
      flex: 0.1,
      minWidth: 200,
      field: 'name',
      headerName: 'Name',
      renderCell: ({ row }: { row: RoleType }) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography
            noWrap
            sx={{
              fontWeight: 500,
              textDecoration: 'none',
              color: 'text.secondary',
              '&:hover': { color: 'primary.main' }
            }}
          >
            {row.name}
          </Typography>
        </Box>
      )
    },
    {
      flex: 0.3,
      field: 'description',
      minWidth: 170,
      headerName: 'Description',
      renderCell: ({ row }: { row: RoleType }) => (
        <Typography noWrap sx={{ color: 'text.secondary', textTransform: 'capitalize' }}>
          {row.description}
        </Typography>
      )
    },
    {
      flex: 0.05,
      minWidth: 100,
      sortable: false,
      field: 'actions',
      headerName: 'Actions',
      renderCell: ({ row }: { row: RoleType }) => (
        <RowOptions
          onEdit={() => console.log(`Edit role: ${row.id}`)}
          onDelete={() => console.log(`Delete role: ${row.id}`)}
        />
      )
    }
  ], [])

  const statusColumns: GridColDef[] = useMemo(() => [
    {
      flex: 0.1,
      minWidth: 200,
      field: 'name',
      headerName: 'Name',
      renderCell: ({ row }: { row: StatusType }) => (
        <Typography
          noWrap
          sx={{
            fontWeight: 500,
            textDecoration: 'none',
            color: 'text.secondary',
            '&:hover': { color: 'primary.main' }
          }}
        >
          {row.name}
        </Typography>
      )
    },
    {
      flex: 0.3,
      field: 'description',
      minWidth: 200,
      headerName: 'Description',
      renderCell: ({ row }: { row: StatusType }) => (
        <Typography noWrap sx={{ color: 'text.secondary', textTransform: 'capitalize' }}>
          {row.description}
        </Typography>
      )
    }
  ], [])

  return (
    <Grid container spacing={6.5}>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='User Role' />
          <DataGrid
            autoHeight
            rowHeight={62}
            rows={roleList}
            columns={roleColumns}
            disableRowSelectionOnClick
            pageSizeOptions={[5, 10, 25, 50]}
            paginationModel={paginationRole}
            onPaginationModelChange={setPaginationRole}
          />
        </Card>
      </Grid>

      <Divider />

      <Grid item xs={12}>
        <Card>
          <CardHeader title='User Status' />
          <DataGrid
            autoHeight
            rowHeight={62}
            rows={statusList}
            columns={statusColumns}
            disableRowSelectionOnClick
            pageSizeOptions={[5, 10, 25, 50]}
            paginationModel={paginationStatus}
            onPaginationModelChange={setPaginationStatus}
          />
        </Card>
      </Grid>
    </Grid>
  )
}

export default TabUsers
