import styled from 'styled-components'
import {Link} from 'react-router-dom'
import{FaTimes} from 'react-icons/fa'
import { GiHamburger } from 'react-icons/gi';
export const Container= styled.aside`
position:fixed;
z-index:90;
width:350px;
height:100%;
background: red;
display:grid;
align-items:center;
top:0;
transition:0.3s ease-in-out;
right:${({isOpen}) => (isOpen ? '0' : '-1000px')};

@media screen and (max-width:400px){
 width:100%;
}
`;

export const CloseIcon= styled(FaTimes)`
color:white;
`
;

export const Icon = styled.div`
position:absolute;
top:1.2rem;
right:1.5rem;
background:red;
border:Transparent;
font-size:2rem;

`;

export const SideMenu = styled.div`
display:grid;
grid-template-columns:1fr;
grid-template-rows:repeat(3,80px);
text-align:center;

@media screen and(max-width:400px){
 grid-templete-rows:repeat(3,60px)
}
`
export const SidebarLink= styled(Link)`
display:flex;
align-items:center;
justify-content:center;
font-size:1.5rem;
text-decoration:none;
list-style:none;
transition:0.2s ease-in-out;
text-decoration:none;
color:blue;
cursor:pointer;

&:hover{
 color:pink;
 transition:0.2s ease-in-out;

}
`;

export const SideBtnWrap= styled.div`
display:flex;
justify-content:center;

`;

export const SidebarRouter= styled(Link)`
background:yellow;
white-space:nowrap;
padding:16px 64px;
color:white;
font-size:16px;
outline:none;
border:none;
cursor:pointer;
transition:0.2s ease-in-out;
text-decoration:none;

&hover{
 transition:0.2s ease-in-out;
 background:white;
 color:red;
}

`