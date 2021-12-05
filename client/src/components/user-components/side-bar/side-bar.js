import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import {
  DOCTOR_ACCOUNT,
  MANAGER_ACCOUNT,
} from "../../../demo-data/account-types";

const SideBar = ({ accountType }) => {
  return (
    <SideBarContainer>
      <SideBarOptionsContainer>
        <StyledNavLink exact to={"/dashboard"} activeStyle={{ color: "red" }}>
          {accountType === DOCTOR_ACCOUNT && (
            <SideBarOption>Dashboard</SideBarOption>
          )}
        </StyledNavLink>
        <StyledNavLink
          activeStyle={{
            color: "green",
          }}
          exact
          to={"/profile"}
        >
          <SideBarOption>Profile</SideBarOption>
        </StyledNavLink>
        <StyledNavLink
          activeStyle={{
            color: "green",
          }}
          exact
          to={"/appointments"}
        >
          <SideBarOption>Programari</SideBarOption>
        </StyledNavLink>
        {accountType === "doctor" && (
          <StyledNavLink
            activeStyle={{
              color: "green",
            }}
            exact
            to={"/create-appointment"}
          >
            <SideBarOption>Programeaza</SideBarOption>
          </StyledNavLink>
        )}
        {accountType === "patient" && (
          <StyledNavLink
            activeStyle={{
              color: "green",
            }}
            exact
            to={"/create-appointment"}
          >
            <SideBarOption>Programeaza-ma</SideBarOption>
          </StyledNavLink>
        )}
        {accountType === MANAGER_ACCOUNT && (
          <>
            <StyledNavLink
              activeStyle={{
                color: "green",
              }}
              exact
              to={"/health-services"}
            >
              <SideBarOption>Servicii medicale</SideBarOption>
            </StyledNavLink>
            <StyledNavLink
              activeStyle={{
                color: "green",
              }}
              exact
              to={"/rooms-management"}
            >
              <SideBarOption>Optiuni camere</SideBarOption>
            </StyledNavLink>
          </>
        )}
      </SideBarOptionsContainer>
    </SideBarContainer>
  );
};

const SideBarContainer = styled.div`
  background: white;
  border-right: 0.5px solid #e8e8e8;
  display: flex;
  justify-content: center;
  width: 280px;
  overflow: hidden;
  @media (max-width: 910px) {
    width: 240px;
  }
  @media (max-width: 655px) {
    position: relative;
    width: 100%;
    height: 50px;
  }
`;

const SideBarOptionsContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 50px;
  margin-top: 2%;
  @media (max-width: 655px) {
    position: relative;
    flex-direction: row;
    margin-top: 0;
    align-items: center;
    gap: 20px;
  }
`;

const SideBarOption = styled.div`
  font-size: 25px;
  color: #777c85;
  @media (max-width: 655px) {
    font-size: 19px;
  }
  @media (max-width: 425px) {
    font-size: 13px;
  }
`;
const StyledNavLink = styled(NavLink)`
  text-decoration: none;
`;
export default SideBar;
