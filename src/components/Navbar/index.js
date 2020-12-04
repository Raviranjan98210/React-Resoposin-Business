import React from "react";
import Navbar from "./index";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItems,
  NavLinks,
  NavBtn,
  NavBtnLinks,
} from "./NavBarElements";

const NavBar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavContainer>
          <NavLogo to="/">BUSINESS</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItems>
              <NavLinks to="about">About</NavLinks>
            </NavItems>
            <NavItems>
              <NavLinks to="discover">discover</NavLinks>
            </NavItems>
            <NavItems>
              <NavLinks to="services">services</NavLinks>
            </NavItems>
            <NavItems>
              <NavLinks to="signup">Sign Up</NavLinks>
            </NavItems>
          </NavMenu>
          <NavBtn>
            <NavBtnLinks to="/signin">Sign In</NavBtnLinks>
          </NavBtn>
        </NavContainer>
      </Nav>
    </>
  );
};

export default NavBar;
