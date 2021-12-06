import React from "react";
import "./styles/register_page.css";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { Button, CloseButton } from "react-bootstrap";
import { registerNewUser } from "../../services/register-services";
import { PATIENT_ACCOUNT } from "../../demo-data/account-types";

const RegisterForm = ({ toggleModalRegister }) => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data["accountType"] = PATIENT_ACCOUNT;
    registerNewUser(data)
      .then((res) => {
        toggleModalRegister();
      })
      .catch((err) => {
        setError("invalidCredentialError", { message: "Invalid Credentials" });
      });
  };

  return (
    <FormContainer>
      <CloseButtonContainer>
        <CloseButton onClick={toggleModalRegister} />
      </CloseButtonContainer>
      <TitleForm>Sign up</TitleForm>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputContainer>
          <FieldContainer>
            <Label>First name: </Label>
            <InputField
              type="text"
              {...register("firstName", {
                required: true,
                message: "Field is required",
              })}
            />
            {errors.firstName && (
              <ErrorMessage>First name is required</ErrorMessage>
            )}
          </FieldContainer>
          <FieldContainer>
            <Label>Last name: </Label>
            <InputField
              type="text"
              {...register("lastName", {
                required: true,
                message: "Field is required",
              })}
            />
            {errors.lastName && (
              <ErrorMessage>Last name is required</ErrorMessage>
            )}
          </FieldContainer>
          <FieldContainer>
            <Label>CNP: </Label>
            <InputField
              type="text"
              {...register("cnp", {
                required: true,
                message: "Field is required",
              })}
            />
            {errors.cnp && <ErrorMessage>CNP is required</ErrorMessage>}
          </FieldContainer>
          <FieldContainer>
            <Label>Email: </Label>
            <InputField
              type="text"
              {...register("email", {
                required: true,
                message: "Field is required",
              })}
            />
            {errors.email && <ErrorMessage>Email is required</ErrorMessage>}
          </FieldContainer>
          <FieldContainer>
            <Label>Password: </Label>
            <InputField
              type="password"
              {...register("password", {
                required: true,
                message: "Field is required",
              })}
            />
            {errors.password && (
              <ErrorMessage>Password is required</ErrorMessage>
            )}
          </FieldContainer>
        </InputContainer>
        <SubmitButton
          className="btn btn-primary registerFormSubmitBtn"
          type="submit"
        >
          Register
        </SubmitButton>
      </form>
    </FormContainer>
  );
};

const FormContainer = styled.div`
  padding-top: 80px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const FieldContainer = styled.div`
  justify-content: center;
  align-items: center;
`;

const Label = styled.div`
  width: 100px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputField = styled.input`
  width: 100%;
  border: solid 1px #ccc;
  border-radius: 7px;
  padding-left: 7px;
`;

const TitleForm = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  top: 25px;
`;

const CloseButtonContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`;

const ErrorMessage = styled.div`
  color: red;
  padding: 0;
`;

const SubmitButton = styled.button`
  font-family: "Poppins";
  display: flex;
  align-items: center;
  justify-content: center;
  height: 28px;
`;

export default RegisterForm;
