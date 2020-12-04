import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background: #000;
  height: 80px;
  margin-top: -80px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  font-size: 1rem;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1100px;
  padding: 0 24px;
  z-index: 1;
  height: 80px;
`;

export const NavLogo = styled(LinkR)`
  color: #fff;
  justify-self: flex-start;
  display: flex;
  font-weight: bold;
  font-size: 1.5rem;
  margin-left: 24px;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);

    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const NavMenu = styled.ul`
  color: #fff;
  display: flex;
  align-items: center;
  list-style: none;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItems = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkS)`
  text-decoration: none;
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:active {
    border-bottom: 3px solid #01bf71;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLinks = styled(LinkR)`
  border-radius: 50px;
  padding: 10px 22px;
  outline: none;
  text-decoration: none;
  border: none;
  background: #01fb71;
  color: #010606;
  white-space: nowrap;
  font-size: 16px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: #fff;
    color: #010606;
    transition: all 0.2s ease-in-out;
  }
`;
