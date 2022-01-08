import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import { EditingState } from "@devexpress/dx-react-grid";
import {
  Grid,
  Table,
  TableHeaderRow,
  TableEditRow,
  TableEditColumn,
} from "@devexpress/dx-react-grid-material-ui";
import {
  deleteAppointment,
  getAppointmentsOfDoctor,
} from "../../../../services/user-services/appointments-services";
import { toast, ToastContainer } from "react-toastify";
import {
  SUCCESSFUL_DELETE_APPOINTMENT,
  UNSUCCESSFUL_DELETE_APPOINTMENT,
} from "../../../../notification-messages/notifications";
import { getUserData } from "../../../../services/local-storage-services";
import { CSVLink } from "react-csv";
import { convertDateToNormalFormatString } from "../../../../services/date-converters/date-converter";

const getRowId = (row) => row.appointment_id;

const DoctorAppointmentsTable = () => {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAppointments = async () => {
      const appointments = (
        await getAppointmentsOfDoctor(getUserData().data.user.id)
      ).data;
      const translatedAppointments = [];
      appointments.forEach((appointment) => {
        let translatedAppointment = {};
        translatedAppointment.patient_first_name =
          appointment?.patient_first_name
            ? appointment?.patient_first_name
            : "No account";
        translatedAppointment.patient_last_name = appointment?.patient_last_name
          ? appointment?.patient_last_name
          : "No account";
        translatedAppointment.service_name = appointment?.service_name;
        translatedAppointment.additional_information =
          appointment?.additional_information;
        translatedAppointment.start_date = convertDateToNormalFormatString(
          appointment?.start_date
        );
        translatedAppointment.end_date = convertDateToNormalFormatString(
          appointment?.end_date
        );
        translatedAppointments.push(translatedAppointment);
      });
      setRows(translatedAppointments);
      setLoading(false);
    };
    getAppointments();
  }, []);

  const columns = [
    { name: "patient_first_name", title: "Prenume" },
    { name: "patient_last_name", title: "Nume" },
    { name: "service_name", title: "Serviciu" },
    { name: "additional_information", title: "Informatii aditionale" },
    { name: "start_date", title: "Ora inceput" },
    { name: "end_date", title: "Ora sfarsit" },
  ];

  const commitChanges = ({ deleted }) => {
    let changedRows;
    if (deleted) {
      const deletedSet = new Set(deleted);
      deleteAppointment(deleted[0])
        .then((data) => {
          toast(SUCCESSFUL_DELETE_APPOINTMENT);
        })
        .catch((err) => {
          console.log(err.message);
          toast(UNSUCCESSFUL_DELETE_APPOINTMENT);
        });
      changedRows = rows.filter((row) => !deletedSet.has(row.appointment_id));
    }
    setRows(changedRows);
  };
  if (loading) {
    return <>Loading...</>;
  } else {
    return (
      <>
        <Paper>
          <ToastContainer />
          <Grid rows={rows} columns={columns} getRowId={getRowId}>
            <EditingState onCommitChanges={commitChanges} />
            <Table />
            <TableHeaderRow />
          </Grid>
        </Paper>
        <CSVLink data={rows}>Export appointments data to CSV file</CSVLink>
      </>
    );
  }
};

export default DoctorAppointmentsTable;
