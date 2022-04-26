import { Card, CardActionArea, CardMedia, Grid } from '@mui/material'
import React from 'react'
import { Product } from '../../components/product'
import { initialData } from '../../database/products'


export const Products = () => {
  return (
    <Grid container spacing={4}>
      {
        initialData.products.map(product => (
          <Product key={product.slug} {...product} />
        ))
      }
    </Grid>
  )
}
