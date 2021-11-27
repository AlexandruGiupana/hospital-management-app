import React from "react";
import styled from "styled-components";
const ChangeInformationForm = ({ user }) => {
  return (
    <Form>
      <LabeledInput>
        <label>Email</label>
        <BigInput type="email" value={user.email} />
      </LabeledInput>
      <RowContainer>
        <LabeledInput>
          <label>Nume</label>
          <SmallInput type="text" value={user.firstName} />
        </LabeledInput>
        <LabeledInput>
          <label>Prenume</label>
          <SmallInput type="text" value={user.lastName} />
        </LabeledInput>
      </RowContainer>
      <LabeledInput>
        <label>Adresa</label>
        <BigInput type="text" value={user.address} />
      </LabeledInput>
      <RowContainer>
        <LabeledInput>
          <label>Localitate</label>
          <SmallInput type="text" value={user.city} />
        </LabeledInput>
        <LabeledInput>
          <label>Judet</label>
          <SmallInput type="text" value={user.county} />
        </LabeledInput>
        <LabeledInput>
          <label>Cod Postal</label>
          <SmallInput type="text" value={user.postCode} />
        </LabeledInput>
      </RowContainer>
      <LabeledInput>
        <label>Numar telefon</label>
        <BigInput type="phone" value={user.phoneNumber} />
      </LabeledInput>
      <LabeledInput>
        <label>Informatii aditionale</label>
        <InformationAreaInput type="text" value={user.additionalInformation} />
      </LabeledInput>
      <ButtonContainer>
        <SubmitButton type="submit">Salveaza</SubmitButton>
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
