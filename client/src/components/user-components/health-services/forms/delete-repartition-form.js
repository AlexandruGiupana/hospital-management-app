import React from "react";
import { SUCCESSFUL_REPARTITION_DELETION } from "../../../../notification-messages/notifications";
import { useForm } from "react-hook-form";
import { Button, Col, Form, Row } from "react-bootstrap";
import { deleteRepartition } from "../../../../services/repartition-services";

const DeleteRepartitionForm = ({ notify, repartitions, setRepartitons }) => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitDeleteRepartition = (data) => {
    notify(SUCCESSFUL_REPARTITION_DELETION);
    setRepartitons(repartitions.filter(repartition => parseInt(repartition.id) !== parseInt(data.id)));
    deleteRepartition(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitDeleteRepartition)}>
      <Row className="g-2 ">
        <Col md>
          <Form.Select
            aria-label="Floating label select example"
            className="ms-sm-3"
            {...register("id")}
          >
            {repartitions.map(repartition => (
              <option key={repartition.id} value={repartition.id}>
                {`${repartition.first_name} ${repartition.last_name} | ${repartition.service_name}`}
              </option>
            ))}
          </Form.Select>
        </Col>
        &nbsp; &nbsp;
        <Col>
          <Button type="submit" variant="danger" size="xxl" className="ms-sm-3">
            Eliminare
          </Button>
        </Col>
      </Row>
    </form>
  );
}

export default DeleteRepartitionForm;