import React from "react";
import {FloatingLabel, Form, Col, Row, Button} from "react-bootstrap";
import HealthServicesComponent from "./health-services-component";
import './health-services-style.css'
const  HealthServicesRepartitions = ({user}) => {
    return(
    <Form className="healthServicesRepartitionsContainer">
        <p className="text-black fs-4 ms-sm-3 pt-sm-1">Repartizarea servicii medicale</p>
        <Row className="g-2 ">
            <Col md>
                <FloatingLabel controlId="floatingSelectGrid" label="Nume Prenume Doctor | Nume Serviciu">
                    <Form.Select aria-label="Floating label select example" >
                        <option>Zero</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                </FloatingLabel>
            </Col>
            &nbsp;
            &nbsp;
            <Col>
                <Button variant="danger" size="xxl">Eliminare</Button>
            </Col>
        </Row>
        &nbsp;
        &nbsp;
        <Row className="g-3">
            <Col>
                <FloatingLabel controlId="floatingSelectGrid" label="Nume Serviciu">
                <Form.Select className="Select">
                    <option>EEG</option>
                    <option value="1">Consult diabet</option>
                    <option value="2">Consult psihologic</option>
                    <option value="3">Consult angajare</option>
                </Form.Select>
                </FloatingLabel>
            </Col>
            <Col>
                <FloatingLabel controlId="floatingSelectGrid" label="Nume medic" >
                    <Form.Select className="Select">
                        <option>X</option>
                        <option value="1">Y</option>
                        <option value="2">Z</option>
                        <option value="3">Z1</option>
                    </Form.Select>
                </FloatingLabel>
            </Col>
            <Col>
                <Button variant="success">Adaugare</Button>
            </Col>
        </Row>

        &nbsp;

    </Form>
    )
}

export default HealthServicesRepartitions;