import { CircularProgress, Typography } from '@mui/material'
import { Box } from '@mui/system'

export const LoadingFullScreen = () => {
  return (

    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: 'calc(100vh - 200px)',
      flexDirection: 'column'
    }}>
      <Typography variant='h6' component='h6' >Loading...</Typography>
      <CircularProgress thickness={2} />
    </Box>

  )
}
