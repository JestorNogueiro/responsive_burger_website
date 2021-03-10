import React from 'react';
import {Container, Header,Wrapper,Card,Image,Info,Name,Price,Desc,Btn} from './ProductElement';
const rupees ='\u20B9';
const Products = ({Data, Heading}) => {
 return (
  <>
   <Container>
    <Header>{Heading}</Header>
    <Wrapper>

     { 
     Data.map((product,index) => {
      return(
       <Card key={index}>
        <Image src={product.image} alt={product.alt} />
        <Info>
         <Name>{product.name}</Name>
         <Price>{rupees} {product.price}</Price>
        <Desc>{product.desc}</Desc>
         <Btn>{product.button}</Btn>

        </Info>
       </Card>
      )
     })
     }
    </Wrapper>
   </Container>
  </>
 )
}

export default Products
