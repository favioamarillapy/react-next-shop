import NextLink from 'next/link'
import { CreditCardOffOutlined, CreditScoreOutlined } from '@mui/icons-material';
import { Chip, Grid, Link, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { ShopLayout } from '../../components/layouts'

const columns = [
  { field: 'id', headerName: '#ID', width: 100 },
  { field: 'fullname', headerName: 'Full name', width: 300 },
  {
    field: 'paid',
    headerName: 'Paid out',
    width: 200,
    renderCell: (params) => {
      return (
        params.row.paid
          ? <Chip label='Paid out' variant='outlined' color='success' icon={<CreditScoreOutlined />} />
          : <Chip label='Pending of payment' variant='outlined' color='error' icon={<CreditCardOffOutlined />} />
      )
    }
  },
  {
    field: 'order',
    headerName: 'Order',
    width: 200,
    renderCell: (params) => {
      return (
        <NextLink href={'/order/' + params.row.order} passHref >
          <Link color='secondary' underline='always'>View order</Link>
        </NextLink>
      )
    }
  }
];

const rows = [
  { id: 1, fullname: 'Favio Amarilla 1', paid: true },
  { id: 2, fullname: 'Favio Amarilla 2', paid: false },
  { id: 3, fullname: 'Favio Amarilla 3', paid: true },
  { id: 4, fullname: 'Favio Amarilla 4', paid: false },
  { id: 5, fullname: 'Favio Amarilla 5', paid: true },
  { id: 6, fullname: 'Favio Amarilla 6', paid: false },
  { id: 7, fullname: 'Favio Amarilla 7', paid: true },
];




const HistoryPage = () => {
  return (
    <ShopLayout title={'Next shop -  Orders history'} description={""}>
      <Typography variant='h1' component='h1'> Orders history</Typography>

      <Grid container>
        <Grid item xs={12} sx={{ height: 650, width: '100%' }}>

          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
          />
        </Grid>
      </Grid>


    </ShopLayout >
  )
}

export default HistoryPage