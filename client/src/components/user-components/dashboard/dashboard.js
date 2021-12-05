import React from "react";
import DashboardItem from "./dash-board-item";
import styled from "styled-components";
import Chart from "./Chart";
import { DOCTOR_ACCOUNT } from "../../../demo-data/account-types";

const Dashboard = ({ accountType }) => {
  return (
    <DashboardContainer>
      {accountType === DOCTOR_ACCOUNT && (
        <>
          <DashboardItemsContainer>
            <DashboardPairItems>
              <DashboardItem title="Programari astazi" value={10} />
              <DashboardItem title="Pacienti consultati astazi" value={3} />
            </DashboardPairItems>
            <DashboardPairItems>
              <DashboardItem
                title="Urmatoarea programare"
                value="astazi, 12:30"
              />
              <DashboardItem title="Pacienti consultati" value={30} />
            </DashboardPairItems>
          </DashboardItemsContainer>
          <Chart />
        </>
      )}
    </DashboardContainer>
  );
};

const DashboardContainer = styled.div`
  padding-top: 15px;
`;

const DashboardItemsContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  @media (max-width: 1261px) {
    flex-direction: column;
  }
`;

const DashboardPairItems = styled.div`
  display: flex;
  width: 50%;
  gap: 20px;
  @media (max-width: 1261px) {
    width: 100%;
  }
  @media (max-width: 912px) {
    flex-direction: column;
  }
`;

export default Dashboard;
