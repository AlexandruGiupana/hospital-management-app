import React from "react";
import Paper from "@material-ui/core/Paper";
import { Button, Col, Row } from "react-bootstrap";
import {
  deleteAccommodation,
  insertAccommodations,
} from "../../../services/rooms-services/wards-services";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

const RemoveAccommodationComponent = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    deleteAccommodation(data)
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Paper>
      <p className="text-black fs-4 ms-sm-3 pt-sm-1">Externeaza</p>
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
            <Button type="submit" variant="danger ms-sm-3">
              Externeaza
            </Button>
          </Col>
        </Row>
      </form>
      &nbsp;
    </Paper>
  );
};

export default RemoveAccommodationComponent;
