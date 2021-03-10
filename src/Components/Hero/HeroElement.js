import styled from 'styled-components'
import Img from '../../images/photo-1.jpg'
export const Container = styled.div`
background: linear-gradient(to right, rgba(0,0,0,.05),rgba(0,0,0,0.6))
,
url(${Img});
height:100vh;
width:100vw;
background-position:center;
background-attachment:fixed;
background-size:cover;
`
export const Content = styled.div`
height: calc(100vh -80px);
max-height:100%;
width:100vw;
// padding: 0rem calc((100vw -1300px)/2);
`

export const Items= styled.div`
display :flex;
flex-direction:column;
justify-content:center;
align-items:flex-start;
height:100vh;
max-height:100%;
padding:0 2rem;
width:650px;
color:white;
text-transform:uppercase;
line-height:1;
font-weight:bold;

@media screen and (max-width:650px){
 width:100%;
}
`;
export const HeroH1= styled.h1`
font-size: clamp(2.5rem, 10vw, 3.5rem);
margin-bottom:1rem;
box-shadow:3px 5px yellow;
letter-spacing:3px;

`;
export const HeroP = styled.p`
font-size:clamp(2rem,2.5vw,3rem);
margin-bottom:2rem;
`;
export const HeroBtn = styled.button`
font-size:1.4 rem;
padding: 1rem 4rem;
border:none;
background:red;
transition: 0.3s ease-out;
color:white;

&:hover{
 font-size:1rem;
 backgroud:#ffc500;
 transition: 0.2s ease-out;
 cursor :pointer;
 color:white;
}
`