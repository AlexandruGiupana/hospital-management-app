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
} from "../../../../services/appointments-services";
import { toast, ToastContainer } from "react-toastify";
import {
  SUCCESSFUL_DELETE_APPOINTMENT,
  UNSUCCESSFUL_DELETE_APPOINTMENT,
} from "../../../../notification-messages/notifications";
import { getUserData } from "../../../../services/local-storage-services";

const getRowId = (row) => row.appointment_id;

const DoctorAppointmentsTable = () => {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAppointments = async () => {
      const appointments = await getAppointmentsOfDoctor(
        getUserData().data.user.id
      );
      //todo format date
      setRows(appointments.data);
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
      <Paper>
        <ToastContainer />
        <Grid rows={rows} columns={columns} getRowId={getRowId}>
          <EditingState onCommitChanges={commitChanges} />
          <Table />
          <TableHeaderRow />
          <TableEditRow />
          <TableEditColumn showDeleteCommand />
        </Grid>
      </Paper>
    );
  }
};

export default DoctorAppointmentsTable;
