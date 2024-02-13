import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  return (
    <div id="navbar">
      <Link to={'/'}>
        <img src="../assets/img/logo.png" class="logo" alt="" />
      </Link>

        <ul class="botonera">
          <li><NavLink to={'/'}>Home</NavLink></li>
          <li><NavLink to={'categoria/electronics'}>Electrónica</NavLink></li>
          <li><NavLink to={'categoria/men\'s clothing'}>Ropa de Hombres</NavLink></li>
          <li><NavLink to={'categoria/women\'s clothing'}>Ropa de Mujer</NavLink></li>
        </ul>
        <img src="../assets/img/carro.png" class="carro" alt="" />
    </div>
  )
}

export default Navbar