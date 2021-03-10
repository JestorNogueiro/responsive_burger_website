import React from 'react'
import { Bars, Icon, Nav, NavLink } from './NavbarElements'

const Navbar = ({toggle}) => {
 return (
  <>
   <Nav>
    <NavLink to='/'> Burger</NavLink>
    <Icon onClick={toggle}>

    <Bars/>
    </Icon>
   </Nav>
  </>
 )
}

export default Navbar
