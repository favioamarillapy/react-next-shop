import { Card, CardActionArea, CardMedia, Grid } from '@mui/material'
import React from 'react'

export const Product = ({ title, slug, images }) => {
  return (
    <Grid item xs={6} sm={4} key={slug}>
      <Card>
        <CardActionArea>
          <CardMedia
            component='img'
            image={'products/' + images[0]}
            alt={title}
          >

          </CardMedia>
        </CardActionArea>
      </Card>
    </Grid>
  )
}
