import { Grid, Stack, Typography, Link } from '@mui/material'
import React from 'react'

export default function Logo() {
  return (
    <Grid container spacing={2}>
      <Grid item>
        <img
          src='https://www.ssequip.com/siteart/SSequipment-logo.png'
          alt='logo'
          style={{ width: 60 }}
        />
      </Grid>
      <Grid item >
        <Stack>
          <Typography variant='h1'>Thiết Bị Nông Nghiệp</Typography>
          <Link>thietbinongnghiep.com</Link>
        </Stack>
      </Grid>
    </Grid>
  )
}
