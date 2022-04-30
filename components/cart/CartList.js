import { Button, CardActionArea, CardMedia, Grid, Link, Typography } from '@mui/material'
import { initialData } from '../../database/products'
import NextLink from 'next/link'
import { Box } from '@mui/system'
import { ProductCounter } from '../product'

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
  initialData.products[3]
]

export const CartList = ({ editable }) => {
  return (
    <>
      {
        productsInCart.map(product => (
          <Grid key={product.slug} container spacing={2} sx={{ mb: 1 }}>

            <Grid item xs={3}>
              <NextLink href='/product/slug'>
                <Link>
                  <CardActionArea>
                    <CardMedia image={'/products/' + product.images[0]}
                      component='img'
                      sx={{ borderRadius: '5px' }}
                    >
                    </CardMedia>
                  </CardActionArea>
                </Link>
              </NextLink>
            </Grid>

            <Grid item xs={7}>
              <Box display='flex' flexDirection='column'>
                <Typography variant='body1'> {product.title}</Typography>
                <Typography variant='body1'> Talla: <strong></strong> </Typography>
                {editable && (
                  <ProductCounter />
                )}
              </Box>
            </Grid>

            <Grid item xs={2} display='flex' flexDirection='column' alignItems='center'>
              <Typography > $ {product.price}</Typography>
              {editable && (
                <Button variant='text' color='secondary'> Remove </Button>
              )}
            </Grid>

          </Grid>
        ))

      }
    </>
  )
}
