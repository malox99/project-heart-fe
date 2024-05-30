import { CircularProgress, Stack } from '@mui/material'
import { colors } from '../theme/palette'

const Spinner = () => {
  return (
    <Stack sx={{
        background: colors.gray.light,
        width: '100vw',
        height: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 10
    }}>
        <CircularProgress sx={{width: '4rem', height: '4rem'}}/>
    </Stack>
  )
}

export default Spinner
