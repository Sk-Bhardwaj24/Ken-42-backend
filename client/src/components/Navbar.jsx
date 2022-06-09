import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  background-color: black;
  color: white;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  gap: 5vw;
  box-sizing: border-box;
  align-items: center;
  height: 70px;
  li {
    text-decoration: none;
    /* font-size: 40px; */
  }
`;
const StLink = styled(Link)`
  text-decoration: none;
  color: white;
`;
const Navbar = () => {
  return (
    <Nav>
      <StLink to="/">Home</StLink>
      <StLink to="/faculty">Faculty</StLink>
      <StLink to="/admin">Admin</StLink>
    </Nav>
  );
};

export default Navbar;
