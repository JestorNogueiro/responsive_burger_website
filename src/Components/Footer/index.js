import React from 'react';
import{FaFacebook,FaInstagram,FaLinkedin,FaGithub} from 'react-icons/fa'

import{Container,Wrapper,SocialMedia,GitHub,Facebook,Instagram,LinkedIn} from './Element'
const Footer = () => {
 return (
  <Container>
   <Wrapper>
    @Jestor Nogueiro
    <SocialMedia>
      <Facebook href="https://www.facebook.com/jestor.nogueiro/" target="_blank" ><FaFacebook />
      </Facebook>
   <Instagram href="https://www.instagram.com/jestor_nogueiro/" target="_blank" > <FaInstagram /></Instagram> 
    
    <LinkedIn href="https://www.linkedin.com/in/jestor-nogueiro-02467b184/" target="_blank" > <FaLinkedin  /></LinkedIn>
    <GitHub href="https://github.com/JestorNogueiro" target="_blank">
     <FaGithub />
     </GitHub> 
    </SocialMedia>
   </Wrapper>
  </Container>
 )
}

export default Footer
