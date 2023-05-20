import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Share/Components/Footer/Footer';
import Header from '../../Share/Components/Header/Header';

export default function Dashboard() {

  return (
    <div style={{background: '#f5f5f5'}}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}
