import React, { useEffect, useState } from "react";
import { getMedicalServices } from "../../services/health-services-services";
import "./styles/services_prices_style.css";
import Container from "react-bootstrap/Container";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import { TableCell } from "@material-ui/core";
import TableBody from "@mui/material/TableBody";
import Paper from "@material-ui/core/Paper";
import styled from "styled-components";
const PricesPage = () => {
  const [medicalServices, setMedicalServices] = useState([]);
  const [loadingServicesData, setLoadingServicesData] = useState(true);

  useEffect(() => {
    const getMServices = async () => {
      const medicalServicesData = await getMedicalServices();
      setMedicalServices(medicalServicesData.data);
      setLoadingServicesData(false);
    };

    getMServices();
  }, []);
  if (loadingServicesData) {
    return <>Loading...</>;
  }
  console.log(medicalServices.length);

  return (
    <CenterContainer>
      <Container fluid>
        <CenterContainer>
          <h6 className="display-5" id="servicesPageHeader">
            Preturi servicii oferite
          </h6>
          <p className="fs-5" id="servicesPageP">
            Serviciile oferite, precum si pretul acestora se regasesc in tabelul de
            mai jos. Preturile sunt afisate in <b>lei</b> si includ TVA.
            <br />
            Pentru mai multe detalii va rugam sa adresati intrebari prin trimiterea
            acestora la adresa <i>contact@mediplus.com</i>.
          </p>
        </CenterContainer>
        <TableContainer component={Paper} className="mb-lg-5">
          <CenterContainer>
            <Table
              sx={{ minWidth: 300 }}
              aria-label="simple table"
              className="w-75 align-content-center"
              bordered
              responsive
            >
              <TableHead>
                <TableRow>
                  <TableCell>Nume serviciu</TableCell>
                  <TableCell align="left">Pret serviciu</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {medicalServices.map((row) => (
                  <TableRow
                    key={row}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="left" component="th" scope="row">
                      {row.service_name}
                    </TableCell>
                    <TableCell align="left" component="th" scope="row">
                      {row.price}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CenterContainer>
        </TableContainer>
      </Container>
    </CenterContainer>
  );
};

const CenterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export default PricesPage;
