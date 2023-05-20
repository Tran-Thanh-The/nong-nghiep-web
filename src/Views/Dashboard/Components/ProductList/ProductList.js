import { Box, Button, Card, Container, Grid, Pagination } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axiosInstance from '../../../../Api/api'
import './ProductList.css'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../../../Redux/Slice/CartSlice'
import { useNavigate } from 'react-router-dom';

export default function ProductList() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const searchState = useSelector((state) => state.app)
  const [products, setProducts] = useState([])
  const [page, setPage] = useState(1)

  const fetchProducts = async () => {
    try {
      const res = await axiosInstance.get("/products");
      if (res) {
        setProducts(res.data)
      }
    } catch (error) {
      throw (error)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  useEffect(() => {
    if (searchState.thapCao || searchState.caoThap) {
      let newProducts = [...products]
      newProducts.sort((a, b) => {
        if (searchState.thapCao) {
          return parseInt(a.price) - parseInt(b.price)
        }
        return parseInt(b.price) - parseInt(a.price)
      })
      console.log(newProducts)
      setProducts(newProducts)
    }
  }, [searchState.thapCao, searchState.caoThap])

  return (
    <Container
      sx={{
        background: '#ffffff',
        borderBottom: '20px solid #f5f5f5',
        padding: '32px 24px'
      }}
    >
      <Grid container spacing={3}>
        {
          products
            .filter((product) => {
                return product.name.includes(searchState.text)
            })
            .filter((p, i) => (page - 1)*12 <= i && i < page*12).map((product) => (
              <Grid key={ product.id } item sm={4} xs={12} md={3}>
                <Card className='product-item' sx={{ width: '100%', height: '360px' }}>
                  <img src={product.img} alt='' />
                  <div className='product-item-info'>
                    <h3>{product.name}</h3>
                    <span>{product.price} vnd</span>
                    <p>{product.des}</p>
                    <div className='product-action'>
                      <Button size="small" variant='outlined' onClick={() => navigate('/product/' + product.id)}>
                        Show detail
                      </Button>
                      <Button size="small" variant='outlined'
                        onClick={() => dispatch(addToCart(product))}  
                      >Add to cart</Button>
                    </div>
                  </div>
                </Card>
              </Grid>
            ))
        }
      </Grid>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          padding: '24px 0 12px'
        }}
      >
        <Pagination
          page={page}
          onChange={(e, v) => setPage(v)}
          count={Math.ceil(products.length / 12)}
        />
      </Box>
    </Container>
  )
}
