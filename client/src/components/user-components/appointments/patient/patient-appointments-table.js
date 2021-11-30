import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import { EditingState } from "@devexpress/dx-react-grid";
import {
  Grid,
  Table,
  TableEditColumn,
  TableEditRow,
  TableHeaderRow,
} from "@devexpress/dx-react-grid-material-ui";
import { patientAppointmentsTable } from "../../../../demo-data/patient-appointments";

const getRowId = (row) => row.id;

const PatientAppointmentComponent = () => {
  const columns = [
    { name: "doctorFirstName", title: "Nume Doctor" },
    { name: "doctorLastName", title: "Prenume Doctor" },
    { name: "health-service", title: "Serviciu" },
    { name: "information", title: "Informatii aditionale" },
    { name: "startDate", title: "Ora inceput" },
    { name: "endDate", title: "Ora sfarsit" },
    { name: "doctorPhoneNumber", title: "Contacteaza" },
  ];

  const [rows, setRows] = useState(patientAppointmentsTable);

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
};

export default PatientAppointmentComponent;
