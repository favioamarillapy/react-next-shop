import { Button, Card, CardContent, Divider, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'

export const CardOrder = () => {
  return (
    <>
      <Card className='summary-card'>
        <CardContent>

          <Typography variant='h2'> Order </Typography>
          <Divider sx={{ my: 1 }} />

          <Grid container>

            <Grid item xs={6}>
              <Typography>Products</Typography>
            </Grid>
            <Grid item xs={6} display='flex' justifyContent='end'>
              <Typography>3</Typography>
            </Grid>


            <Grid item xs={6}>
              <Typography>Subtotal</Typography>
            </Grid>
            <Grid item xs={6} display='flex' justifyContent='end'>
              <Typography>$ 105</Typography>
            </Grid>


            <Grid item xs={6} sx={{ mt: 2 }}>
              <Typography variant='subtitle1'>Total</Typography>
            </Grid>
            <Grid item xs={6} sx={{ mt: 2 }} display='flex' justifyContent='end'>
              <Typography variant='subtitle1'>$ 110</Typography>
            </Grid>


          </Grid>

          <Box sx={{ mt: 3 }}>
            <Button color='secondary' className='circular-btn' fullWidth> Checkout </Button>
          </Box>

        </CardContent>
      </Card>
    </>
  )
}
