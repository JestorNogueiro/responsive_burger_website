import styled from 'styled-components'
import {NavLink as Link} from 'react-router-dom'
import { GiHamburger } from 'react-icons/gi';

export const Nav = styled.nav`
background-color: transparent;
backdrop-filter: blur(16px);
    position: sticky;
// position:relative;
height: 40px;
align-item:center;
display:flex;
justify-content:center;
font-weight:700;
top:10px;
`;
export const NavLink = styled(Link)`
color:#fff;
font-size:2rem;
display:flex;
align-item:center;
justify-content:center;
text-decoration:none;
cursor:pointer; 

@media screen and(max-width:400px){
 position:absolute;
 top:50px;
 left:25px;
}
`;
export const Icon = styled.div`
display:block;
position:absolute;
top:0;
right:20px;
cursor:pointer;
color:white;
p{
 transform:translate(-175%,100%);
 font-weight:bold;
}

`;

export const Bars = styled(GiHamburger)`
color:white;
font-size:2rem;
transform:translate(-80%, 20%)
`