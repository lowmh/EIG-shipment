// ** React Imports
import { useState, useEffect} from 'react'

// import { useState, useEffect, ElementType, ChangeEvent } from 'react'

import toast from 'react-hot-toast'

// ** Next Import
import { useRouter } from 'next/router'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Dialog from '@mui/material/Dialog'
import Checkbox from '@mui/material/Checkbox'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import FormControl from '@mui/material/FormControl'
import CardContent from '@mui/material/CardContent'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import FormHelperText from '@mui/material/FormHelperText'
import InputAdornment from '@mui/material/InputAdornment'
import Button from '@mui/material/Button'
import FormControlLabel from '@mui/material/FormControlLabel'
import IconButton from '@mui/material/IconButton'

// import Divider from '@mui/material/Divider'
// import { styled } from '@mui/material/styles'
// import MenuItem from '@mui/material/MenuItem'
// import { ButtonProps } from '@mui/material/Button'

// ** Custom Component Import
import CustomTextField from 'src/@core/components/mui/text-field'

// ** Third Party Imports
import { useForm, Controller } from 'react-hook-form'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Axios Imports
import axios from 'axios'


interface Data {
  id: number,
  email: string
  last_name: string
  first_name: string
  contact: string,
  user_status: string,
  user_role: string
}

const initialData: Data = {
  id: 0,
  email: "",
  last_name: "",
  first_name: "",
  contact: "",
  user_status: "",
  user_role: ""
}

// const ImgStyled = styled('img')(({ theme }) => ({
//   width: 100,
//   height: 100,
//   marginRight: theme.spacing(6),
//   borderRadius: theme.shape.borderRadius
// }))

// const ButtonStyled = styled(Button)<ButtonProps & { component?: ElementType; htmlFor?: string }>(({ theme }) => ({
//   [theme.breakpoints.down('sm')]: {
//     width: '100%',
//     textAlign: 'center'
//   }
// }))

// const ResetButtonStyled = styled(Button)<ButtonProps>(({ theme }) => ({
//   marginLeft: theme.spacing(4),
//   [theme.breakpoints.down('sm')]: {
//     width: '100%',
//     marginLeft: 0,
//     textAlign: 'center',
//     marginTop: theme.spacing(2)
//   }
// }))

