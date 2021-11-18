import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import { EditingState } from '@devexpress/dx-react-grid';
import {
  Grid,
  Table,
  TableHeaderRow,
  TableEditRow,
  TableEditColumn,
} from '@devexpress/dx-react-grid-material-ui';
import { doctorAppointmentsTable } from "../../../demo-data/doctor-appointments-table";
import { patientAppointmentsTable } from "../../../demo-data/patient-appointments";
import {DOCTOR_ACCOUNT, MANAGER_ACCOUNT} from "../../../demo-data/account-types";

const getRowId = row => row.id;

const AppointmentComponent = () => {
  const columns = [
      {name: 'lastName', title: 'Nume'},
      {name: 'firstName', title: 'Prenume'},
      {name: 'information', title: 'Informatii aditionale'},
      {name: 'startDate', title: 'Ora inceput'},
      {name: 'endDate', title: 'Ora sfarsit'},
      {name: 'phoneNumber', title: 'Numar telefon'}
    ]

  const [rows, setRows] = useState(doctorAppointmentsTable);

  const commitChanges = ({ added, changed, deleted }) => {
    let changedRows;
    if (added) {
      const startingAddedId = rows.length > 0 ? rows[rows.length - 1].id + 1 : 0;
      changedRows = [
        ...rows,
        ...added.map((row, index) => ({
          id: startingAddedId + index,
          ...row,
        })),
      ];
    }
    if (changed) {
      changedRows = rows.map(row => (changed[row.id] ? { ...row, ...changed[row.id] } : row));
    }
    if (deleted) {
      const deletedSet = new Set(deleted);
      changedRows = rows.filter(row => !deletedSet.has(row.id));
    }
    setRows(changedRows);
  };

  return (
    <Paper>
      <Grid
        rows={rows}
        columns={columns}
        getRowId={getRowId}
      >
        <EditingState
          onCommitChanges={commitChanges}
        />
        <Table />
        <TableHeaderRow />
        <TableEditRow />
        <TableEditColumn
          showAddCommand
          showEditCommand
          showDeleteCommand
        />
      </Grid>
    </Paper>
  );
};

export default AppointmentComponent;
