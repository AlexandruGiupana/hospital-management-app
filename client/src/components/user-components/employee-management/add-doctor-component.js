import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import Paper from "@mui/material/Paper";
import { useForm } from "react-hook-form";
import { login } from "../../../services/user-services/auth-services";
import { createDoctor } from "../../../services/user-services/doctors-services";
import { useNavigate } from "react-router-dom";

const AddDoctorComponent = () => {
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm();

  let navigate = useNavigate();
  const onSubmit = (data) => {
    createDoctor(data).then((res) => {
      window.location.reload();
    });
  };

  return (
    <Paper>
      <p className="text-black fs-4 ms-sm-3 pt-sm-1">Adauga doctor</p>
      <form className="ms-sm-3" onSubmit={handleSubmit(onSubmit)}>
        <Row className="g-3">
          <Col>
            <input
              type="text"
              className="form-control"
              placeholder="Enter user id"
              {...register("id")}
            />
          </Col>
          <Col>
            <input
              type="text"
              className="form-control"
              placeholder="Enter job title"
              {...register("job_title")}
            />
          </Col>
          <Col>
            <Button
              type="submit"
              variant="success ms-sm-3"
              onclick="location.reload();"
            >
              Adaugare
            </Button>
          </Col>
        </Row>
      </form>
      &nbsp;
    </Paper>
  );
};

export default AddDoctorComponent;