const TabAccount = () => {

  useEffect(()=>{
    const data = localStorage.getItem('userData');
    if(data){
      const userData = JSON.parse(data)
      setUserId(userData.id);
      handleGetUserData(userData.id)
    }
  },[])

  // ** State
  const [open, setOpen] = useState<boolean>(false)
  const [reset, setReset] = useState<boolean>(false)

  const [newPassword, setNewPassword] = useState<string>("")
  const [confirmPassword, setConfirmPassword] = useState<string>("")
  const [errorMessage, setErrorMessage] = useState<string>("")
  const [showNewPassword, setShowNewPassword] = useState<boolean>(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false)

  // ** Hooks
  const router = useRouter()

  const [userInput, setUserInput] = useState<string>('yes')
  const [userId, setUserId] = useState<number>(0)
  const [formData, setFormData] = useState<Data>(initialData)
  const [oriData, setOriData] = useState<Data>(initialData)
  const [secondDialogOpen, setSecondDialogOpen] = useState<boolean>(false)

  // const [inputValue, setInputValue] = useState<string>('')
  // const [imgSrc, setImgSrc] = useState<string>('/images/avatars/15.png')

  // ** Hooks
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({ defaultValues: { checkbox: false } })

  const handleClose = () => setOpen(false)

  const handleSecondDialogClose = () => setSecondDialogOpen(false)

  const onSubmit = () => setOpen(true)

  const handleConfirmation = (value: string) => {
    handleClose()
    setUserInput(value)
    setSecondDialogOpen(true)
    const url = `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_DELETE_USER}/${userId}`;
    axios
      .delete(url)
      .then(res =>{
        toast.success(res.data.message)
        localStorage.remove("userData")
        localStorage.remove("accessToken")
        router.push('/login')
      })
  }

  // const handleInputImageChange = (file: ChangeEvent) => {
  //   const reader = new FileReader()
  //   const { files } = file.target as HTMLInputElement
  //   if (files && files.length !== 0) {
  //     reader.onload = () => setImgSrc(reader.result as string)
  //     reader.readAsDataURL(files[0])

  //     if (reader.result !== null) {
  //       setInputValue(reader.result as string)
  //     }
  //   }
  // }
  // const handleInputImageReset = () => {
  //   setInputValue('')
  //   setImgSrc('/images/avatars/15.png')
  // }

  const handleGetUserData = async (id: number) => {
    try {
      const url = `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_GET_USER}/${id}`;
      const res = await axios.get(url);

      setFormData(res.data);
      setOriData(res.data);

      return res.data
    } catch (error) {

      return null;
    }
  };

  const handleFormChange = (field: keyof Data, value: Data[keyof Data]) => {
    setFormData({ ...formData, [field]: value })
  }

  const handleUpdateUserData = async () => {
    try {
      const url = `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_PUT_USER}/${userId}`;
      const res = await axios.put(url, formData);
      toast.success(res.data.message);

      const user = await handleGetUserData(userId);
      if (!user) return;

      const data = localStorage.getItem("userData");
      if (data) {
        const userData = JSON.parse(data);
        userData.fullName = `${user.last_name} ${user.first_name}`;
        localStorage.setItem("userData", JSON.stringify(userData));
      }
    } catch (error) {

    }
  };

  const handleResetPassword = async() => {
    if (!newPassword) {
      setErrorMessage('Please enter new password!');

      return;
    }
    if (!confirmPassword) {
      setErrorMessage('Please enter confirm password!');

      return;
    }
    if (newPassword !== confirmPassword) {
      setErrorMessage('Confirm password incorrect!');

      return;
    }
    const url = `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_PUT_USER}/${userId}`;
    const body = {
      password: newPassword
    }
    const res = await axios.put(url, body);
    toast.success(res.data.message);
    setReset(false)
    setNewPassword('')
    setConfirmPassword('')
    setErrorMessage('');
  };

  return (
    <Grid container spacing={6}>
      {/* Account Details Card */}
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Profile Details' />
          <form>
            {/* <CardContent sx={{ pt: 0 }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <ImgStyled src={imgSrc} alt='Profile Pic' />
                <div>
                  <ButtonStyled component='label' variant='contained' htmlFor='account-settings-upload-image'>
                    Upload New Photo
                    <input
                      hidden
                      type='file'
                      value={inputValue}
                      accept='image/png, image/jpeg'
                      onChange={handleInputImageChange}
                      id='account-settings-upload-image'
                    />
                  </ButtonStyled>
                  <ResetButtonStyled color='secondary' variant='tonal' onClick={handleInputImageReset}>
                    Reset
                  </ResetButtonStyled>
                  <Typography sx={{ mt: 4, color: 'text.disabled' }}>Allowed PNG or JPEG. Max size of 800K.</Typography>
                </div>
              </Box>
            </CardContent>
            <Divider /> */}
            <CardContent>
              <Grid container spacing={5}>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    fullWidth
                    label='First Name'
                    placeholder='John'
                    value={formData.first_name}
                    onChange={e => handleFormChange('first_name', e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    fullWidth
                    label='Last Name'
                    placeholder='Doe'
                    value={formData.last_name}
                    onChange={e => handleFormChange('last_name', e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    fullWidth
                    type='email'
                    label='Email'
                    value={formData.email}
                    placeholder='john.doe@example.com'
                    onChange={e => handleFormChange('email', e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    fullWidth
                    type='number'
                    label='Phone Number'
                    value={formData.contact}
                    placeholder='202 555 0111'
                    onChange={e => handleFormChange('contact', e.target.value)}
                    InputProps={{ startAdornment: <InputAdornment position='start'>MY (+60)</InputAdornment> }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    fullWidth
                    label='Role'
                    placeholder='Admin'
                    value={formData.user_role}
                    disabled
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    fullWidth
                    label='Status'
                    placeholder='Approved'
                    value={formData.user_status}
                    disabled
                  />
                </Grid>
                {/* <Grid item xs={12} sm={6}>
                  <CustomTextField
                    fullWidth
                    label='Address'
                    placeholder='Address'
                    value={formData.address}
                    onChange={e => handleFormChange('address', e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    fullWidth
                    label='State'
                    placeholder='California'
                    value={formData.state}
                    onChange={e => handleFormChange('state', e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    fullWidth
                    type='number'
                    label='Zip Code'
                    placeholder='231465'
                    value={formData.zipCode}
                    onChange={e => handleFormChange('zipCode', e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    select
                    fullWidth
                    defaultValue=''
                    label='Country'
                    SelectProps={{
                      value: formData.country,
                      onChange: e => handleFormChange('country', e.target.value as string)
                    }}
                  >
                    <MenuItem value='australia'>Australia</MenuItem>
                    <MenuItem value='canada'>Canada</MenuItem>
                    <MenuItem value='france'>France</MenuItem>
                    <MenuItem value='united-kingdom'>United Kingdom</MenuItem>
                    <MenuItem value='united-states'>United States</MenuItem>
                  </CustomTextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    select
                    fullWidth
                    defaultValue=''
                    label='Language'
                    SelectProps={{
                      value: formData.language,
                      onChange: e => handleFormChange('language', e.target.value as string)
                    }}
                  >
                    <MenuItem value='arabic'>Arabic</MenuItem>
                    <MenuItem value='english'>English</MenuItem>
                    <MenuItem value='french'>French</MenuItem>
                    <MenuItem value='german'>German</MenuItem>
                    <MenuItem value='portuguese'>Portuguese</MenuItem>
                  </CustomTextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    select
                    fullWidth
                    defaultValue=''
                    label='Timezone'
                    SelectProps={{
                      value: formData.timezone,
                      onChange: e => handleFormChange('timezone', e.target.value as string)
                    }}
                  >
                    <MenuItem value='gmt-12'>(GMT-12:00) International Date Line West</MenuItem>
                    <MenuItem value='gmt-11'>(GMT-11:00) Midway Island, Samoa</MenuItem>
                    <MenuItem value='gmt-10'>(GMT-10:00) Hawaii</MenuItem>
                    <MenuItem value='gmt-09'>(GMT-09:00) Alaska</MenuItem>
                    <MenuItem value='gmt-08'>(GMT-08:00) Pacific Time (US & Canada)</MenuItem>
                    <MenuItem value='gmt-08-baja'>(GMT-08:00) Tijuana, Baja California</MenuItem>
                    <MenuItem value='gmt-07'>(GMT-07:00) Chihuahua, La Paz, Mazatlan</MenuItem>
                    <MenuItem value='gmt-07-mt'>(GMT-07:00) Mountain Time (US & Canada)</MenuItem>
                    <MenuItem value='gmt-06'>(GMT-06:00) Central America</MenuItem>
                    <MenuItem value='gmt-06-ct'>(GMT-06:00) Central Time (US & Canada)</MenuItem>
                    <MenuItem value='gmt-06-mc'>(GMT-06:00) Guadalajara, Mexico City, Monterrey</MenuItem>
                    <MenuItem value='gmt-06-sk'>(GMT-06:00) Saskatchewan</MenuItem>
                    <MenuItem value='gmt-05'>(GMT-05:00) Bogota, Lima, Quito, Rio Branco</MenuItem>
                    <MenuItem value='gmt-05-et'>(GMT-05:00) Eastern Time (US & Canada)</MenuItem>
                    <MenuItem value='gmt-05-ind'>(GMT-05:00) Indiana (East)</MenuItem>
                    <MenuItem value='gmt-04'>(GMT-04:00) Atlantic Time (Canada)</MenuItem>
                    <MenuItem value='gmt-04-clp'>(GMT-04:00) Caracas, La Paz</MenuItem>
                  </CustomTextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    select
                    fullWidth
                    defaultValue=''
                    label='Currency'
                    SelectProps={{
                      value: formData.currency,
                      onChange: e => handleFormChange('currency', e.target.value as string)
                    }}
                  >
                    <MenuItem value='usd'>USD</MenuItem>
                    <MenuItem value='eur'>EUR</MenuItem>
                    <MenuItem value='pound'>Pound</MenuItem>
                    <MenuItem value='bitcoin'>Bitcoin</MenuItem>
                  </CustomTextField>
                </Grid> */}

                <Grid item xs={12} sx={{ pt: theme => `${theme.spacing(6.5)} !important` }}>
                  <Button onClick={() => handleUpdateUserData()} variant='contained' sx={{ mr: 4 }}>
                    Save Changes
                  </Button>
                  <Button type='reset' variant='tonal' color='secondary' onClick={() => setFormData(oriData)}>
                    Reset
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </form>
        </Card>
      </Grid>

      {/* Reset Password Card */}
      <Grid item xs={12}>
      <Card>
        <CardHeader title="Reset Password" />
        <CardContent>
          <Controller
            name="checkbox"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <FormControlLabel
                label="I want to reset password"
                sx={{ '& .MuiTypography-root': { color: errors.checkbox ? 'error.main' : 'text.secondary' } }}
                control={
                  <Checkbox
                    {...field}
                    size="small"
                    onChange={(e) => {
                      setReset(e.target.checked);
                    }}
                    sx={errors.checkbox ? { color: 'error.main' } : null}
                  />
                }
              />
            )}
          />
          {reset &&
            <Box>
              <Grid container spacing={6} mt={5}>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    fullWidth
                    type={showNewPassword ? 'text' : 'password'}
                    label='Enter new password'
                    placeholder='********'
                    value={newPassword}
                    onChange={e => setNewPassword(e.target.value)}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position='end'>
                          <IconButton
                            edge='end'
                            onMouseDown={e => e.preventDefault()}
                            onClick={() => setShowNewPassword(!showNewPassword)}
                          >
                            <Icon fontSize='1.25rem' icon={showNewPassword ? 'tabler:eye' : 'tabler:eye-off'} />
                          </IconButton>
                        </InputAdornment>
                      )
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}></Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    fullWidth
                    type={showConfirmPassword ? 'text' : 'password'}
                    label='Confirm new password'
                    placeholder='********'
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position='end'>
                          <IconButton
                            edge='end'
                            onMouseDown={e => e.preventDefault()}
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          >
                            <Icon fontSize='1.25rem' icon={showConfirmPassword ? 'tabler:eye' : 'tabler:eye-off'} />
                          </IconButton>
                        </InputAdornment>
                      )
                    }}
                  />
                </Grid>
                {errorMessage && (
                  <Grid item xs={12}>
                    <Typography color='error'>{errorMessage}</Typography>
                  </Grid>
                )}

                <Grid item xs={12}>
                  <Button variant='contained' color='inherit' onClick={handleResetPassword}>
                    Reset Password
                  </Button>
                </Grid>
              </Grid>
            </Box>
          }
        </CardContent>
      </Card>
    </Grid>

      {/* Delete Account Card */}
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Delete Account' />
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Box sx={{ mb: 4 }}>
                <FormControl>
                  <Controller
                    name='checkbox'
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <FormControlLabel
                        label='I confirm my account deactivation'
                        sx={{ '& .MuiTypography-root': { color: errors.checkbox ? 'error.main' : 'text.secondary' } }}
                        control={
                          <Checkbox
                            {...field}
                            size='small'
                            name='validation-basic-checkbox'
                            sx={errors.checkbox ? { color: 'error.main' } : null}
                          />
                        }
                      />
                    )}
                  />
                  {errors.checkbox && (
                    <FormHelperText
                      id='validation-basic-checkbox'
                      sx={{ mx: 0, color: 'error.main', fontSize: theme => theme.typography.body2.fontSize }}
                    >
                      Please confirm you want to delete account
                    </FormHelperText>
                  )}
                </FormControl>
              </Box>
              <Button variant='contained' color='error' type='submit' disabled={errors.checkbox !== undefined}>
                Deactivate Account
              </Button>
            </form>
          </CardContent>
        </Card>
      </Grid>

      {/* Deactivate Account Dialogs */}
      <Dialog fullWidth maxWidth='xs' open={open} onClose={handleClose}>
        <DialogContent
          sx={{
            pb: theme => `${theme.spacing(6)} !important`,
            px: theme => [`${theme.spacing(5)} !important`, `${theme.spacing(15)} !important`],
            pt: theme => [`${theme.spacing(8)} !important`, `${theme.spacing(12.5)} !important`]
          }}
        >
          <Box
            sx={{
              display: 'flex',
              textAlign: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              justifyContent: 'center',
              '& svg': { mb: 6, color: 'warning.main' }
            }}
          >
            <Icon icon='tabler:alert-circle' fontSize='5.5rem' />
            <Typography>Are you sure you would like to cancel your subscription?</Typography>
          </Box>
        </DialogContent>
        <DialogActions
          sx={{
            justifyContent: 'center',
            px: theme => [`${theme.spacing(5)} !important`, `${theme.spacing(15)} !important`],
            pb: theme => [`${theme.spacing(8)} !important`, `${theme.spacing(12.5)} !important`]
          }}
        >
          <Button variant='contained' sx={{ mr: 2 }} onClick={() => handleConfirmation('yes')}>
            Yes
          </Button>
          <Button variant='tonal' color='secondary' onClick={() => handleConfirmation('cancel')}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog fullWidth maxWidth='xs' open={secondDialogOpen} onClose={handleSecondDialogClose}>
        <DialogContent
          sx={{
            pb: theme => `${theme.spacing(6)} !important`,
            px: theme => [`${theme.spacing(5)} !important`, `${theme.spacing(15)} !important`],
            pt: theme => [`${theme.spacing(8)} !important`, `${theme.spacing(12.5)} !important`]
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
              '& svg': {
                mb: 8,
                color: userInput === 'yes' ? 'success.main' : 'error.main'
              }
            }}
          >
            <Icon fontSize='5.5rem' icon={userInput === 'yes' ? 'tabler:circle-check' : 'tabler:circle-x'} />
            <Typography variant='h4' sx={{ mb: 5 }}>
              {userInput === 'yes' ? 'Deleted!' : 'Cancelled'}
            </Typography>
            <Typography>
              {userInput === 'yes' ? 'Your subscription cancelled successfully.' : 'Unsubscription Cancelled!!'}
            </Typography>
          </Box>
        </DialogContent>
        <DialogActions
          sx={{
            justifyContent: 'center',
            px: theme => [`${theme.spacing(5)} !important`, `${theme.spacing(15)} !important`],
            pb: theme => [`${theme.spacing(8)} !important`, `${theme.spacing(12.5)} !important`]
          }}
        >
          <Button variant='contained' color='success' onClick={handleSecondDialogClose}>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  )
}

export default TabAccount
