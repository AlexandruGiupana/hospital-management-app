import React, { useEffect, useState } from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import "./health-services-style.css";
import { getMedicalServices } from "../../../services/health-services-services";
import { getAllRepartitions } from "../../../services/repartition-services";
import { getAllDoctors } from "../../../services/doctors-services";
import AddRepartitonForm from "./forms/add-repartion-form";
import DeleteRepartitionForm from "./forms/delete-repartition-form";

const HealthServicesRepartitions = ({ user, notify }) => {
  const [medicalServices, setMedicalServices] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [repartitions, setRepartitons] = useState([]);

  const [loadingServicesData, setLoadingServicesData] = useState(true);
  const [ladingDoctors, setLoadingDoctors] = useState(true);
  const [loadingRepartitons, setLoadingRepartitons] = useState(true);

  useEffect(() => {
    const getDoctors = async () => {
      const doctorsData = await getAllDoctors();
      setDoctors(doctorsData.data);
      setLoadingDoctors(false);
    };
    const getServices = async () => {
      const services = await getMedicalServices();
      setMedicalServices(services.data);
      setLoadingServicesData(false);
    };
    const getRepartitons = async () => {
      const repartitionData = await getAllRepartitions();
      setRepartitons(repartitionData.data);
      setLoadingRepartitons(false);
    };
    getRepartitons();
    getServices();
    getDoctors();
  }, []);

  if (loadingServicesData || ladingDoctors || loadingRepartitons) {
    return <>Loading...</>;
  }

  return (
    <>
      <div className="healthServicesRepartitionsContainer">
        <p className="text-black fs-4 ms-sm-3 pt-sm-1">
          Repartizarea servicii medicale
        </p>
        <DeleteRepartitionForm
          notify={notify}
          repartitions={repartitions}
          setRepartitons={setRepartitons}
        />
        &nbsp; &nbsp;
        <AddRepartitonForm
          notify={notify}
          doctors={doctors}
          medicalServices={medicalServices}
          repartitions={repartitions}
          setRepartitons={setRepartitons}
        />
        &nbsp;
      </div>
    </>
  );
};

export default HealthServicesRepartitions;
