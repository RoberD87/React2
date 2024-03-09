import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../../css/navbar.css'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
  return (
    <div className='barra'>
      <Link to={'/'}><img src="../assets/img/logo.svg" className="logo" alt="" /></Link>
      <ul className='botonera'>
        <li><NavLink to={'/'}>Inicio</NavLink></li>
        <li><NavLink to={'categoria/pantalones'}>Pantalones</NavLink></li>
        <li><NavLink to={'categoria/camisas'}>Camisas</NavLink></li>
        <li><NavLink to={'categoria/sacos'}>Sacos</NavLink></li>
      </ul>
      <CartWidget />
    </div>
  )
}

export default Navbar