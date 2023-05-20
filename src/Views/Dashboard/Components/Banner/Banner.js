import { Container } from '@mui/material'
import React from 'react'
import './Banner.css'

export default function Banner() {
  return (
    <Container 
      sx={{
        background: '#ffffff',
        borderBottom: '20px solid #f5f5f5',
        // padding: '12px 0'
        padding: '0 !important'
      }}
    >
      {/* <h2 className='banner-title'>Thiết bị nông nghiệp mới</h2> */}
      <div className='banner-img'>
        <img src='https://bizweb.dktcdn.net/100/356/911/themes/722316/assets/collection.jpg?1667120097514' alt='' />
      </div>
    </Container>
  )
}
