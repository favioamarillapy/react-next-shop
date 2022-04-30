import { Button, Card, CardContent, Divider, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { CardOrder, CartList } from '../../components/cart'
import { ShopLayout } from '../../components/layouts'

const CartPage = () => {
  return (
    <ShopLayout title={' Next shop -  Cart'} description={""}>
      <Typography variant='h1' component='h1'> Cart </Typography>

      <Grid container>

        <Grid item xs={12} md={7}>
          <CartList editable={true} />
        </Grid>

        <Grid item xs={12} md={5}>
          <Card className='summary-card'>
            <CardContent>

              <Typography variant='h2'> Order </Typography>
              <Divider sx={{ my: 1 }} />

              <CardOrder title={'Order'} />

              <Box sx={{ mt: 3 }}>
                <Button color='secondary' className='circular-btn' fullWidth> Checkout </Button>
              </Box>

            </CardContent>
          </Card>

        </Grid>

      </Grid>

    </ShopLayout>
  )
}

export default CartPage