import { Card, CardActionArea, CardMedia, Grid } from '@mui/material'
import { initialData } from '../../database/products'
import { ProductCard } from './ProductCard'


export const ProductList = () => {
  return (
    <Grid container spacing={4}>
      {
        initialData.products.map(product => (
          <ProductCard key={product.slug} {...product} />
        ))
      }
    </Grid>
  )
}
