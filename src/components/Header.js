 
import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo2.png';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  width: 100%;
  position: fixed;
  top: 0;
  background-color: transparent;
  z-index: 100;

  img { 
     width:140px;
     height:80px;
    margin-left: 2rem; 
  }

  nav {
    display: flex;
    margin-right: 30rem; /* Adjust the gap between logo and menu */
    gap: 1rem;

    @media (max-width: 768px) {
      display: none; /* Hide regular navigation on mobile */
    }
  }
`;

const MobileMenuIcon = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    font-size: 1.5rem;
    cursor: pointer;
  }
`;

const MobileMenu = styled.nav`
  display: none;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  position: absolute;
  top: 60px;
  left: 0;
  width: 100%;
  padding: 1rem;
  z-index: 99;

  @media (max-width: 768px) {
    display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  }
`;

const ButtonLink = styled(Link)`
  display: inline-block;
  padding: 10px 20px;
  color: black;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    background-color: orange;
    color: black;
    border-radius: 30px;
  }
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <HeaderContainer>
      <img src={logo} alt="Logo" />
      <nav>
        <ButtonLink to="/" style={{ marginRight: '10px' }} onClick={handleLinkClick}>
          Home
        </ButtonLink>
        <ButtonLink to="/results" style={{ marginRight: '10px' }} onClick={handleLinkClick}>
          Results
        </ButtonLink>
        <ButtonLink to="/" style={{ marginRight: '10px' }} onClick={handleLinkClick}>
          Claims
        </ButtonLink>
        <ButtonLink to="/" onClick={handleLinkClick}>
          Contact
        </ButtonLink>
      </nav>

      {/* Mobile menu toggle button */}
      <MobileMenuIcon onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </MobileMenuIcon>

      {/* <MobileMenu isOpen={isOpen}>
        <>
          <ButtonLink to="/" onClick={handleLinkClick}>
            Home
          </ButtonLink>
          <ButtonLink to="/results" onClick={handleLinkClick}>
            Results
          </ButtonLink>
          <ButtonLink to="/home" onClick={handleLinkClick}>
            Claims
          </ButtonLink>
          <ButtonLink to="/home" onClick={handleLinkClick}>
            Contact
          </ButtonLink>
        </>
      </MobileMenu> */}
    </HeaderContainer>
  );
};

export default Header;
