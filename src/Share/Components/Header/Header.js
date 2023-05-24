import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Badge, Box, Button, Container, Drawer, Grid, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeCart } from '../../../Redux/Slice/CartSlice';
import './Header.css';
import Logo from './Logo';
import { formatPrice } from '../../../utils/utils';

const Logined = () => {
  const dispatch = useDispatch();
  const carts = useSelector((state) => state.carts);
  const [openCart, setOpenCart] = useState(false);

  useEffect(() => {
    console.log(carts)
  }, [carts, carts.length])

  return (
    <>
      <Stack spacing={4} direction='row' justifyContent='flex-end' alignItems='center'>
        <Badge aria-describedby="cart" color='primary' badgeContent={carts.length}>
          <ShoppingCartOutlinedIcon sx={{ cursor: 'pointer' }} onClick={() => setOpenCart(true)} />
        </Badge>
      </Stack>
      <Drawer
        anchor="right"
        open={openCart}
        onClose={() => setOpenCart(false)}
      >
        <Box sx={{ padding: '24px', width: '550px' }}>
          <h3>Giỏ hàng của bạn</h3>    
          
          {
            carts.length === 0 && <img style={{ width: '100%' }} src='https://bizweb.dktcdn.net/100/368/179/themes/738982/assets/empty-cart.png?1655829755743' alt='' />
          }

          <Stack spacing={2}> 
            {
              carts.map(product => (
                <div key={ product.id } className='cart'>
                  <img src={ product.img } alt='' />
                  <div className='cart-detail'>
                    <div className='limit-1line'>{ product.name }</div>
                    <p className='limit-2line'>{ product.des }</p>
                  </div>
                  <span>{ formatPrice(product.price) }</span>
                  <div className='cart-action'>
                    <div className='cart-action-pay'>
                      <a href={'/order/' + product.id}>Đặt hàng</a>
                    </div>
                    <div 
                      className='cart-action-delete'
                      onClick={() => dispatch(removeCart(product.id))}
                    >
                      Xóa
                    </div>
                  </div>
                </div>
              ))
            }
          </Stack>
        </Box>
      </Drawer>
    </>
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
      <Grid container sx={{ height: '100px', alignItems: 'center', padding: '0 40px 0 20px' }}>
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
