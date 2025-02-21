// ** React Imports
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import { styled } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Box, { BoxProps } from '@mui/material/Box'
import InputAdornment from '@mui/material/InputAdornment'

// ** Custom Component Import
import CustomTextField from 'src/@core/components/mui/text-field'

// ** Third Party Imports
import { useForm } from 'react-hook-form'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** axios
import axios from 'axios'

interface SidebarAddUserType {
  open: boolean
  toggle: () => void
}

interface UserData {
  last_name: string
  first_name: string
  email: string
  contact: string
  password: string
  role: number
  status: number
}

interface RoleType {
  id: number
  name: string
}

interface StatusType {
  id: number
  name: string
}

const Header = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(6),
  justifyContent: 'space-between'
}))

const defaultValues: UserData = {
  first_name: '',
  last_name: '',
  email: '',
  contact: '',
  password: 'Eig123.',
  role: 2,
  status: 1
}

const SidebarAddUser = (props: SidebarAddUserType) => {
  // ** Props
  const { open, toggle } = props

  // ** State
  const [formData, setFormData] = useState<UserData>(defaultValues)
  const [roleList, setRoleList] = useState<RoleType[]>([])
  const [statusList, setStatusList] = useState<StatusType[]>([])

  // ** Hooks
  const {
    reset,

    //control,

    formState: { errors }
  } = useForm({
    defaultValues
  })

  const handleClose = () => {
    toggle()
    reset()
    setFormData(defaultValues) // Reset formData state when closing
  }

  useEffect(() => {
    getAllUserStatus()
    getAllUserRole()
  }, [])

  const getAllUserRole = async () => {
    try {
      const url = `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_GET_ALL_USER_ROLE}`
      const res = await axios.get(url)
      setRoleList(res.data || [])
    } catch (error) {
      console.error('Error fetching user roles:', error)
    }
  }

  const getAllUserStatus = async () => {
    try {
      const url = `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_GET_ALL_USER_STATUS}`
      const res = await axios.get(url)
      setStatusList(res.data || [])
    } catch (error) {
      console.error('Error fetching user statuses:', error)
    }
  }

  const handleUpdateFormData = (field: keyof UserData, value: string | number) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleAddUser = async (e: React.FormEvent) => {
    e.preventDefault() // Prevent default form submission

    try {
      const url = `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_POST_USER}`
      await axios.post(url, formData)
      toast.success('User created successfully!')
      handleClose()
    } catch (error: any) {
      toast.error(error?.response?.data?.error || 'Duplicated email');
      console.error('Error adding user:', error)
    }
  }

  return (
    <Drawer
      open={open}
      anchor='right'
      variant='temporary'
      onClose={handleClose}
      ModalProps={{ keepMounted: true }}
      sx={{ '& .MuiDrawer-paper': { width: { xs: 300, sm: 400 } } }}
    >
      <Header>
        <Typography variant='h5'>Add User</Typography>
        <IconButton
          size='small'
          onClick={handleClose}
          sx={{
            p: '0.438rem',
            borderRadius: 1,
            color: 'text.primary',
            backgroundColor: 'action.selected',
            '&:hover': {
              backgroundColor: theme => `rgba(${theme.palette.customColors.main}, 0.16)`
            }
          }}
        >
          <Icon icon='tabler:x' fontSize='1.125rem' />
        </IconButton>
      </Header>
      <Box sx={{ p: theme => theme.spacing(0, 6, 6) }}>
        <form onSubmit={handleAddUser}>
          <CustomTextField
            fullWidth
            sx={{ mb: 4 }}
            label='First Name'
            value={formData.first_name}
            onChange={e => handleUpdateFormData('first_name', e.target.value)}
            placeholder='John Doe'
          />
          <CustomTextField
            fullWidth
            sx={{ mb: 4 }}
            label='Last Name'
            value={formData.last_name}
            onChange={e => handleUpdateFormData('last_name', e.target.value)}
            placeholder='johndoe'
          />
          <CustomTextField
            fullWidth
            type='email'
            label='Email'
            value={formData.email}
            sx={{ mb: 4 }}
            onChange={e => handleUpdateFormData('email', e.target.value)}
            error={Boolean(errors.email)}
            placeholder='johndoe@email.com'
          />
          <CustomTextField
            fullWidth
            type='number'
            value={formData.contact}
            sx={{ mb: 4 }}
            label='Phone Number'
            onChange={e => handleUpdateFormData('contact', e.target.value)}
            placeholder='202 555 0111'
            InputProps={{ startAdornment: <InputAdornment position='start'>MY (+60)</InputAdornment> }}
          />

          <CustomTextField
            select
            fullWidth
            sx={{ mb: 4 }}
            label='Select Role'
            SelectProps={{
              value: formData.role,
              onChange: e => handleUpdateFormData('role', Number(e.target.value))
            }}
          >
            {roleList.map(roleItem => (
              <MenuItem key={roleItem.id} value={roleItem.id}>
                {roleItem.name}
              </MenuItem>
            ))}
          </CustomTextField>

          <CustomTextField
            select
            fullWidth
            sx={{ mb: 6 }}
            label='Select Status'
            SelectProps={{
              value: formData.status,
              onChange: e => handleUpdateFormData('status', Number(e.target.value))
            }}
          >
            {statusList.map(status => (
              <MenuItem key={status.id} value={status.id}>
                {status.name}
              </MenuItem>
            ))}
          </CustomTextField>

          <Grid container spacing={5}>
            <Grid item xs={12} mb={5}>
              <Typography>Default password: Eig123.</Typography>
            </Grid>
          </Grid>

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Button type='submit' variant='contained' sx={{ mr: 3 }}>
              Submit
            </Button>
            <Button variant='tonal' color='secondary' onClick={handleClose}>
              Cancel
            </Button>
          </Box>
        </form>
      </Box>
    </Drawer>
  )
}

export default SidebarAddUser
