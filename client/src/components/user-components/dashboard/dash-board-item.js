import React from "react";
import styled from "styled-components";

const DashboardItem = ({title, value}) => {
  return (
    <DashboardItemContainer>
      <Item>
        <DashboardItemTitle>{title}</DashboardItemTitle>
        <DashboardItemValue>{value}</DashboardItemValue>
      </Item>
      <hr />
      <UpdateContainer>Updated now</UpdateContainer>
    </DashboardItemContainer>
  )
}

const DashboardItemContainer = styled.div`
  height: 150px;
  width: 50%;
  background: white;
  border-radius: 10px;
  padding: 15px;
  @media(max-width: 910px) {
    width: 100%;
  }
`

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const DashboardItemTitle = styled.div`
  color: black;
  font-size: 15px;
  float: right;
`

const DashboardItemValue = styled.div`
  font-size: 30px;
`

const UpdateContainer = styled.div`
  font-size: 12px;
`

export default DashboardItem