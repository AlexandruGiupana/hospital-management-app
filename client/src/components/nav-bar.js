import React from "react";
import styled from "styled-components";

const NavBar = ({ navBarItems }) => {
  return (
    <StyledNavBar>
      {navBarItems.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </StyledNavBar>
  );
};

const StyledNavBar = styled.div`
  display: flex;
  justify-content: space-between;
  background: pink;
`;

export default NavBar;
