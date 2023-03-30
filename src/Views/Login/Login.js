import { Box, Button, Checkbox, Container, FormControlLabel, Grid, Link, Stack, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Footer from '../../Share/Components/Footer/Footer'
import Logo from '../../Share/Components/Header/Logo'
import './Login'

export default function Login() {
  return (
    <Box sx={{minHeight: '100vh'}}>
      <Container>
        <Grid container sx={{ height: '100px', alignItems: 'center' }}>
          <Grid item xs={12} sm={6}>
            <Logo />
          </Grid>
          <Grid item sm={6} display={{ xs: "none", sm: "block" }}>
            <Link sx={{textAlign: 'end', display: 'block'}}>Bạn có cần trợ giúp?</Link>
          </Grid>
        </Grid>
      </Container>
      <Grid 
        container
        sx={{
          color: 'white',
          padding: '60px 0',
          backgroundImage: "url('https://www.hotel24h.com.vn/Uploads/images/doiche1.jpg')",
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Grid item xs={1} md={3} lg={4}></Grid>
        <Grid item 
          xs={10} md={6} lg={4}
          sx={{
            background: 'white',
            padding: '40px',
            borderRadius: '6px',
            color: 'black',
            boxShadow: 'rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset',
          }}
        >
          <Stack spacing={2}>
            <Typography variant="h1" sx={{marginBottom: '20px'}}>Đăng nhập</Typography>
            <TextField 
              placeholder='Email/User name/Phone number'
              type='email'
              size='small'
            />
            <TextField 
              placeholder='Password'
              type='password'
              size='small'
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
