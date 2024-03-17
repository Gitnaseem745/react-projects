import React from 'react'
import { Outlet } from 'react-router-dom'
import Home from './components/home/home'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'


function Layout() {
  return (
    <>
    <Header />
    <Outlet/>
    <Footer />
    </>
  )
}

export default Layout