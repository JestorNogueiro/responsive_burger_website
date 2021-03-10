import styled from 'styled-components'
import Pic from '../../images/photo-2.jpg'

export const Container = styled.div`
background: linear-gradient(to right,rgba(0,0,0,.05),rgba(0,0,0,0.6)),
url(${Pic});
background-repeat: no-repeat;
  background-position: center;
background-size:cover;

display:flex;
flex-direction:column;
height:90vh;
max-height:500px;
top:500px;
text-align:center;
align-items:center;
justify-content:center;
padding:0 1rem;
color:white;
p{
 margin-bottom:1rem;
 font-size:clamp(1rem, 3vw, 3rem)
}
h1{
 font-size:clamp(2rem, 3vw, 4rem)
}
`;


export const Button = styled.button`
border:none;
background:red;
font-size:clamp(1rem, 4vw, 1rem);
color:white;
padding:0.5rem 1.8rem;
transition:0.2s ease-out;

&:hover{
 transition:0.2s ease-out;
 color:black;
 background:yellow;
 cursor:pointer;

}
`