import React from 'react'
import {Container,Icon,CloseIcon,SideMenu,SidebarLink,SideBtnWrap,SidebarRouter} from './SideBarElements'
const SideBar = ({isOpen, toggle}) => {
 return (
  <Container isOpen={isOpen} onClick={toggle}>
   <Icon>
    <CloseIcon/>
   </Icon>
   <SideMenu>
    <SidebarLink>Burger</SidebarLink>
    <SidebarLink>Desserts</SidebarLink>
    <SidebarLink>Menu</SidebarLink>
   </SideMenu>
   <SideBtnWrap>
    <SidebarRouter>Order Now</SidebarRouter>
   </SideBtnWrap>
  </Container>
 )
}

export default SideBar
