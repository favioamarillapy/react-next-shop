import { Button, Card, CardContent, Chip, Divider, Grid, Link, Typography } from '@mui/material'
import { CardOrder, CartList } from '../../components/cart'
import { ShopLayout } from '../../components/layouts'
import NextLink from 'next/link'
import { Box } from '@mui/system'
import { CreditCardOffOutlined, CreditScoreOutlined } from '@mui/icons-material'

const OrderPage = () => {
  return (
    <ShopLayout title={' Next shop -  Order: 1234567'} description={""}>
      <Typography variant='h1' component='h1'> Order: 1234567 </Typography>

      <Chip sx={{ my: 2 }}
        label='Pending of payment'
        variant='outlined'
        color='error'
        icon={<CreditCardOffOutlined />}
      />

      <Chip sx={{ my: 2 }}
        label='Paid out'
        variant='outlined'
        color='success'
        icon={<CreditScoreOutlined />}
      />

      <Grid container>

        <Grid item xs={12} md={7}>
          <CartList editable={false} />
        </Grid>

        <Grid item xs={12} md={5}>
          <Card className='summary-card'>
            <CardContent>

              <Typography variant='h2'> Resume</Typography>
              <Divider sx={{ my: 1 }} />


              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant='subtitle1'> Delivery address</Typography>
                <NextLink href={'/checkout/address'} passHref>
                  <Link color='secondary' underline='always'>
                    Edit
                  </Link>
                </NextLink>
              </Box>
              <Grid item>
                <Typography>Favio Amarilla</Typography>
              </Grid>
              <Grid item>
                <Typography>13 de Setiembre</Typography>
              </Grid>
              <Grid item>
                <Typography>0991336680</Typography>
              </Grid>


              <Divider sx={{ my: 1 }} />
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant='subtitle1'> Order</Typography>
                <NextLink href={'/cart'} passHref>
                  <Link color='secondary' underline='always'>
                    Edit
                  </Link>
                </NextLink>
              </Box>
              <CardOrder />

              <Box sx={{ mt: 3 }}>
                <Button color='secondary' className='circular-btn' fullWidth> Confirm order </Button>
              </Box>

            </CardContent>
          </Card>
        </Grid>

      </Grid>

    </ShopLayout>
  )
}

export default OrderPage