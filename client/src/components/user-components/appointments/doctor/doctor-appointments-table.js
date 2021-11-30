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
import { getAppointmentsOfDoctor } from "../../../../services/appointments-services";

const getRowId = (row) => row.id;

const DoctorAppointmentsTable = () => {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAppointments = async () => {
      const appointments = await getAppointmentsOfDoctor(10); //todo change to doctor id when login will be implemented
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

  const commitChanges = ({ added, changed, deleted }) => {
    let changedRows;
    if (added) {
      const startingAddedId =
        rows.length > 0 ? rows[rows.length - 1].id + 1 : 0;
      changedRows = [
        ...rows,
        ...added.map((row, index) => ({
          id: startingAddedId + index,
          ...row,
        })),
      ];
    }
    if (changed) {
      changedRows = rows.map((row) =>
        changed[row.id] ? { ...row, ...changed[row.id] } : row
      );
    }
    if (deleted) {
      const deletedSet = new Set(deleted);
      changedRows = rows.filter((row) => !deletedSet.has(row.id));
    }
    setRows(changedRows);
  };
  if (loading) {
    return <>Loading...</>;
  } else {
    return (
      <Paper>
        <Grid rows={rows} columns={columns} getRowId={getRowId}>
          <EditingState onCommitChanges={commitChanges} />
          <Table />
          <TableHeaderRow />
          <TableEditRow />
          <TableEditColumn showAddCommand showEditCommand showDeleteCommand />
        </Grid>
      </Paper>
    );
  }
};

export default DoctorAppointmentsTable;
