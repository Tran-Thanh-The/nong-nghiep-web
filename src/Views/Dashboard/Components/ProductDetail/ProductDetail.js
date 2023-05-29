import { Box, Button, Container } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import './ProductDetail.css'
import axiosInstance from '../../../../Api/api';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../../Redux/Slice/CartSlice';
import { formatPrice } from '../../../../utils/utils';

export default function ProductDetail() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const [product, setProduct] = useState({})

  const fetchProduct = async () => {
    try {
      const res = await axiosInstance.get("/products/" + id);
      if (res) {
        setProduct(res.data)
      }
    } catch (error) {
      throw (error)
    }
  }

  useEffect(() => {
    fetchProduct()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Container
      sx={{
        background: '#ffffff',
        borderBottom: '20px solid #f5f5f5',
        padding: '32px 24px'
      }}
    >
      <Button variant='outlined' onClick={() => navigate('/')}>Back to home</Button>
      <h2 style={{ fontSize: '20px', fontWeight: '600', padding: '16px 0', borderBottom: '1px solid #eeeeee' }}>Chi tiết sản phẩm</h2>
      <Box  
        sx={{
          display: 'flex',
          paddingTop: '24px',
          columnGap: '12px'
        }}
      >
        <Box
          sx={{
            flex: '1'
          }}
        >
          <img src={ product.img } width="100%" style={{ maxHeight: '400px' }} alt='' />
        </Box>
        <Box
          sx={{
            flex: '2'
          }}
        >
          <h3 style={{ fontSize: '18px', fontWeight: '600' }}>{ product.name }</h3>
          <p style={{ padding: '8px 0' }}><strong>Mô tả:</strong> { product.des }</p>
          <strong>Giá:</strong><span style={{ color: '#1976d2', fontWeight: '500' }}> { formatPrice(product.price | 0) }</span>
          <br />  
          <div style={{ padding: '16px 0' }}>
            <Button variant='outlined' onClick={() => dispatch(addToCart(product))}>Thêm vào giỏ hàng</Button>
            <Button sx={{ marginLeft: '20px' }} variant='outlined' onClick={() => navigate('/order/' + product.id)}>Mua ngay</Button>
          </div>
        </Box>
      </Box>
      
    </Container>
  )
}
