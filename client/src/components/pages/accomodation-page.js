import React from "react";
import SideBar from "../user-components/side-bar/side-bar";
import {
  Container,
  ContentContainer,
  PageTitle,
} from "../user-components/common-styled-components";

import { DOCTOR_ACCOUNT } from "../../demo-data/account-types";
import { getUserData } from "../../services/local-storage-services";
import AccommodationTableComponent from "../user-components/accommodation/accommodation-table-component";
import { toast, ToastContainer } from "react-toastify";

const AccommodationPage = () => {
  const connectedUser = getUserData();

  const notify = (notificationText) => {
    toast(notificationText);
  };

  return (
    <Container>
      <SideBar accountType={connectedUser.data.user.account_type} />
      <ContentContainer>
        <PageTitle>
          <div>Internare/Externare</div>
        </PageTitle>
        <hr />
        {connectedUser.data.user.account_type === DOCTOR_ACCOUNT && (
          <>
            <AccommodationTableComponent notify={notify} />
          </>
        )}
      </ContentContainer>
    </Container>
  );
};

export default AccommodationPage;
