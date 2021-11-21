import React from "react";
import SideBar from "../user-components/side-bar/side-bar";
import { Container, ContentContainer, PageTitle } from "../user-components/common-styled-components";
import HealthServicesComponent from "../user-components/health-services/health-services-component";
import styled from "styled-components";
import HealthServicesRepartitions from "../user-components/health-services/health-services-repartitions";
import DepartmentsComponent from "../user-components/departments/DepartmentsComponent";
import DepartmentsRepartitionsComponent from "../user-components/departments/DepartmentsRepartitionsComponent";

const  Departments = ({user}) => {
    return(
        <Container>
            <SideBar accountType={user.accountType}/>
            <ContentContainer>
                <PageTitle>
                    <div><h6 className="text-black display-6">Gestiune departamente</h6></div>
                </PageTitle>
                <hr />
                <DepartmentsComponent/>
                &nbsp;
                <DepartmentsRepartitionsComponent/>
            </ContentContainer>
        </Container>
    )
}

export default Departments;