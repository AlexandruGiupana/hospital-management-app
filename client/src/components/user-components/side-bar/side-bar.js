import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const SideBar = ({ accountType }) => {
  return (
    <SideBarContainer>
      <SideBarOptionsContainer>
        <NavLink
          to={"/dashboard"}
        >
          <SideBarOption>Dashboard</SideBarOption>
        </NavLink>
        <NavLink
          to={"/profile"}
        >
          <SideBarOption>Profile</SideBarOption>
        </NavLink>
        <NavLink to="/appointments">
          <SideBarOption>Programari</SideBarOption>
        </NavLink>
        {accountType === 'doctor' &&
          <NavLink to="/create-appointment">
            <SideBarOption>Programeaza</SideBarOption>
          </NavLink>
        }
        {accountType === 'patient' && <SideBarOption>Programeaza-ma</SideBarOption>}
      </SideBarOptionsContainer>
    </SideBarContainer>
  )
}

const SideBarContainer = styled.div`
  background: white;
  border-right: 0.5px solid #e8e8e8;
  display: flex;
  justify-content: center;
  width: 280px;
  overflow: hidden;
  @media(max-width: 910px) {
    width: 240px;
  }
  @media(max-width: 655px) {
    position: relative;
    width: 100%;
    height: 50px;
  }
`

const SideBarOptionsContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 50px;
  margin-top: 2%;
  @media(max-width: 655px) {
    position: relative;
    flex-direction: row;
    margin-top: 0;
    align-items: center;
    gap: 20px;
  }
`

const SideBarOption = styled.div`
  font-size: 25px;
  color: #777c85;
  @media(max-width: 655px) {
    font-size: 19px;
  }
  @media(max-width: 425px) {
    font-size: 13px;
  }
`

export default SideBar