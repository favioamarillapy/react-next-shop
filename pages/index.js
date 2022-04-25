import { Typography } from '@mui/material';
import { ShopLayout } from '../components/layouts';

export default function Home() {
  return (
    <ShopLayout title={' Next shop - Home'}>
      <Typography variant='h1' component='h1'> Home </Typography>
      <Typography variant='h2' component='h2' sx={{ mb: 1 }}> Welcome to Next shop </Typography>
    </ShopLayout>
  )
}
