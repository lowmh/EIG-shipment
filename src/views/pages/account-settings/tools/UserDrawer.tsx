// ** React Imports
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

// ** MUI Imports
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import { styled } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import InputAdornment from '@mui/material/InputAdornment'

// import Grid from '@mui/material/Grid'
// import { BoxProps } from '@mui/material/Box'

// ** Custom Component Import
import CustomTextField from 'src/@core/components/mui/text-field'

// ** Third Party Imports
import { useForm } from 'react-hook-form'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** axios
import axios from 'axios'

interface SidebarAddUserProps {
  open: boolean
  toggle: () => void
  userId: number
}

interface UserData {
  last_name: string
  first_name: string
  email: string
  contact: string
  password: string
  user_role_id: number
  user_status_id: number
}

interface RoleType {
  id: number
  name: string
}

interface StatusType {
  id: number
  name: string
}

const Header = styled(Box)(({ theme }) => ({
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
  user_role_id: 2,
  user_status_id: 1
}

const SidebarAddUser = ({ open, toggle, userId }: SidebarAddUserProps) => {
  // ** State
  const [formData, setFormData] = useState<UserData>(defaultValues)
  const [roleList, setRoleList] = useState<RoleType[]>([])
  const [statusList, setStatusList] = useState<StatusType[]>([])

  // ** Hooks
  const {
    reset,
    formState: { errors }
  } = useForm({ defaultValues })

  // ** Fetch User Data
  useEffect(() => {
    const fetchSpecificUser = async () => {
      if (userId !== 0) {
        const url = `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_GET_USER}/${userId}`
        const { data } = await axios.get(url)
        setFormData(data)
      }
    }

    fetchSpecificUser()
  }, [userId])

  // ** Fetch Roles & Statuses
  useEffect(() => {
    const getAllUserRole = async () => {
      const url = `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_GET_ALL_USER_ROLE}`
      const { data } = await axios.get(url)
      setRoleList(data || [])
    }

    const getAllUserStatus = async () => {
      const url = `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_GET_ALL_USER_STATUS}`
      const { data } = await axios.get(url)
      setStatusList(data || [])
    }

    getAllUserRole()
    getAllUserStatus()
  }, [])

  // ** Handle Input Change
  const handleUpdateFormData = (field: keyof UserData, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (userId !== 0){
      handleUpdateUser()
    }else{
      handleAddUser()
    }
  }

  // ** Handle Form Submit
  const handleAddUser = async () => {
    try {
      const url = `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_POST_USER}`
      const body = {
        last_name: formData.last_name,
        first_name: formData.first_name,
        email: formData.email,
        contact: formData.contact,
        password: formData.password,
        user_role_id: formData.user_role_id,
        user_status_id: formData.user_status_id
      }

      await axios.post(url, body)

      toast.success('User created successfully!')
      handleClose()
    } catch (error:any) {
      toast.error(error?.response?.data?.message || 'Duplicated email')
    }
  }

   // ** Handle Form Submit
   const handleUpdateUser = async () => {
    try {
      const url = `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_PUT_USER}/${userId}`
      const body = { ...formData }
      await axios.put(url, body)

      toast.success('User updated successfully!')
      handleClose()
    } catch (error:any) {
      toast.error(error?.response?.data?.message || 'Update unsuccessful, please try again!')
    }
  }

  // ** Close Sidebar & Reset Form
  const handleClose = () => {
    toggle()
    reset(defaultValues)
    setFormData(defaultValues)
  }

  return (
    <Drawer
      open={open}
      anchor="right"
      variant="temporary"
      onClose={handleClose}
      ModalProps={{ keepMounted: true }}
      sx={{ '& .MuiDrawer-paper': { width: { xs: 300, sm: 400 } } }}
    >
      <Header>
        <Typography variant="h5">{userId !== 0 ? 'Edit User' : 'Add User'}</Typography>
        <IconButton
          size="small"
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
          <Icon icon="tabler:x" fontSize="1.125rem" />
        </IconButton>
      </Header>

      <Box sx={{ p: theme => theme.spacing(0, 6, 6) }}>
        <form onSubmit={handleSubmit}>
          <CustomTextField
            fullWidth
            label="First Name"
            value={formData.first_name}
            onChange={e => handleUpdateFormData('first_name', e.target.value)}
            placeholder="John"
            sx={{ mb: 4 }}
          />
          <CustomTextField
            fullWidth
            label="Last Name"
            value={formData.last_name}
            onChange={e => handleUpdateFormData('last_name', e.target.value)}
            placeholder="Doe"
            sx={{ mb: 4 }}
          />
          <CustomTextField
            fullWidth
            type="email"
            label="Email"
            value={formData.email}
            onChange={e => handleUpdateFormData('email', e.target.value)}
            placeholder="johndoe@email.com"
            sx={{ mb: 4 }}
            error={Boolean(errors.email)}
          />
          <CustomTextField
            fullWidth
            type="number"
            label="Phone Number"
            value={formData.contact}
            onChange={e => handleUpdateFormData('contact', e.target.value)}
            placeholder="202 555 0111"
            sx={{ mb: 4 }}
            InputProps={{ startAdornment: <InputAdornment position="start">MY (+60)</InputAdornment> }}
          />

          <CustomTextField
            select
            fullWidth
            label="Select Role"
            value={formData.user_role_id}
            onChange={e => handleUpdateFormData('user_role_id', Number(e.target.value))}
            sx={{ mb: 4 }}
          >
            {roleList.map(role => (
              <MenuItem key={role.id} value={role.id}>
                {role.name}
              </MenuItem>
            ))}
          </CustomTextField>

          <CustomTextField
            select
            fullWidth
            label="Select Status"
            value={formData.user_status_id}
            onChange={e => handleUpdateFormData('user_status_id', Number(e.target.value))}
            sx={{ mb: 6 }}
          >
            {statusList.map(status => (
              <MenuItem key={status.id} value={status.id}>
                {status.name}
              </MenuItem>
            ))}
          </CustomTextField>

          <Button type="submit" variant="contained" sx={{ mr: 3 }}>
            Submit
          </Button>
          <Button variant="tonal" color="secondary" onClick={handleClose}>
            Cancel
          </Button>
        </form>
      </Box>
    </Drawer>
  )
}

export default SidebarAddUser
