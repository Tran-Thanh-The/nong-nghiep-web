import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Button, Container, Divider, IconButton, InputBase } from '@mui/material';
import React, { useState } from 'react';
import './Search.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeText, toggleCaoThap, toggleThapCao } from '../../../../Redux/Slice/AppSlice'

export default function Search() {
  const searchState = useSelector((state) => state.app)
  const dispatch = useDispatch()
  const [search, setSearch] = useState("")
  return (
    <Container sx={{
        background: '#ffffff',
        borderBottom: '20px solid #f5f5f5'
      }}
    >
      <Box
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center' }}
      >
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Tìm kiếm sản phẩm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button variant='outlined' onClick={() => dispatch(changeText(search))}>Tìm kiếm</Button>
      </Box>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: '8px 12px',
        borderTop: '1px solid #eeeeee'
      }}>
        <span className='item-search'>Hàng nhập khẩu</span> <Divider sx={{ height: 28, m: 0.5, display: 'inline' }} orientation="vertical" />
        <span className='item-search'>Hàng nội địa</span> <Divider sx={{ height: 28, m: 0.5, display: 'inline' }} orientation="vertical" />
        <span className={`item-search ${searchState.thapCao ? 'active' : ''}`} onClick={() => dispatch(toggleThapCao())}>Giá từ thấp đến cao <ArrowUpwardIcon /></span> <Divider sx={{ height: 28, m: 0.5, display: 'inline' }} orientation="vertical" />
        <span className={`item-search ${searchState.caoThap ? 'active' : ''}`} onClick={() => dispatch(toggleCaoThap())}>Giá từ cao đến thấp <ArrowDownwardIcon /></span> 
      </Box>
    </Container>
  )
}
