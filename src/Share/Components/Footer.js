import { Container, Grid, Typography, Stack } from '@mui/material'
import React from 'react'



export default function Footer() {
  return (
    <Container sx={{overflowX: 'hidden'}}>
      <Grid container sx={{padding: '30px 0', overflowX: 'hidden'}}>
        <Grid item xs={12} sm={6} md={3}>
          <Stack spacing={1}>
            <Typography 
              variant='footer_label'
              sx={{margin: '12px 0'}}
            >
              CHĂM SÓC KHÁCH HÀNG
            </Typography>
            <Typography variant='footer_sub_label'>Trung Tâm Trợ Giúp</Typography>
            <Typography variant='footer_sub_label'>Shopee Blog</Typography>
            <Typography variant='footer_sub_label'>Shopee Mall</Typography>
            <Typography variant='footer_sub_label'>Hướng Dẫn Mua Hàng</Typography>
            <Typography variant='footer_sub_label'>Hướng Dẫn Bán Hàng</Typography>
            <Typography variant='footer_sub_label'>Thanh Toán</Typography>
            <Typography variant='footer_sub_label'>Shopee Xu</Typography>
            <Typography variant='footer_sub_label'>Vận Chuyển</Typography>
            <Typography variant='footer_sub_label'>Trả Hàng & Hoàn Tiền</Typography>
            <Typography variant='footer_sub_label'>Chăm Sóc Khách Hàng</Typography>
            <Typography variant='footer_sub_label'>Chính Sách Bảo Hành</Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Stack spacing={1}>
            <Typography 
              variant='footer_label'
              sx={{margin: '12px 0'}}
            >
              VỀ CHÚNG TÔI
            </Typography>
            <Typography variant='footer_sub_label'>Giới Thiệu Về Shopee Việt Nam</Typography>
            <Typography variant='footer_sub_label'>Tuyển Dụng</Typography>
            <Typography variant='footer_sub_label'>Điều Khoản Shopee</Typography>
            <Typography variant='footer_sub_label'>Chính Sách Bảo Mật</Typography>
            <Typography variant='footer_sub_label'>Chính Hãng</Typography>
            <Typography variant='footer_sub_label'>Liên Hệ Với Truyền Thông</Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Stack>
            <Typography 
              variant='footer_label' 
              sx={{margin: '12px 0'}}
            >
              PHƯƠNG THỨC THANH TOÁN
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Stack>
            <Typography 
              variant='footer_label'
              sx={{margin: '12px 0'}}
            >
              THEO DÕI CHÚNG TÔI QUA
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  )
}
