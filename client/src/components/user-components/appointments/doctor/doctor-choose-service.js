import React from "react";
import { Col, Form, Row } from "react-bootstrap";

const DoctorChooseService = ({ repartitions, setRepartitonId }) => {
  const handleServiceChange = (e) => {
    setRepartitonId(e.target.value);
  };

  return (
    <>
      <Row>
        <Col>
          <Form.Select className="Select" onChange={handleServiceChange}>
            {repartitions.map((repartition) => (
              <option key={repartition.id} value={repartition.id}>
                {`${repartition.service_name}`}
              </option>
            ))}
          </Form.Select>
        </Col>
      </Row>
    </>
  );
};

export default DoctorChooseService;
