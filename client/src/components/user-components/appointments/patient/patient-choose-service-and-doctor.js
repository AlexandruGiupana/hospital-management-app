import React, { useEffect, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { getIdOfRepartiotion } from "../../../../services/repartition-services";

const PatientChooseServiceAndDoctor = ({
  repartitions,
  setChosenServiceAndDoctor,
}) => {
  const handleServiceChange = (e) => {
    setChosenServiceAndDoctor(e.target.value);
  };

  return (
    <>
      <Row>
        <Col>
          <Form.Select className="Select" onChange={handleServiceChange}>
            <option value="" disabled selected hidden>
              Alege un serviciu
            </option>
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
