import React from 'react'
import { Button, Checkbox, FormControlLabel, Grid, Stack, TextField, Typography, Container, Box } from '@mui/material'
import './Login'
import Footer from '../../Share/Components/Footer'

export default function Login() {
  return (
    <Box sx={{width: '100vw', minHeight: '100vh'}}>
      <Container>
        <Grid container sx={{ height: '100px' }}>
          <Typography variant='h1'>Thiết Bị Nông Nghiệp</Typography>
        </Grid>
      </Container>
      <Grid 
        container
        sx={{
          background: '#1976d2',
          color: 'white',
          height: '540px',
          padding: '60px',
        }}
      >
        <Grid item xs={1} md={3} lg={4}></Grid>
        <Grid item 
          xs={10} md={6} lg={4}
          sx={{
            background: 'white',
            padding: '30px',
            borderRadius: '6px',
            color: 'black'
          }}
        >
          <Stack spacing={2}>
            <Typography variant="h1">Đăng nhập</Typography>
            <TextField 
              placeholder='Email/User name/Phone number'
              type='email'
            />
            <TextField 
              placeholder='Password'
              type='password'
            />
            <FormControlLabel control={<Checkbox defaultChecked />} label='Nhớ mật khẩu' />
            <Button variant="contained">Đăng nhập</Button>
            <Button variant="outlined">Đăng ký tài khoản</Button>
          </Stack>
        </Grid>
        <Grid item xs={1} md={3} lg={4}></Grid>
      </Grid>
      <Footer />
    </Box>
  )
}
