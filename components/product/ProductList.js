import { Grid } from '@mui/material'
import { ProductCard } from './ProductCard'
import { LoadingFullScreen } from '../ui/LoadingFullScreen'
import { useProduct } from '../../hooks/index'


export const ProductList = () => {

  const { response, isLoading, isError } = useProduct('products')

  return (
    <>
      {
        !isLoading ? (
          <Grid container spacing={4}>
            {
              response.data.map(product => (
                <ProductCard key={product.slug} {...product} />
              ))
            }
          </Grid>
        ) : (
          <LoadingFullScreen />
        )
      }
    </>
  )
}
