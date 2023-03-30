import { Avatar, Badge, Button, Container, Divider, Grid, IconButton, Link, ListItemIcon, Menu, MenuItem, Stack, TextField, Tooltip, Typography } from '@mui/material'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import React, { useState } from 'react'
import Logo from './Logo'
import { useNavigate } from 'react-router-dom';
import { Logout, PersonAdd, Settings } from '@mui/icons-material';

const Logined = () => {
  const userName = 'the tran';
  const avatar = 'https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2021/8/15/photo-1629016090148-1629016090266456871612.jpg';
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Stack spacing={4} direction='row' justifyContent='flex-end' alignItems='center'>
      <Badge color='primary' badgeContent="0">
        <NotificationsOutlinedIcon />
      </Badge>
      <Badge color='primary' badgeContent="0">
        <ShoppingCartOutlinedIcon />
      </Badge>
      <Tooltip title="Account settings">
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ ml: 2 }}
          aria-controls={open ? 'account-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
        >
          <Avatar sx={{ width: 32, height: 32, cursor: 'pointer' }} alt="user's avatar" src={avatar} />
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </Stack>
  )
}

const NoLogin = () => {
  let navigate = useNavigate();
  const handleClickLogin = () => {
    navigate('/login')
  }

  return (
    <Stack spacing={2} direction='row' justifyContent='flex-end'>
      <Button variant='contained' onClick={handleClickLogin}>Đăng nhập</Button>
      <Button variant='outlined'>Đăng ký</Button>
    </Stack>
  )
}

export default function Header() {
  const isLogined = true;
  return (
    <Container sx={{
      background: '#ffffff',
      borderBottom: '20px solid #f5f5f5',
    }}>
      <Grid container sx={{ height: '100px', alignItems: 'center' }}>
        <Grid item xs={12} sm={6}>
          <Logo />
        </Grid>
        <Grid item sm={6} display={{ xs: "none", sm: "block" }}>
          {isLogined ? <Logined /> : <NoLogin />}
        </Grid>
      </Grid>
    </Container>
  )
}
