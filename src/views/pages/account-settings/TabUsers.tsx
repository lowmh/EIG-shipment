// ** React Imports
import { useState, useEffect, MouseEvent, useCallback } from 'react'
import toast from 'react-hot-toast'

// ** Next Imports
import { GetStaticProps, InferGetStaticPropsType } from 'next/types'

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
import { SelectChangeEvent } from '@mui/material/Select'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Components Imports
import CustomChip from 'src/@core/components/mui/chip'
import CustomAvatar from 'src/@core/components/mui/avatar'
import CustomTextField from 'src/@core/components/mui/text-field'
import CardStatsHorizontalWithDetails from 'src/@core/components/card-statistics/card-stats-horizontal-with-details'


// ** Third Party Components
import axios from 'axios'

// ** Types Imports
import { CardStatsType } from 'src/@fake-db/types'
import { ThemeColor } from 'src/@core/layouts/types'
import { CustomUsersType } from 'src/types/apps/userTypes'
import { CardStatsHorizontalWithDetailsProps } from 'src/@core/components/card-statistics/types'

// ** Custom Table Components Imports
import TableHeader from './tools/TableHeader'
import UserDrawer from './tools/UserDrawer'


interface UserRoleType {
  [key: string]: { icon: string; color: string }
}

interface UserStatusType {
  [key: string]: ThemeColor
}

interface CellType {
  row: CustomUsersType
}

interface RoleType{
  id: number,
  name: string
}

interface StatusType{
  id: number,
  name: string
}

// ** renders client column
const userRoleObj: UserRoleType = {
  Admin: { icon: 'tabler:device-laptop', color: 'primary' },
  Driver: { icon: 'tabler:truck-delivery', color: 'secondary' }
}

const userStatusObj: UserStatusType = {
  Approved: 'success',
  Pending: 'warning',
  Suspended: 'secondary',
  Rejected: 'error',
}


