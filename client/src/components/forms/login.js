import React from "react";
import "./styles/register_page.css";
import { Button, CloseButton } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { login } from "../../services/auth-services";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { PATIENT_ACCOUNT } from "../../demo-data/account-types";

const LoginForm = ({ setData, toggleModalLogIn }) => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  let navigate = useNavigate();

  const onSubmit = (data) => {
    login(data)
      .then((res) => {
        setData(res);
        toggleModalLogIn();
        navigate("/profile");
      })
      .catch((err) => {
        setError("invalidCredentialError", { message: "Invalid Credentials" });
      });
  };

  return (
    <FormContainer>
      <CloseButtonContainer>
        <CloseButton onClick={toggleModalLogIn} />
      </CloseButtonContainer>
      <TitleForm>Log in</TitleForm>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputContainer>
          <FieldContainer>
            <Label>Email: </Label>
            <InputField type="text" {...register("email")} />
          </FieldContainer>
          <FieldContainer>
            <Label>Password: </Label>
            <InputField type="password" {...register("password")} />
            {errors.invalidCredentialError && (
              <ErrorMessage>
                {errors.invalidCredentialError?.message}
              </ErrorMessage>
            )}
          </FieldContainer>
        </InputContainer>
        <SubmitButton
          className="btn btn-primary registerFormSubmitBtn"
          type="submit"
        >
          Log in
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

const ErrorMessage = styled.p`
  color: red;
`;

const SubmitButton = styled.button`
  font-family: "Poppins";
  display: flex;
  align-items: center;
  justify-content: center;
  height: 28px;
`;

export default LoginForm;
