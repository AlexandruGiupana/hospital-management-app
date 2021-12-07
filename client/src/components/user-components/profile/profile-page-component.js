import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ChangeInformationForm from "../../forms/change-information";
import { getUserInformation } from "../../../services/user-services";
import { ToastContainer, toast } from "react-toastify";

const ProfilePageComponent = ({ userId }) => {
  const [userDetails, setUserDetails] = useState([]);
  const [userDetailsLoading, setUserDetailsLoading] = useState(true);

  useEffect(() => {
    const getUserDetails = async () => {
      const data = (await getUserInformation(userId)).data;
      setUserDetails(data);
      setUserDetailsLoading(false);
    };
    getUserDetails();
  }, []);

  if (userDetailsLoading) {
    return <>Loading...</>;
  }

  return (
    <ProfileContainer>
      <ToastContainer
        position="top-right"
        autoClose={3500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <UserInformationContainer>
        <UserContainer>
          <CoverImage />
          <ProfileImage />
          <NameContainer>{`${userDetails[0].first_name} ${userDetails[0].last_name}`}</NameContainer>
          <IdContainer>ID cont {userDetails[0].id}</IdContainer>
        </UserContainer>
      </UserInformationContainer>
      <ChangeInformationContainer>
        <ChangeInformationForm user={userDetails[0]} toast={toast} />
      </ChangeInformationContainer>
    </ProfileContainer>
  );
};

const ProfileContainer = styled.div`
  display: flex;
  gap: 50px;
  @media (max-width: 1255px) {
    flex-direction: column;
  }
`;

const UserInformationContainer = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 1255px) {
    width: 100%;
    gap: 50px;
  }
`;

const ChangeInformationContainer = styled.div`
  width: 70%;
  height: 800px;
  border-radius: 15px;
  background: white;
  @media (max-width: 1255px) {
    width: 100%;
  }
`;
const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 350px;
  border-radius: 15px;
  background: white;
  @media (max-width: 1255px) {
    width: 100%;
    height: 400px;
  }
`;

const ProfileImage = styled.div`
  height: 130px;
  width: 130px;
  background: #85c9c7;
  border-radius: 100%;
  margin-top: -70px;
`;

const CoverImage = styled.div`
  width: 100%;
  height: 50%;
  background: wheat;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;

const NameContainer = styled.div`
  font-size: 25px;
`;

const IdContainer = styled.div`
  margin-top: 10px;
  font-size: 15px;
  color: #ccc;
`;

export default ProfilePageComponent;
