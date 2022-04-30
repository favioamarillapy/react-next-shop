import { Button, Grid, TextField, Typography } from '@mui/material'
import { ShopLayout } from '../../components/layouts/ShopLayout'

const AddresPage = () => {
  return (
    <ShopLayout title={' Next shop -  Address'} description={""}>
      <Typography variant='h1' component='h1'> Address </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField label='Name' variant='filled' fullWidth></TextField>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField label='Surname' variant='filled' fullWidth></TextField>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField label='Address' variant='filled' fullWidth></TextField>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField label='Address 2 (optional)' variant='filled' fullWidth></TextField>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField label='Phone number' variant='filled' fullWidth></TextField>
        </Grid>
        <Grid item md={12}>
          <Button color='secondary' className='circular-btn' size='large' xs={{ mt: 5 }}>
            Submit
          </Button>
        </Grid>
      </Grid>

    </ShopLayout>
  )
}

export default AddresPage