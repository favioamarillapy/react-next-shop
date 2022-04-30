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
          <CartList />
        </Grid>

        <Grid item xs={12} md={5}>
          <CardOrder />
        </Grid>

      </Grid>

    </ShopLayout>
  )
}

export default CartPage