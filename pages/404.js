import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import { ShopLayout } from '../components/layouts'

const PageNotFound = () => {
  return (
    <ShopLayout title={'Page not found'}>

      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: { xs: 'column', sm: 'row' } }}>
        <Typography fontSize={60} fontWeight={200}>404</Typography>
        <Typography fontSize={60} fontWeight={200} sx={{ display: { xs: 'none', sm: 'block' } }}>|</Typography>
        <Typography fontSize={40} fontWeight={200} marginLeft={2}>Page not found</Typography>
      </Box>

    </ShopLayout>
  )
}

export default PageNotFound