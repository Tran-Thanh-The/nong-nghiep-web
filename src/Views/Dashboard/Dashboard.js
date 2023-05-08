import React, { useEffect } from 'react'
import Footer from '../../Share/Components/Footer/Footer'
import Header from '../../Share/Components/Header/Header'
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("nongNgiepAdmin")) {
      return navigate("/login")
    }
  }, [navigate])

  return (
    <div style={{background: '#f5f5f5'}}>
      <Header />

      <Footer />
    </div>
  )
}
