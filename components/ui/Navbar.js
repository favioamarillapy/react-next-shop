import NextLink from 'next/link'
import { AppBar, Badge, Box, Button, IconButton, Link, Toolbar, Typography } from '@mui/material'

import { SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import { useRouter } from 'next/router'

export const Navbar = () => {

  const { asPath } = useRouter()

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
              <Button color={asPath == '/category/men' ? 'primary' : 'info'}>Men</Button>
            </Link>
          </NextLink>
          <NextLink href='/category/women' passHref>
            <Link sx={{ display: 'flex', alignItems: 'center' }}>
              <Button color={asPath == '/category/women' ? 'primary' : 'info'}>Women</Button>
            </Link>
          </NextLink>
          <NextLink href='/category/kids' passHref>
            <Link sx={{ display: 'flex', alignItems: 'center' }}>
              <Button color={asPath == '/category/kids' ? 'primary' : 'info'}>kids</Button>
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
    </AppBar >
  )
}
