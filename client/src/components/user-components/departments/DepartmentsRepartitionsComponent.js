import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  Container,
  ContentContainer,
  PageTitle,
} from "../common-styled-components.js";
import { Button, Col, FloatingLabel, Form, Row } from "react-bootstrap";
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0),
  createData("Ice cream sandwich", 237, 9.0),
  createData("Eclair", 262, 16.0),
  createData("Cupcake", 305, 3.7),
  createData("Gingerbread", 356, 16.0),
];

export default function DepartmentsRepartitionsComponent() {
  return (
    <Container className="bg-white">
      <Form className="healthServicesRepartitionsContainer">
        <p className="text-black fs-4 ms-sm-3 pt-sm-1">
          Repartizare angajati pe departamente
        </p>
        <Row className="g-2 ">
          <Col md>
            <Form.Select
              aria-label="Floating label select example"
              className="ms-sm-3"
            >
              <option>Zero</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Col>
          &nbsp; &nbsp;
          <Col>
            <Button variant="danger" size="xxl" className="ms-sm-3">
              Eliminare
            </Button>
          </Col>
        </Row>
        &nbsp; &nbsp;
        <Row className="g-3">
          <Col>
            <Form.Select className="Select ms-sm-3">
              <option>Chirurgie</option>
              <option value="1">neurochirurgie</option>
              <option value="2">pediatrie</option>
              <option value="3">psihologie</option>
            </Form.Select>
          </Col>
          <Col>
            <Form.Select className="Select ms-sm-3">
              <option>Ion popescu</option>
              <option value="1">Marcel popescu</option>
              <option value="2">mara popescu</option>
              <option value="3">mara mara</option>
            </Form.Select>
          </Col>
          <Col>
            <Button variant="success" className="ms-sm-3">
              Adaugare
            </Button>
          </Col>
        </Row>
        &nbsp;
      </Form>
      <p className="text-black fs-4 ms-sm-3 pt-sm-1">Situatie repartizari</p>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 300 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Departament</TableCell>
              <TableCell align="left">Medic</TableCell>
              <TableCell align="left">Id Medic</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.calories}</TableCell>
                <TableCell align="left">{row.fat}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
