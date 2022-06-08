import React from "react";
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
const Navbar = () => {
  return (
    <Nav>
      <li>Faculty</li>
      <li>Admin</li>
    </Nav>
  );
};

export default Navbar;
