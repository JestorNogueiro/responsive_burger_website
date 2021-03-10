import React,{useState} from 'react'
import Navbar from '../Navbar'
import SideBar from '../SideBar'
import {Container, Content,Items,HeroH1,HeroP,HeroBtn} from './HeroElement'
const Hero = () => {
const [isOpen, setIsOpen] = useState()

const toggle=()=>{
 setIsOpen(!isOpen)
}

 return (
  <Container>
   <Navbar toggle={toggle}/>
   <SideBar isOpen={isOpen} toggle={toggle}/>
   <Content>
    <Items>
     <HeroH1>Greatest Selling Burger</HeroH1>
     <HeroP>Ready In 60 Seconds</HeroP>
     <HeroBtn>Place Order</HeroBtn>
    </Items>
   </Content>
   
  </Container>
 )
}

export default Hero
