import React, { useEffect, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { getIdOfRepartiotion } from "../../../../services/health-services-services/repartition-services";

const PatientChooseServiceAndDoctor = ({ repartitions, setRepartitonId }) => {
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
                {`${repartition.service_name} | ${repartition.first_name} ${repartition.last_name}`}
              </option>
            ))}
          </Form.Select>
        </Col>
      </Row>
    </>
  );
};

export default PatientChooseServiceAndDoctor;
