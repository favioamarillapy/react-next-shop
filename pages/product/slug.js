import { Button, Chip, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { ShopLayout } from '../../components/layouts'
import { ProductCounter, ProductSlide } from '../../components/product'
import { initialData } from '../../database/products'

const { title, description, price, images } = initialData.products[0]

const ProductSlug = () => {
  return (
    <ShopLayout title={' Next shop - ' + title} description={description}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={7}>
          <ProductSlide images={images} />
        </Grid>
        <Grid item xs={12} sm={5}>
          <Box display='flex' flexDirection='column'>
            <Typography variant='h1' component='h1'>{title}</Typography>
            <Typography variant='subtitle1'>$ {price}</Typography>
            <Box sx={{ my: 2 }}>
              <Typography variant='subtitle2'>Quantity</Typography>
              <ProductCounter />
            </Box>
            <Button color='secondary' className='circular-btn'>
              Add to cart
            </Button>
            {/* <Chip label='Exhausted' color='error' variant='outlined' sx={{ mt: 1 }} /> */}
            <Box sx={{ mt: 3 }}>
              <Typography variant='subtitle2'> Description </Typography>
              <Typography variant='body2'> {description} </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ShopLayout>
  )
}

export default ProductSlug
