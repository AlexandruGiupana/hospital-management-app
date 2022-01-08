import React from "react";
import Paper from "@material-ui/core/Paper";
import { Button, Col, Row } from "react-bootstrap";
import { insertAccommodations } from "../../../services/rooms-services/wards-services";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

const AddAccommodationComponent = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    insertAccommodations(data)
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => {
        toast("error");
      });
  };

  return (
    <Paper>
      <p className="text-black fs-4 ms-sm-3 pt-sm-1">Interneaza pacient</p>
      <form className="ms-sm-3" onSubmit={handleSubmit(onSubmit)}>
        <Row className="g-3">
          <Col>
            <input
              type="text"
              className="form-control"
              placeholder="Email pacient"
              {...register("user_email")}
            />
          </Col>
          <Col>
            <input
              type="text"
              className="form-control"
              placeholder="Numar camera"
              {...register("ward_id")}
            />
          </Col>
          <Col>
            <Button type="submit" variant="success ms-sm-3">
              Interneaza
            </Button>
          </Col>
        </Row>
      </form>
      &nbsp;
    </Paper>
  );
};

export default AddAccommodationComponent;
