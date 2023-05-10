import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import { Backdrop, Box, Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogTitle, Divider, FormControl, IconButton, InputBase, InputLabel, MenuItem, Paper, Select, Table, TableBody, TableCell, TableHead, TableRow, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import axiosInstance from '../../../Api/api';
import "../ProductManager/ProductManager.scss";

const defaultFrom = {
  id: null,
  productId: "",
  name: "",
  address: "",
  phone: "",
  status: "",
  count: "",
}

export default function OrderManager() {
  const [open, setOpen] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  const [data, setData] = useState([]);
  const [product, setProduct] = useState([]);
  const [form, setForm] = useState(defaultFrom);
  const [search, setSearch] = useState("")



  const fetchProduct = async () => {
    try {
      const res = await axiosInstance.get("/products");
      if (res) {
        setProduct(res.data)
      }
    } catch (error) {
      throw (error)
    }
  }

  const fetchOrder = async () => {
    try {
      const res = await axiosInstance.get("/order");
      if (res) {
        setData(res.data.filter(e => {
          return e.name.toLowerCase().includes(search) ||
            e.email.toLowerCase().includes(search) ||
            e.address.toLowerCase().includes(search)
        }))
      }
    } catch (error) {
      throw (error)
    }
  }

  useEffect(() => {
    fetchProduct()
  }, [])

  useEffect(() => {
    fetchOrder()
  }, [search])

  const handleDeleteOrder = async (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(async (result) => {
      if (result.value) {
        await axiosInstance.delete(`/order/` + id);
        fetchOrder()
        toast.success("Delete success")
      }
    });
  }

  const handleOpenFormCreate = () => {
    setForm(defaultFrom)
    setOpenForm(true)
  }

  const handleCreate = async () => {
    setOpenForm(false)
    if (form.id) {
      await axiosInstance.put(`/order/` + form.id, form);
    } else {
      await axiosInstance.post(`/order`, form);
    }
    toast.success("Create success")
    setForm(defaultFrom);
    fetchOrder()
  }

  return (
    <div id='my-request-off'>
      <div className='header'>
        <h1>Order manager</h1>
        <MoreVertIcon />
      </div>
      <div className='header2'>
        <Button variant='outlined' onClick={handleOpenFormCreate}>
          Create order
        </Button>
        <Paper
          component="form"
          sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Searching"
            inputProps={{ 'aria-label': 'search google maps' }}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
            <SearchIcon />
          </IconButton>
        </Paper>
      </div>
      <div className='my-request-off-container'>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Proudct</TableCell>
              <TableCell>Customer</TableCell>
              <TableCell align="center">Total price</TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  { product.find(p => p.id == row.productId)?.name }
                </TableCell>
                <TableCell component="th" scope="row">
                  <div><strong>Name:</strong> {row.name}</div>
                  <div><strong>Phone:</strong> {row.phone}</div>
                  <div><strong>Address:</strong> {row.address}</div>
                </TableCell>
                <TableCell align="center">{row.price}</TableCell>
                <TableCell align="center">{row.status}</TableCell>
                <TableCell >
                  <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
                    <Button variant='outlined' onClick={() => {
                      setForm(row);
                      setOpenForm(true);
                    }}>
                      Edit
                    </Button>
                    <Button variant='outlined' color='error' onClick={() => handleDeleteOrder(row.id)}>Delete</Button>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <Dialog
        open={openForm}
        onClose={() => setOpenForm(false)}
      >
        <DialogTitle
          sx={{
            minWidth: '500px'
          }}
        >
          Create or edit product
        </DialogTitle>
        <DialogContent sx={{ padding: "16px 20px"}}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Product</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Product"
              value={form.productId}
              onChange={(e) => setForm({
                ...form,
                productId: e.target.value
              })}
            >
              {
                product.map(e => 
                  <MenuItem value={e.id}>{e.name}</MenuItem>
                )
              }
            </Select>
          </FormControl>
          <TextField
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            value={form.name}
            onChange={(e) => setForm({
              ...form,
              name: e.target.value
            })}
            sx={{
              marginTop: "16px"
            }}
          />
          <TextField
            margin="dense"
            id="name"
            label="Phone"
            type="text"
            fullWidth
            value={form.phone}
            onChange={(e) => setForm({
              ...form,
              phone: e.target.value
            })}
            sx={{
              marginTop: "16px"
            }}
          />
          <TextField
            margin="dense"
            id="name"
            label="Address"
            type="text"
            fullWidth
            value={form.address}
            onChange={(e) => setForm({
              ...form,
              address: e.target.value
            })}
            sx={{
              marginTop: "16px"
            }}
          />
          <TextField
            margin="dense"
            id="name"
            label="Count"
            type="text"
            fullWidth
            value={form.count}
            onChange={(e) => setForm({
              ...form,
              count: e.target.value
            })}
            sx={{
              marginTop: "16px"
            }}
          />
          <TextField
            margin="dense"
            id="name"
            label="Price"
            type="text"
            fullWidth
            value={form.price}
            onChange={(e) => setForm({
              ...form,
              price: e.target.value
            })}
            sx={{
              marginTop: "16px"
            }}
          />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Status</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Status"
              value={form.status}
              onChange={(e) => setForm({
                ...form,
                status: e.target.value
              })}
            >
              <MenuItem value="pending">pending</MenuItem>
              <MenuItem value="approved">approved</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions
          sx={{
            padding: '0 24px 24px 24px'
          }}
        >
          <Button
            onClick={() => {
              setOpenForm(false)
            }}
            variant="outlined"
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={handleCreate}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={() => setOpen(false)}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  )
}
