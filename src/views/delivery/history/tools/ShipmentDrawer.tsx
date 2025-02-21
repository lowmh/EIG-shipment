// ** React Imports
import { useEffect, forwardRef, useState } from 'react'
import toast from 'react-hot-toast'

// ** MUI Imports
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import { styled } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

// ** Custom Component Import
import CustomTextField from 'src/@core/components/mui/text-field'

// ** Third Party Imports
import { useForm } from 'react-hook-form'
import DatePicker from 'react-datepicker'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** axios
import axios from 'axios'
import { CustomUsersType } from 'src/types/apps/userTypes'
import ImageDialog from 'src/views/image/imageDialog'

interface SidebarShipmentProps {
  open: boolean
  toggle: () => void
  shipmentId: number
  condition: string
}

interface ShipmentData {
  tracking_number: string
  user_id: number
  vehicle_id: number
  eda_date: Date | null
  eta_id: number
  image_group_id: number
  shipment_status_id: number
  remarks: string | null
}

interface VehicleType {
  id: number
  car_plate: string
  car_model: string
}

interface EtaType{
  id: number
  name: string
  time_range: string
}

interface ImageType{
  id: number
  image_url: string
  image_name: string
}

const Header = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(6),
  justifyContent: 'space-between'
}))

const defaultValues: ShipmentData = {
  tracking_number: '',
  user_id: 0,
  vehicle_id: 0,
  eda_date: null,
  eta_id: 0,
  image_group_id: 0,
  shipment_status_id: 0,
  remarks: null,
}

const CustomInput = forwardRef((props, ref) => {
  return <CustomTextField sx={{ mb: 4 }} fullWidth {...props} inputRef={ref} label='Date Deliver' autoComplete='off' />
})

