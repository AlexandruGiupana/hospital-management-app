import React, { useEffect, useState } from "react";
import Paper from "@material-ui/core/Paper";
import { EditingState } from "@devexpress/dx-react-grid";
import {
  Grid,
  Table,
  TableEditColumn,
  TableEditRow,
  TableHeaderRow,
} from "@devexpress/dx-react-grid-material-ui";
import {
  createMedicalService,
  deleteMedicalService,
  getMedicalServices,
  updateMedicalService,
} from "../../../services/health-services-services/health-services-services";
import { TableColumnVisibility } from "@devexpress/dx-react-grid";
import {
  SUCCESSFUL_DELETION,
  SUCCESSFUL_EDIT,
  SUCCESSFUL_SERVICE_CREATION,
  UNSUCCESSFUL_DELETION,
  UNSUCCESSFUL_SERVICE_CREATION,
} from "../../../notification-messages/notifications";
import { CSVLink } from "react-csv";
import {
  getAccommodations,
  insertAccommodations,
} from "../../../services/rooms-services/wards-services";
import { Button, Col, Row } from "react-bootstrap";
import { createDoctor } from "../../../services/user-services/doctors-services";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import AddAccommodationComponent from "./add-accomodation-component";
import RemoveAccommodationComponent from "./remove-accomodation-component";

const getRowId = (row) => row.id;

const AccommodationTableComponent = ({ notify }) => {
  const columns = [
    { name: "id", title: "User id" },
    { name: "first_name", title: "First name" },
    { name: "last_name", title: "Last Name" },
    { name: "ward_id", title: "Room" },
  ];

  const [rows, setRows] = useState([]);
  const [loadingServicesData, setLoadingServicesData] = useState(true);

  useEffect(() => {
    const getAcc = async () => {
      const accommodations = await getAccommodations();
      setRows(accommodations.data);
      setLoadingServicesData(false);
    };
    getAcc();
  }, []);

  if (loadingServicesData) {
    return <>Data is loading</>;
  }
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <AddAccommodationComponent />
      <br />
      <RemoveAccommodationComponent />
      <br />
      <Paper>
        <p className="text-black fs-4 ms-sm-3 pt-sm-1">Pacienti internati</p>
        <Grid rows={rows} columns={columns} getRowId={getRowId}>
          <Table />
          <TableHeaderRow />
          <TableColumnVisibility defaultHiddenColumnNames={"id"} />
        </Grid>
      </Paper>
      <CSVLink data={rows}>Export accommodation data to CSV file</CSVLink>
    </>
  );
};

export default AccommodationTableComponent;
