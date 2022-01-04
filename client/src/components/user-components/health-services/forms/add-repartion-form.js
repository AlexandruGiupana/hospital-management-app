import React from "react";
import {
  assignServiceToDoctor,
  getAllRepartitions,
} from "../../../../services/health-services-services/repartition-services";
import {
  SUCCESSFUL_REPARTITION,
  UNSUCCESSFUL_REPARTITION,
} from "../../../../notification-messages/notifications";
import { useForm } from "react-hook-form";
import { Button, Col, Form, Row } from "react-bootstrap";

const AddRepartitonForm = ({
  notify,
  doctors,
  medicalServices,
  repartitions,
  setRepartitons,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitCreateRepartition = (data) => {
    const serviceData = JSON.parse(data["service"]);
    const doctorData = JSON.parse(data["doctor"]);
    setRepartitons([
      ...repartitions,
      {
        first_name: doctorData.first_name,
        last_name: doctorData.last_name,
        service_name: serviceData.service_name,
      },
    ]);
    const sentData = {
      service_id: serviceData.id,
      doctor_id: doctorData.id,
    };
    assignServiceToDoctor(sentData)
      .then((data) => {
        notify(SUCCESSFUL_REPARTITION);
      })
      .catch((err) => {
        notify(UNSUCCESSFUL_REPARTITION);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmitCreateRepartition)}>
      <Row className="g-3">
        <Col>
          <Form.Select className="Select ms-sm-3" {...register("service")}>
            {medicalServices.map((service) => (
              <option key={service.id} value={JSON.stringify(service)}>
                {service.service_name}
              </option>
            ))}
          </Form.Select>
        </Col>
        <Col>
          <Form.Select className="Select ms-sm-3" {...register("doctor")}>
            {doctors.map((doctor) => (
              <option key={doctor.id} value={JSON.stringify(doctor)}>
                {`${doctor.first_name} ${doctor.last_name}`}
              </option>
            ))}
          </Form.Select>
        </Col>
        <Col>
          <Button type="submit" variant="success ms-sm-3">
            Adaugare
          </Button>
        </Col>
      </Row>
    </form>
  );
};
export default AddRepartitonForm;
