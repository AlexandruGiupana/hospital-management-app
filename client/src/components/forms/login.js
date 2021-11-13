import React from "react";
import './styles/register_page.css'
import { Button, Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { login } from "../../services/auth-services";

const LoginForm = () =>{
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const onSubmit = data => {
    login(data);
  }

  return(
    <div className="d-flex justify-content-center">
      <Form className="w-100" onSubmit={handleSubmit(onSubmit)}>
        <h3 className="text-center display-4 mb-5">Login</h3>
        <Form.Group as={Row} className="mb-3 d-flex justify-content-center" controlId="formBasicEmail">
          <Form.Label column sm="2">Email:</Form.Label>
          <Col sm="3">
            <Form.Control
              type="email"
              placeholder="Email"
              {...register("email")}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3 d-flex justify-content-center" controlId="formBasicEmail">
          <Form.Label column sm="2">Parola:</Form.Label>
          <Col sm="3">
            <Form.Control
              type="password"
              placeholder="Parola"
              {...register("password")}/>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3 d-flex justify-content-center" controlId="formBasicEmail">
          <Col sm="5">
            <div className="">
              <Button className="btn btn-primary registerFormSubmitBtn" type="submit">
                Trimite
              </Button>
            </div>
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
  // <div className="d-flex justify-content-center">
  //   <h3 className="text-center display-4">Login</h3>
  //   <form>
  //     <div className="form-group row">
  //       <label htmlFor="inputPassword3" className="col-sm-1 col-form-label registerLabel">Email:</label>
  //       <div className="col-sm-11">
  //         <input type="email" className="form-control inputField"  placeholder="Email" />
  //       </div>
  //     </div>
  //     <div className="form-group row">
  //       <label htmlFor="inputPassword3" className="col-sm-1 col-form-label registerLabel">Parola:</label>
  //       <div className="col-sm-11">
  //         <input type="password" className="form-control inputField" placeholder="Parola" />
  //       </div>
  //     </div>
  //     <div className="form-group row">
  //       <div className="col-sm-12">
  //         <button type="submit" className="btn btn-primary registerFormSubmitBtn">Trimite</button>
  //       </div>
  //     </div>
  //   </form>
  // </div>
};

export default LoginForm;