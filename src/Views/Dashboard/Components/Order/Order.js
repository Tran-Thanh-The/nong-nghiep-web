import { Box, Button, Container, Stack, TextField } from '@mui/material'
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axiosInstance from '../../../../Api/api';
import { useDispatch } from 'react-redux';
import { removeCart } from '../../../../Redux/Slice/CartSlice';

export default function Order() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [phone, setPhone] = useState('')
  const [count, setCount] = useState(1)

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

  const createOrder = async (data) => {
    try {
      const res = await axiosInstance.post("/order", data);
      if (res) {
        dispatch(removeCart(id))
        navigate("/")
      }
    } catch (error) {
      throw (error)
    }
  }

  useEffect(() => {
    fetchProduct()
  }, [])

  const handleCreateOrder = () => {
    const data = {
      name, 
      address,
      phone,
      count,
      price: count * parseInt(product.price),
      status: 'pending',
      productId: id,
    }

    createOrder(data)
  }

  return (
    <Container
      sx={{
        background: '#ffffff',
        borderBottom: '20px solid #f5f5f5',
        padding: '32px 24px'
      }}
    >
      <Button variant='outlined' onClick={() => navigate('/')}>Back to home</Button>
      <h2 style={{ fontSize: '20px', fontWeight: '600', padding: '16px 0', borderBottom: '1px solid #eeeeee' }}>Gửi yêu cầu mua</h2>

      <Box  
        sx={{
          display: 'flex',
          paddingTop: '24px'
        }}
      >
        <Box
          sx={{
            flex: '1',
          }}
        >
          <h3 style={{ fontSize: '18px', fontWeight: '600', paddingBottom: '24px' }}>Thông tin sản phẩm</h3>
          <Box
            sx={{
              display: 'flex'
            }}
          >
            <div style={{ flex: '1' }}>
              <img src={ product.img } width="100%" style={{ maxHeight: '400px' }} alt='' />
            </div>
            <div style={{ flex: '2' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '600' }}>{ product.name }</h3>
              <p style={{ padding: '8px 0' }}><strong>Mô tả:</strong> { product.des }</p>
              <strong>Giá:</strong><span style={{ color: '#1976d2', fontWeight: '500' }}> { product.price } vnd</span>
              <br />
              <br />
              <strong>Số lượng:</strong><span style={{ color: '#1976d2', fontWeight: '500' }}> { count } (cái)</span>
              <br />
              <strong>Tổng giá:</strong><span style={{ color: '#1976d2', fontWeight: '500' }}> { count * parseInt(product.price) } vnd</span>
            </div>
          </Box>
        </Box>
        <Box
          sx={{
            flex: '1'
          }}
        >
          <h3 style={{ fontSize: '18px', fontWeight: '600', paddingBottom: '24px' }}>Thông tin người mua</h3>

          <Stack spacing={2}>
            <TextField value={name} onChange={(e) => setName(e.target.value)} id="outlined-basic" label="Tên" variant="outlined" />
            <TextField value={phone} onChange={(e) => setPhone(e.target.value)} id="outlined-basic" label="Số điện thoại" variant="outlined" />
            <TextField value={address} onChange={(e) => setAddress(e.target.value)} id="outlined-basic" label="Địa chỉ" variant="outlined" />
            <TextField value={count} onChange={(e) => setCount(e.target.value)} id="outlined-basic" type='number' label="Số lượng" variant="outlined" />
          </Stack>

          <div style={{ padding: '16px 0' }}>
            <Button onClick={handleCreateOrder} variant='outlined'>Đặt hàng</Button>
          </div>
        </Box>
      </Box>
    </Container>
  )
}