const SidebarShipment = ({ open, toggle, shipmentId, condition }: SidebarShipmentProps) => {
  // ** State
  const [formData, setFormData] = useState<ShipmentData>(defaultValues)
  const [userList, setUserList] = useState<CustomUsersType[]>([])
  const [vehicleList, setVehicleList] = useState<VehicleType[]>([])
  const [etaList, setEtaList] = useState<EtaType[]>([])
  const [imageGroup, setImageGroup] = useState<string>("")
  const [confirmImages, setConfirmImages] = useState<ImageType[]>([])

  // ** Hooks
  const {
    reset,
    formState: {}
  } = useForm({ defaultValues })

  // ** Fetch Shipment Data
  useEffect(() => {
    setFormData(defaultValues)
    if(shipmentId !== 0){
      fetchSpecificShipment()
      fetchUserList()
      fetchVehicleList()
      fetchEtaList()
    }
  }, [open])

  useEffect(() => {
    if (formData.image_group_id !== 0) {
      fetchImageList()
    }
  }, [formData.image_group_id])

  const fetchSpecificShipment = async () => {
    const url = `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_GET_SHIPMENT}/${shipmentId}`
    const { data } = await axios.get(url)
    setFormData(data)
  }
  const fetchUserList = async() => {
    const url = `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_GET_ALL_USER}?limit=50`
    const { data } = await axios.get(url)
    setUserList(data.users)
  }
  const fetchVehicleList = async() => {
    const url = `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_GET_ALL_VEHICLE}`
    const { data } = await axios.get(url)
    setVehicleList(data)
  }
  const fetchEtaList = async() => {
    const url = `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_GET_ALL_ETA}`
    const { data } = await axios.get(url)
    setEtaList(data)
  }
  const fetchImageList = async() => {
    const url = `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_GET_IMAGE_GROUP}/${formData.image_group_id}`
    const { data } = await axios.get(url)
    setConfirmImages(data.images)
    setImageGroup(data.group_name)
  }

  // ** Handle Input Change
  const handleUpdateFormData = (field: keyof ShipmentData, value: string | number | Date) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (condition === 'edit'){
      handleUpdateImage()
      handleUpdateShipment()
    }else if(condition === 'cancel'){
      handleCancelShipment()
    }
  }

   // ** Handle Form Submit
   const handleUpdateShipment = async () => {
    try {
      const url = `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_PUT_SHIPMENT}/${shipmentId}`
      const body = { ...formData }
      console.log(url, body)
      await axios.put(url, body)

      toast.success('Shipment updated successfully!')
      handleClose()
    } catch (err:any) {
      toast.error(err?.response?.data?.message || 'Update unsuccessful, please try again!')
    }
  }

  const handleUpdateImage = async () => {
    try {
      const url = `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_PUT_IMAGE_GROUP}/${imageGroup}`
      await axios.put(url, {shipmentStatus:"Shipped",files:confirmImages})
    } catch (error:any) {
      toast.error(error?.response?.data?.message || 'Update unsuccessful, please try again!')
    }
  }

  const handleCancelShipment = async () => {
    try {
      const url = `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_PUT_SHIPMENT}/${shipmentId}`
      setFormData((prev) => {
        const updatedData = { ...prev, shipment_status_id: 3 };
        axios.put(url, updatedData)
          .then((res) => {
            if (res.data) {
              toast.success('Shipment canceled successfully!');
              handleClose();
            }
          })
          .catch((error) => {
            toast.error(error.response?.data?.message || 'Update unsuccessful, please try again!');
          });

        return updatedData;
      });
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
        <Typography variant="h5">
          {condition === 'view' && 'View Shipment' }
          {condition === 'edit' && 'Edit Shipment' }
          {condition === 'cancel' && 'Cancel Shipment' }
        </Typography>
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
          {condition === 'view' && (
            <>
              <CustomTextField
                fullWidth
                label="Tracking Number"
                value={formData.tracking_number}
                placeholder="xxxxxx"
                sx={{ mb: 4 }}
                disabled
              />
              <CustomTextField
                select
                fullWidth
                label="Driver"
                value={formData.user_id}
                sx={{ mb: 4 }}
                disabled
              >
                {userList.map(user => (
                  <MenuItem key={user.id} value={user.id}>
                    {user.first_name} {user.last_name}
                  </MenuItem>
                ))}
              </CustomTextField>
              <CustomTextField
                select
                fullWidth
                label="Vehicle"
                value={formData.vehicle_id}
                sx={{ mb: 4 }}
                disabled
              >
                {vehicleList.map(vehicle => (
                  <MenuItem key={vehicle.id} value={vehicle.id}>
                    {vehicle.car_plate} - {vehicle.car_model}
                  </MenuItem>
                ))}
              </CustomTextField>
              <DatePicker
                selected={formData.eda_date ? new Date(formData.eda_date) : null}
                showYearDropdown
                showMonthDropdown
                id='form-layouts-tabs-date'
                placeholderText='MM-DD-YYYY'
                customInput={<CustomInput />}
                onChange={(e) => {e}}
                disabled
              />
              <CustomTextField
                select
                fullWidth
                label="ETA"
                value={formData.eta_id}
                sx={{ mb: 4 }}
                disabled
              >
                {etaList.map(eta => (
                  <MenuItem key={eta.id} value={eta.id}>
                    {eta.name} - {eta.time_range}
                  </MenuItem>
                ))}
              </CustomTextField>
              <Grid sx={{ mb: 4}}>
                <ImageDialog confirmImages={confirmImages} setConfirmImages={setConfirmImages} disabled drawer/>
              </Grid>
              <CustomTextField
                fullWidth
                rows={4}
                multiline
                label="Remarks*"
                value={formData.remarks}
                placeholder=""
                sx={{ mb: 4 }}
                disabled
              />
            </>
          )}
          {condition === 'edit' && (
            <>
              <CustomTextField
                fullWidth
                label="Tracking Number"
                value={formData.tracking_number}
                onChange={e => handleUpdateFormData('tracking_number', e.target.value)}
                placeholder="xxxxxx"
                sx={{ mb: 4 }}
              />
              <CustomTextField
                select
                fullWidth
                label="Select Driver"
                value={formData.user_id}
                onChange={e => handleUpdateFormData('user_id', Number(e.target.value))}
                sx={{ mb: 4 }}
              >
                {userList.map(user => (
                  <MenuItem key={user.id} value={user.id}>
                    {user.first_name} {user.last_name}
                  </MenuItem>
                ))}
              </CustomTextField>
              <CustomTextField
                select
                fullWidth
                label="Select Vehicle"
                value={formData.vehicle_id}
                onChange={e => handleUpdateFormData('vehicle_id', Number(e.target.value))}
                sx={{ mb: 4 }}
              >
                {vehicleList.map(vehicle => (
                  <MenuItem key={vehicle.id} value={vehicle.id}>
                    {vehicle.car_plate} - {vehicle.car_model}
                  </MenuItem>
                ))}
              </CustomTextField>
              <DatePicker
                selected={formData.eda_date ? new Date(formData.eda_date) : null}
                showYearDropdown
                showMonthDropdown
                id='form-layouts-tabs-date'
                placeholderText='MM-DD-YYYY'
                customInput={<CustomInput />}
                onChange={(date:Date) => handleUpdateFormData('eda_date', date)}
              />
              <CustomTextField
                select
                fullWidth
                label="ETA"
                value={formData.eta_id}
                onChange={e => handleUpdateFormData('eta_id', Number(e.target.value))}
                sx={{ mb: 4 }}
              >
                {etaList.map(eta => (
                  <MenuItem key={eta.id} value={eta.id}>
                    {eta.name} - {eta.time_range}
                  </MenuItem>
                ))}
              </CustomTextField>
              <Grid sx={{ mb: 4}}>
                <ImageDialog confirmImages={confirmImages} setConfirmImages={setConfirmImages} drawer/>
              </Grid>
            </>
          )}
          {condition === 'cancel' && (
            <CustomTextField
              fullWidth
              rows={4}
              multiline
              label="Remarks*"
              value={formData.remarks}
              onChange={e => handleUpdateFormData('remarks', e.target.value)}
              placeholder=""
              sx={{ mb: 4 }}
            />
          )}
          {condition !== 'view' && (
            <>
              <Button type="submit" variant="contained" sx={{ mr: 3 }}>
                Submit
              </Button>
              <Button variant="tonal" color="secondary" onClick={handleClose}>
                Cancel
              </Button>
            </>
          )}
        </form>
      </Box>
    </Drawer>
  )
}

export default SidebarShipment
