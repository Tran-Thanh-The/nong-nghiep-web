import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import QrCodeIcon from '@mui/icons-material/QrCode';
import { AppBar, Avatar, Box, Container, IconButton, List, ListItemButton, ListItemIcon, Menu, MenuItem, Toolbar, Tooltip, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';


const settings = ['Logout'];

export default function Manager() {
  let navigate = useNavigate();
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const user = {
    name: "Admin"
  };

  useEffect(() => {
    if (!localStorage.getItem("nongNgiepAdmin")) {
      return navigate("/login")
    }
  }, [navigate])

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("nongNgiepAdmin");
    navigate("../login")
  }
  return (
    <div className='dashboard'>
      <div className='dashboard-header'>
        <AppBar position="static">
          <Container maxWidth="xl">
            <Toolbar
              disableGutters
              sx={{
                display: 'flex',
                justifyContent: 'space-between'
              }}
            >
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                ADMIN MANAGER
              </Typography>
              <Typography
                variant="h5"
                noWrap
                component="a"
                href=""
                sx={{
                  mr: 2,
                  display: { xs: 'flex', md: 'none' },
                  flexGrow: 1,
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                Timesheet
              </Typography>
              <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Typography>{user?.name}</Typography>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src={user?.avatar} />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleLogout}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </div>
      <div className='dashboard-container'>
        <div className='dashboard-sidebar'>
          <div className='dashboard-sidebar-fix'>
            <div id='sidebar'>
              <List component="nav" aria-labelledby="nested-list-subheader">
                <Link to="/manager" className='link'>
                  <ListItemButton>
                    <ListItemIcon className='list-icon'>
                      <QrCodeIcon />
                    </ListItemIcon>
                    Product manager
                  </ListItemButton>
                </Link>
                <Link to="/manager/order" className='link'>
                  <ListItemButton>
                    <ListItemIcon className='list-icon'>
                      <ProductionQuantityLimitsIcon />
                    </ListItemIcon>
                    Order manager
                  </ListItemButton>
                </Link>
              </List>
              <div className='info'>
                <p>© 2023 <strong>Timesheet</strong>.</p>
              </div>
            </div>
          </div>
        </div>
        <div className='dashboard-content'>
          <div className='dashboard-content-cover'>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}
