import styled from "styled-components";

export const Container = styled.div`
  background: #f8f4ec;
`

export const ContentContainer = styled.div`
  margin-left: 360px;
  margin-right: 80px;
  padding-bottom: 35px;
  @media(max-width: 910px) {
    margin-left: 300px;
    margin-right: 50px;
  }
  @media(max-width: 655px) {
    margin-left: 50px;
    margin-right: 50px;
  }
  @media(max-width: 462px) {
    margin-left: 20px;
    margin-right: 20px;
  }
`

export const PageTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 15px;
  font-size: 20px;
  color: #777c85;
`