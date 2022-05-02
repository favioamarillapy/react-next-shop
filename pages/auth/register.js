import NextLink from 'next/link'
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { AuthLayout } from '../../components/layouts'

const RegisterPage = () => {
  return (
    <AuthLayout title={' Next shop -  Register'} description={""}>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box sx={{ width: 350, padding: '10px 20px' }}>
          <Grid container spacing={2} >
            <Grid item xs={12}>
              <Typography variant='h1' component='h1'>Register</Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField label='Full name' variant='filled' fullWidth />
            </Grid>
            <Grid item xs={12}>
              <TextField label='Email' variant='filled' fullWidth />
            </Grid>
            <Grid item xs={12}>
              <TextField label='Password' type='password' variant='filled' fullWidth />
            </Grid>
            <Grid item xs={12}>
              <Button color='secondary' className='circular-btn' size='large' fullWidth>Submit</Button>
            </Grid>
            <Grid item xs={12}>
              Don&apos;t have an account? &nbsp;
              <NextLink href='/auth/register' passHref>
                <Link color='secondary' underline='always'>
                  Sign up
                </Link>
              </NextLink>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </AuthLayout>
  )
}

export default RegisterPage
