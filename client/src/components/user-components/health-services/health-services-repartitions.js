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

                    <Form.Select aria-label="Floating label select example" className="ms-sm-3">
                        <option>Control diabetic | Marcel Pop</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>

            </Col>
            &nbsp;
            &nbsp;
            <Col>
                <Button variant="danger" size="xxl" className="ms-sm-3">Eliminare</Button>
            </Col>
        </Row>
        &nbsp;
        &nbsp;
        <Row className="g-3">
            <Col>

                <Form.Select className="Select ms-sm-3">
                    <option>EEG</option>
                    <option value="1">Consult diabet</option>
                    <option value="2">Consult psihologic</option>
                    <option value="3">Consult angajare</option>
                </Form.Select>

            </Col>
            <Col>

                    <Form.Select className="Select ms-sm-3">
                        <option>Medic 1</option>
                        <option value="1">Medic 2</option>
                        <option value="2">M3</option>
                        <option value="3">M4</option>
                    </Form.Select>

            </Col>
            <Col>
                <Button variant="success ms-sm-3">Adaugare</Button>
            </Col>
        </Row>

        &nbsp;

    </Form>
    )
}

export default HealthServicesRepartitions;