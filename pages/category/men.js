import { Grid } from '@mui/material';
import { ShopLayout } from '../../components/layouts'
import { ProductCard } from './../../components/product';
import { LoadingFullScreen } from '../../components/ui/LoadingFullScreen';
import { useProduct } from '../../hooks';


const CategoryPage = () => {

  const { response, isLoading, isError } = useProduct('products?gender=men')

  return (
    <ShopLayout title={' Next shop -  Men'} description={""}>
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
    </ShopLayout>
  )
}

export default CategoryPage;