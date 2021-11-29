import React from "react"
import { Form } from "react-bootstrap";

const ChooseServiceDoctor = ({ medicalServices, setChosenMedicalService }) => {

  const handleChange = (e) => {
    setChosenMedicalService(e.target.value);
  }

  return (
    <>
      <Form.Select
        className="Select"
        onChange={handleChange}
      >
        {medicalServices.map(service => (
          <option key={service.id} value={service.id}>
            {service.service_name}
          </option>
        ))}
      </Form.Select>
    </>
  )
}

export default ChooseServiceDoctor;