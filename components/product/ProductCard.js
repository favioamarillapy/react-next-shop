import { Box, Card, CardActionArea, CardMedia, Grid, Typography } from '@mui/material'
import { useMemo, useState } from 'react'

export const ProductCard = ({ title, slug, price, images }) => {

  const [isHovered, setIsHovered] = useState(false)

  const productImage = useMemo(() => {
    return isHovered ? 'products/' + images[1] : 'products/' + images[0]
  }, [isHovered, images])



  return (
    <Grid
      item
      xs={6}
      sm={4}
      key={slug}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >

      <Card>
        <CardActionArea>
          <CardMedia
            className="fadeIn"
            component='img'
            image={productImage}
            alt={title}
          >
          </CardMedia>
        </CardActionArea>
      </Card>

      <Box sx={{ mt: 1 }} className="fadeIn">
        <Typography fontWeight={700}>{title}</Typography>
        <Typography fontWeight={500} >$ {price}</Typography>
      </Box>

    </Grid>
  )
}
