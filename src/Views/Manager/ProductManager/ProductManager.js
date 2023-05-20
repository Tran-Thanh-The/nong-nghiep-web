import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import { Backdrop, Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogTitle, Divider, IconButton, InputBase, Paper, Table, TableBody, TableCell, TableHead, TableRow, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import axiosInstance from '../../../Api/api';
import "./ProductManager.scss";

// const defaultFrom = {
//   id: null,
//   name: "Xẻng gỗ",
//   des: "Vật dụng dùng để xúc đất",
//   price: 200000,
//   img: "https://kichthuoc.net/wp-content/uploads/2022/04/xeng.jpg"
// }

const defaultFrom = {
  id: null,
  name: "",
  des: "",
  price: null,
  img: ""
}

export default function ProductManager() {
  const [open, setOpen] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  const [data, setData] = useState([]);
  const [form, setForm] = useState(defaultFrom);
  const [search, setSearch] = useState("")

  const handle = async () => {
    try {
      const res = await axiosInstance.get("/products");
      if (res) {
        console.log(res.data)
        setData(res.data.filter(e => e.name.toLowerCase().includes(search)))
      }
    } catch (error) {
      throw (error)
    }
  }

  useEffect(() => {
    handle()
  }, [search])

  const handleDeleteProduct = async (id) => {
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
        await axiosInstance.delete(`/products/` + id);
        handle()
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
      await axiosInstance.put(`/products/` + form.id, form);
    } else {
      await axiosInstance.post(`/products`, form);
    }
    toast.success("Create success")
    setForm(defaultFrom);
  }

  return (
    <div id='my-request-off'>
      <div className='header'>
        <h1>Product manager</h1>
        <MoreVertIcon />
      </div>
      <div className='header2'>
        <Button variant='outlined' onClick={handleOpenFormCreate}>
          Create product
        </Button>
        <Paper
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
              <TableCell>Image</TableCell>
              <TableCell>Name</TableCell>
              <TableCell align="center">Price</TableCell>
              <TableCell align="center">Description</TableCell>
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
                  <img width="40" src={row.img} alt='' />
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="center">{row.price}</TableCell>
                <TableCell align="center">{row.des}</TableCell>
                <TableCell sx={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
                  <Button variant='outlined' onClick={() => {
                    setForm(row);
                    setOpenForm(true);
                  }}>
                    Edit
                  </Button>
                  <Button variant='outlined' color='error' onClick={() => handleDeleteProduct(row.id)}>Delete</Button>
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
        <DialogContent>
          <TextField
            margin="dense"
            id="name"
            label="Image"
            type="text"
            fullWidth
            value={form.img}
            onChange={(e) => setForm({
              ...form,
              img: e.target.value
            })}
            sx={{
              marginTop: "16px"
            }}
          />
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
            label="Desciption"
            type="text"
            fullWidth
            value={form.des}
            onChange={(e) => setForm({
              ...form,
              des: e.target.value
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
