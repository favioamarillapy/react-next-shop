import NextLink from 'next/link'
import { AppBar, Badge, Box, Button, IconButton, Link, Toolbar, Typography } from '@mui/material'

import { SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'

export const Navbar = () => {
  return (
    <AppBar>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>

        <NextLink href='/' passHref>
          <Link sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant='h6'> Next |</Typography>
            <Typography> Shop</Typography>
          </Link>
        </NextLink>

        <Box sx={{ flex: 1 }}></Box>

        <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center' }}>
          <NextLink href='/category/men' passHref>
            <Link sx={{ display: 'flex', alignItems: 'center' }}>
              <Button>Men</Button>
            </Link>
          </NextLink>
          <NextLink href='/category/woman' passHref>
            <Link sx={{ display: 'flex', alignItems: 'center' }}>
              <Button>Woman</Button>
            </Link>
          </NextLink>
          <NextLink href='/category/children' passHref>
            <Link sx={{ display: 'flex', alignItems: 'center' }}>
              <Button>Children</Button>
            </Link>
          </NextLink>
        </Box>

        <Box sx={{ flex: 1 }}></Box>

        <IconButton>
          <SearchOutlined />
        </IconButton>
        <NextLink href='/cart' passHref>
          <Link sx={{ display: 'flex', alignItems: 'center' }}>
            <Badge badgeContent={2} color="secondary">
              <IconButton>
                <ShoppingCartOutlined />
              </IconButton>
            </Badge>
          </Link>
        </NextLink>

        <Button>
          Menu
        </Button>

      </Toolbar>
    </AppBar>
  )
}
