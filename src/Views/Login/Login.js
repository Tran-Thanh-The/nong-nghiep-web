import { Box, Button, Checkbox, Container, FormControlLabel, Grid, Link, Stack, TextField, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Footer from '../../Share/Components/Footer/Footer';
import Logo from '../../Share/Components/Header/Logo';
import './Login';

export default function Login({ registerMode = false }) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleClickCreateNewAccount = () => {
    return navigate("/register");
  }

  const handleClickHaveAccount = () => {
    return navigate("/login");
  }

  return (
    <Box sx={{minHeight: '100vh'}}>
      <Container>
        <Grid container sx={{ height: '100px', alignItems: 'center' }}>
          <Grid item xs={12} sm={6}>
            <Logo />
          </Grid>
          <Grid item sm={6} display={{ xs: "none", sm: "block" }}>
            <Link sx={{textAlign: 'end', display: 'block'}}>{t('header.can_help')}</Link>
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
            <Typography variant="h1" sx={{marginBottom: '20px'}}>{ registerMode ? t('login_page.register') : t('login_page.login')}</Typography>
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
            {
              registerMode ?
              <>
                <TextField 
                  placeholder='Confirm password'
                  type='password'
                  size='small'
                />
                <Button variant="contained">{t('login_page.register')}</Button>
                <Button 
                  variant="outlined"
                  onClick={handleClickHaveAccount}
                >
                  {t('login_page.have_account')}
                </Button>
              </> :
              <>
                <FormControlLabel control={<Checkbox defaultChecked />} label={t('login_page.remember_me')} />
                <Button variant="contained">{t('login_page.login')}</Button>
                <Button 
                  variant="outlined"
                  onClick={handleClickCreateNewAccount}
                >
                  {t('login_page.create_new_account')}
                </Button>
              </>
            }
          </Stack>
        </Grid>
        <Grid item xs={1} md={3} lg={4}></Grid>
      </Grid>
      <Footer />
    </Box>
  )
}
