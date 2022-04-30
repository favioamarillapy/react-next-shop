import { RemoveShoppingCartOutlined } from '@mui/icons-material'
import { Box, Link, Typography } from '@mui/material'
import { ShopLayout } from '../../components/layouts'

const CartEmpty = () => {
  return (
    <ShopLayout title={' Next shop -  Cart empty'} description={""}>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: { xs: 'column', sm: 'column' } }}>

        <RemoveShoppingCartOutlined sx={{ fontSize: 100, color: '#c2c2c2' }} />
        <Typography variant='h4' fontWeight={200} sx={{ color: '#c2c2c2' }}>You&apos;re cart is empty</Typography>

      </Box>
    </ShopLayout>
  )
}

export default CartEmpty