import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { updateUserInformation } from "../../services/user-services";
import {
  SUCCESSFUL_EDIT_PROFILE,
  UNSUCCESSFUL_EDIT_PROFILE,
} from "../../notification-messages/notifications";

const ChangeInformationForm = ({ user, toast }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    updateUserInformation(user.id, data)
      .then(() => {
        toast(SUCCESSFUL_EDIT_PROFILE);
      })
      .catch(() => {
        toast(UNSUCCESSFUL_EDIT_PROFILE);
      });
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <LabeledInput>
        <label>Email</label>
        <BigInput type="email" value={user.email} disabled={true} />
      </LabeledInput>
      <RowContainer>
        <LabeledInput>
          <label>First name</label>
          <SmallInput
            type="text"
            defaultValue={user.first_name}
            {...register("first_name", {
              required: true,
              message: "Field is required",
            })}
          />
        </LabeledInput>
        <LabeledInput>
          <label>Last name</label>
          <SmallInput
            type="text"
            defaultValue={user.last_name}
            {...register("last_name", {
              required: true,
              message: "Field is required",
            })}
          />
        </LabeledInput>
      </RowContainer>
      <LabeledInput>
        <label>Address</label>
        <BigInput
          type="text"
          defaultValue={user.address}
          {...register("address")}
        />
      </LabeledInput>
      <RowContainer>
        <LabeledInput>
          <label>City</label>
          <SmallInput
            type="text"
            defaultValue={user.city}
            {...register("city")}
          />
        </LabeledInput>
        <LabeledInput>
          <label>County</label>
          <SmallInput
            type="text"
            defaultValue={user.county}
            {...register("county")}
          />
        </LabeledInput>
        <LabeledInput>
          <label>ZIP Code</label>
          <SmallInput
            type="text"
            defaultValue={user.postal_code}
            {...register("postal_code")}
          />
        </LabeledInput>
      </RowContainer>
      <LabeledInput>
        <label>Phone number</label>
        <BigInput
          type="phone"
          defaultValue={user.phone_number}
          {...register("phone_number", {
            required: true,
            message: "Field is required",
          })}
        />
      </LabeledInput>
      <LabeledInput>
        <label>Additional information</label>
        <InformationAreaInput
          type="text"
          defaultValue={user.additional_information}
          {...register("additional_information")}
        />
      </LabeledInput>
      <ButtonContainer>
        <SubmitButton type="submit">Save</SubmitButton>
      </ButtonContainer>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  padding: 20px;
  flex-direction: column;
  gap: 22px;
`;

const SmallInput = styled.input`
  width: 98%;
  border: solid 1px #ccc;
  border-radius: 7px;
  padding-left: 7px;
`;

const BigInput = styled.input`
  width: 99%;
  border: solid 1px #ccc;
  border-radius: 7px;
  padding-left: 7px;
`;

const InformationAreaInput = styled.textarea`
  width: 100%;
  height: 300px;
  border: solid 1px #ccc;
  border-radius: 7px;
  resize: none;
  padding-left: 7px;
`;

const LabeledInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const RowContainer = styled.div`
  display: flex;
`;

const SubmitButton = styled.button`
  border: none;
  background: #0275d8;
  border-radius: 15px;
  height: 30px;
  width: 100px;
  color: white;
  text-align: center;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default ChangeInformationForm;
