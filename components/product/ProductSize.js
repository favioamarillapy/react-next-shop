import { Box, Button } from '@mui/material'
import React from 'react'

export const ProductSize = ({ selectedSize, sizes }) => {
  return (
    <Box display='flex'>
      {
        sizes.map(size => (
          <Button
            key={size}
            size='small'
            color={selectedSize == size ? 'primary' : 'info'}
          >
            {size}
          </Button>
        ))
      }
    </Box >
  )
}