const TabUsers = ({ apiData }: InferGetStaticPropsType<typeof getStaticProps>) => {

  const RowOptions = ({ id }: { id: number }) => {
    // ** State
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const rowOptionsOpen = Boolean(anchorEl)

    const handleRowOptionsClick = (event: MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget)
    }
    const handleRowOptionsClose = () => {
      setAnchorEl(null)
    }
    const handleEdit = () => {
      setSelectedUserId(id);
      toggleAddUserDrawer(); // Open the drawer
      handleRowOptionsClose(); // Close the menu
    };
    const deleteUser = async() => {
      const url = `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_DELETE_USER}/${id}`;
      const res = await axios.delete(url)
      fetchData()
      toast.success(res.data.message)
    }
    const handleDelete = () => {
      deleteUser()
      handleRowOptionsClose()
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
          {/* <MenuItem
            component={Link}
            sx={{ '& svg': { mr: 2 } }}
            href='/apps/user/view/account'
            onClick={handleRowOptionsClose}
          >
            <Icon icon='tabler:eye' fontSize={20} />
            View
          </MenuItem> */}
          <MenuItem onClick={handleEdit} sx={{ '& svg': { mr: 2 } }}>
            <Icon icon='tabler:edit' fontSize={20} />
            Edit
          </MenuItem>
          <MenuItem onClick={handleDelete} sx={{ '& svg': { mr: 2 } }}>
            <Icon icon='tabler:trash' fontSize={20} />
            Delete
          </MenuItem>
        </Menu>
      </>
    )
  }

  const columns: GridColDef[] = [
    {
      flex: 0.2,
      minWidth: 200,
      field: 'fullName',
      headerName: 'User',
      renderCell: ({ row }: CellType) => {
        const { first_name, last_name, email } = row

        return (
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
                {last_name} {first_name}
              </Typography>
              <Typography noWrap variant='body2' sx={{ color: 'text.disabled' }}>
                {email}
              </Typography>
            </Box>
          </Box>
        )
      }
    },
    {
      flex: 0.15,
      field: 'role',
      minWidth: 170,
      headerName: 'Role',
      renderCell: ({ row }: CellType) => {
        return (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <CustomAvatar
              skin='light'
              sx={{ mr: 4, width: 30, height: 30 }}
              color={(userRoleObj[row.user_role].color as ThemeColor) || 'primary'}
            >
              <Icon icon={userRoleObj[row.user_role].icon} />
            </CustomAvatar>
            <Typography noWrap sx={{ color: 'text.secondary', textTransform: 'capitalize' }}>
              {row.user_role}
            </Typography>
          </Box>
        )
      }
    },
    {
      flex: 0.1,
      minWidth: 110,
      field: 'status',
      headerName: 'Status',
      renderCell: ({ row }: CellType) => {
        return (
          <CustomChip
            rounded
            skin='light'
            size='small'
            label={row.user_status}
            color={userStatusObj[row.user_status]}
            sx={{ textTransform: 'capitalize' }}
          />
        )
      }
    },
    {
      flex: 0.1,
      minWidth: 100,
      sortable: false,
      field: 'actions',
      headerName: 'Actions',
      renderCell: ({ row }: CellType) => <RowOptions id={row.id}/>
    }
  ]

  // ** State (filter value)
  const [role, setRole] = useState<string>('')
  const [value, setValue] = useState<string>('')
  const [status, setStatus] = useState<string>('')
  const [addUserOpen, setAddUserOpen] = useState<boolean>(false)
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 10 })

  // ** users data
  const [user, setUser] = useState<CustomUsersType[]>([]);
  const [selectedUserId, setSelectedUserId] = useState<number>(0);

  // ** filter dropdown options
  const [roleList , setRoleList] = useState<RoleType[]>([]);
  const [statusList , setStatusList] = useState<StatusType[]>([]);

  const fetchData = async () => {
    try {
      const params = {
        role: role || '',
        status: status || '',
        search: value || '',
        page: paginationModel?.page + 1 || 1,
        pageSize: paginationModel?.pageSize || 10,
      };

      const url = `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_GET_ALL_USER}`;
      const res = await axios.get(url, { params });

      setUser(res.data?.users || []);

      setPaginationModel({
        page: (res.data.currentPage || 1) - 1,
        pageSize: res.data.pageSize || 10,
      });
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 404) {
        setUser([]);
      } else {
        toast.error('Failed to fetch users');
      }
    }
  };


  useEffect(() => {
    fetchData()
  }, [role, status, value, addUserOpen])

  useEffect(()=>{
    getAllUserStatus()
    getAllUserRole()
  },[])

  const getAllUserRole = async () => {
    const url = `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_GET_ALL_USER_ROLE}`;
    const res = await axios.get(url)
    setRoleList(res.data || [])
  }

  const getAllUserStatus = async () => {
    const url = `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_GET_ALL_USER_STATUS}`;
    const res = await axios.get(url)
    setStatusList(res.data || [])
  }

  const handleFilter = useCallback((val: string) => {
    setValue(val)
  }, [])

  const handleRoleChange = useCallback((e: SelectChangeEvent<unknown>) => {
    setRole(e.target.value as string)
  }, [])

  const handleStatusChange = useCallback((e: SelectChangeEvent<unknown>) => {
    setStatus(e.target.value as string)
  }, [])

  const toggleAddUserDrawer = () => setAddUserOpen(!addUserOpen)

  return (
    <Grid container spacing={6.5}>
      <Grid item xs={12}>
        {apiData && (
          <Grid container spacing={6}>
            {apiData.statsHorizontalWithDetails.map((item: CardStatsHorizontalWithDetailsProps, index: number) => {
              return (
                <Grid item xs={12} md={3} sm={6} key={index}>
                  <CardStatsHorizontalWithDetails {...item} />
                </Grid>
              )
            })}
          </Grid>
        )}
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Search Filters' />
          <CardContent>
            <Grid container spacing={6}>
              <Grid item sm={4} xs={12}>
                <CustomTextField
                  select
                  fullWidth
                  defaultValue='Select Role'
                  SelectProps={{
                    value: role,
                    displayEmpty: true,
                    onChange: e => handleRoleChange(e)
                  }}
                >
                  <MenuItem value=''>Select Role</MenuItem>
                  {roleList.map((roleItem) => (
                    <MenuItem key={roleItem.id} value={roleItem.id}>
                      {roleItem.name}
                    </MenuItem>
                  ))}
                </CustomTextField>
              </Grid>
              <Grid item sm={4} xs={12}>
                <CustomTextField
                  select
                  fullWidth
                  defaultValue='Select Status'
                  SelectProps={{
                    value: status,
                    displayEmpty: true,
                    onChange: e => handleStatusChange(e)
                  }}
                >
                  <MenuItem value=''>Select Status</MenuItem>
                  {statusList.map((status)=>(
                    <MenuItem key={status.id} value={status.id}>{status.name}</MenuItem>
                  ))}
                </CustomTextField>
              </Grid>
            </Grid>
          </CardContent>
          <Divider sx={{ m: '0 !important' }} />
          <TableHeader value={value} handleFilter={handleFilter} toggle={toggleAddUserDrawer} setSelectedUserId={setSelectedUserId}/>
          <DataGrid
            autoHeight
            rowHeight={62}
            rows={user}
            columns={columns}
            disableRowSelectionOnClick
            pageSizeOptions={[5,10, 25, 50]}
            paginationModel={paginationModel}
            onPaginationModelChange={setPaginationModel}
          />
        </Card>
      </Grid>

      <UserDrawer open={addUserOpen} toggle={toggleAddUserDrawer} userId={selectedUserId}/>
    </Grid>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await axios.get('/cards/statistics')
  const apiData: CardStatsType = res.data

  return {
    props: {
      apiData
    }
  }
}

export default TabUsers
