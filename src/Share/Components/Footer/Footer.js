import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Container, Grid, Link, Stack, Typography } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';
import { useTranslation } from 'react-i18next';

const LoginTypography = styled(Typography)({
  ":hover": {
    color: '#1976d2',
    fontWeight: '600',
  },
  cursor: 'pointer',
})

export default function Footer() {
  const { t } = useTranslation();

  return (
    <Container sx={{background: '#ffffff'}}>
      <Grid container sx={{padding: '30px 0'}}>
        <Grid item xs={12} sm={6} md={3}>
          <Stack spacing={1}>
            <Typography variant='footer_label' sx={{margin: '12px 0'}}>{t('footer.customer_service')}</Typography>
            <LoginTypography variant='footer_sub_label'>Trung Tâm Trợ Giúp</LoginTypography>
            <LoginTypography variant='footer_sub_label'>Shopee Blog</LoginTypography>
            <LoginTypography variant='footer_sub_label'>Shopee Mall</LoginTypography>
            <LoginTypography variant='footer_sub_label'>Hướng Dẫn Mua Hàng</LoginTypography>
            <LoginTypography variant='footer_sub_label'>Hướng Dẫn Bán Hàng</LoginTypography>
            <LoginTypography variant='footer_sub_label'>Thanh Toán</LoginTypography>
            <LoginTypography variant='footer_sub_label'>Shopee Xu</LoginTypography>
            <LoginTypography variant='footer_sub_label'>Vận Chuyển</LoginTypography>
            <LoginTypography variant='footer_sub_label'>Trả Hàng & Hoàn Tiền</LoginTypography>
            <LoginTypography variant='footer_sub_label'>Chăm Sóc Khách Hàng</LoginTypography>
            <LoginTypography variant='footer_sub_label'>Chính Sách Bảo Hành</LoginTypography>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Stack spacing={1}>
            <Typography variant='footer_label' sx={{margin: '12px 0'}}>{t('footer.about_us')}</Typography>
            <LoginTypography variant='footer_sub_label'>Giới Thiệu Về Shopee Việt Nam</LoginTypography>
            <LoginTypography variant='footer_sub_label'>Tuyển Dụng</LoginTypography>
            <LoginTypography variant='footer_sub_label'>Điều Khoản Shopee</LoginTypography>
            <LoginTypography variant='footer_sub_label'>Chính Sách Bảo Mật</LoginTypography>
            <LoginTypography variant='footer_sub_label'>Chính Hãng</LoginTypography>
            <LoginTypography variant='footer_sub_label'>Liên Hệ Với Truyền Thông</LoginTypography>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Stack>
            <Typography variant='footer_label' sx={{margin: '12px 0'}}>{t('footer.payment_method')}</Typography>
            <div className='flex gap-4 items-center mt-2'>
              <span className='p-1 rounded' style={{boxShadow: '0 1px 1px rgba(0,0,0,.2)'}}>
                <img src='https://down-vn.img.susercontent.com/file/d4bbea4570b93bfd5fc652ca82a262a8' alt='' />
              </span>
              <span className='p-1 rounded' style={{boxShadow: '0 1px 1px rgba(0,0,0,.2)'}}>
                <img src='https://down-vn.img.susercontent.com/file/a0a9062ebe19b45c1ae0506f16af5c16' alt='' />
              </span>
              <span className='p-1 rounded' style={{boxShadow: '0 1px 1px rgba(0,0,0,.2)'}}>
                <img src='https://down-vn.img.susercontent.com/file/38fd98e55806c3b2e4535c4e4a6c4c08' alt='' />
              </span>
            </div>
            <div className='flex gap-4 items-center mt-2'>
              <span className='p-1 rounded' style={{boxShadow: '0 1px 1px rgba(0,0,0,.2)'}}>
                <img src='https://down-vn.img.susercontent.com/file/bc2a874caeee705449c164be385b796c' alt='' />
              </span>
              <span className='p-1 rounded' style={{boxShadow: '0 1px 1px rgba(0,0,0,.2)'}}>
                <img src='https://down-vn.img.susercontent.com/file/2c46b83d84111ddc32cfd3b5995d9281' alt='' />
              </span>
              <span className='p-1 rounded' style={{boxShadow: '0 1px 1px rgba(0,0,0,.2)'}}>
                <img src='https://down-vn.img.susercontent.com/file/5e3f0bee86058637ff23cfdf2e14ca09' alt='' />
              </span>
            </div>
            <div className='flex gap-4 items-center mt-2'>
              <span className='p-1 rounded' style={{boxShadow: '0 1px 1px rgba(0,0,0,.2)'}}>
                <img src='https://down-vn.img.susercontent.com/file/9263fa8c83628f5deff55e2a90758b06' alt='' />
              </span>
              <span className='p-1 rounded' style={{boxShadow: '0 1px 1px rgba(0,0,0,.2)'}}>
                <img src='https://down-vn.img.susercontent.com/file/0217f1d345587aa0a300e69e2195c492' alt='' />
              </span>
            </div>
            <Typography variant='footer_label' sx={{margin: '12px 0'}}>{t('footer.transportation_company')}</Typography>
            <div className='flex gap-4 items-center mt-2'>
              <span className='p-1 rounded' style={{boxShadow: '0 1px 1px rgba(0,0,0,.2)'}}>
                <img src='https://down-vn.img.susercontent.com/file/5e7282bd0f7ee0872fdb0bd1d40fbe9e' alt='' />
              </span>
              <span className='p-1 rounded' style={{boxShadow: '0 1px 1px rgba(0,0,0,.2)'}}>
                <img src='https://down-vn.img.susercontent.com/file/d10b0ec09f0322f9201a4f3daf378ed2' alt='' />
              </span>
              <span className='p-1 rounded' style={{boxShadow: '0 1px 1px rgba(0,0,0,.2)'}}>
                <img src='https://down-vn.img.susercontent.com/file/77bf96a871418fbc21cc63dd39fb5f15' alt='' />
              </span>
            </div>
            <div className='flex gap-4 items-center mt-2'>
              <span className='p-1 rounded' style={{boxShadow: '0 1px 1px rgba(0,0,0,.2)'}}>
                <img src='https://down-vn.img.susercontent.com/file/59270fb2f3fbb7cbc92fca3877edde3f' alt='' />
              </span>
              <span className='p-1 rounded' style={{boxShadow: '0 1px 1px rgba(0,0,0,.2)'}}>
                <img src='https://down-vn.img.susercontent.com/file/957f4eec32b963115f952835c779cd2c' alt='' />
              </span>
              <span className='p-1 rounded' style={{boxShadow: '0 1px 1px rgba(0,0,0,.2)'}}>
                <img src='https://down-vn.img.susercontent.com/file/0d349e22ca8d4337d11c9b134cf9fe63' alt='' />
              </span>
            </div>
            <div className='flex gap-4 items-center mt-2'>
              <span className='p-1 rounded' style={{boxShadow: '0 1px 1px rgba(0,0,0,.2)'}}>
                <img src='https://down-vn.img.susercontent.com/file/3900aefbf52b1c180ba66e5ec91190e5' alt='' />
              </span>
            </div>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Stack>
            <Typography variant='footer_label' sx={{margin: '12px 0'}}>{t('footer.follow_us')}</Typography>
            <div className='flex gap-1 items-center mt-2'>
              <FacebookIcon sx={{fontSize: '18px'}} />
              <Typography variant='footer_sub_label'><Link>facebook</Link></Typography>
            </div>
            <div className='flex gap-1 items-center mt-2'>
              <EmailIcon sx={{fontSize: '18px'}} />
              <Typography variant='footer_sub_label'>phonvan128@gmail.com</Typography>
            </div>
            <div className='flex gap-1 items-center mt-2'>
              <LocationOnIcon sx={{fontSize: '18px'}} />
              <Typography variant='footer_sub_label'>Km10, Đường Nguyễn Trãi, Q.Hà Đông, Hà Nội</Typography>
            </div>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  )
}
