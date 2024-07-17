import React from 'react';
import styled from 'styled-components';
import foot from '../assets/footer.jpg'
const FooterContainer = styled.footer`
  background: white;
  padding: 1rem;
  text-align: center;
  position: fixed;
  width: 100%;
  bottom: 0;

  p {
    margin: 0;
    font-size: 0.875rem;
    color: #7f8c8d;
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <FooterContainer>
 
    <p>&copy; {currentYear} Sikim Lotteries. All rights reserved.</p>
    </FooterContainer>
  );
};

export default Footer;
