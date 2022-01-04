import React, { useEffect, useState } from "react";
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
  createRoom,
  deleteRoom,
  updateRoom,
} from "../../../services/rooms-services/rooms-services";
import { toast, ToastContainer } from "react-toastify";
import {
  SUCCESSFUL_DELETION,
  SUCCESSFUL_DELETION_ROOM,
  SUCCESSFUL_EDIT,
  SUCCESSFUL_EDIT_ROOM,
  SUCCESSFUL_ROOM_CREATION,
  UNSUCCESSFUL_DELETION,
  UNSUCCESSFUL_DELETION_ROOM,
  UNSUCCESSFUL_EDIT_ROOM,
  UNSUCCESSFUL_ROOM_CREATION,
  UNSUCCESSFUL_SERVICE_CREATION,
} from "../../../notification-messages/notifications";
import { deleteMedicalService } from "../../../services/health-services-services/health-services-services";
import { getAllDoctors } from "../../../services/user-services/doctors-services";
import AddDoctorComponent from "./add-doctor-component";

const getRowId = (row) => row.id;

const EmployeeManagementComponent = () => {
  const [columns] = useState([
    { name: "id", title: "ID" },
    { name: "first_name", title: "First name" },
    { name: "last_name", title: "Last name" },
    { name: "job_title", title: "Job title" },
    { name: "email", title: "Email" },
    { name: "cnp", title: "CNP" },
  ]);

  const [rows, setRows] = useState([]);
  const [loadingRooms, setLoadingRooms] = useState(true);

  useEffect(() => {
    const getDoctors = async () => {
      const doctorsData = (await getAllDoctors()).data;
      setRows(doctorsData);
      setLoadingRooms(false);
    };
    getDoctors();
  }, []);

  const commitChanges = ({ added, changed, deleted }) => {
    let changedRows;
    if (deleted) {
      deleteRoom(deleted[0])
        .then((data) => {
          toast(SUCCESSFUL_DELETION_ROOM);
          const deletedSet = new Set(deleted);
          changedRows = rows.filter((row) => !deletedSet.has(row.id));
          setRows(changedRows);
        })
        .catch((err) => {
          toast(UNSUCCESSFUL_DELETION_ROOM);
        });
    }
  };

  if (loadingRooms) {
    return <>Loading...</>;
  }

  return (
    <>
      <Paper>
        <ToastContainer />
        <p className="text-black fs-4 ms-sm-3 pt-sm-1">Lista doctori</p>
        <Grid rows={rows} columns={columns} getRowId={getRowId}>
          <EditingState onCommitChanges={commitChanges} />
          <Table />
          <TableHeaderRow />
          <TableEditRow />
          <TableEditColumn showDeleteCommand />
        </Grid>
      </Paper>
      &nbsp; &nbsp;
      <AddDoctorComponent />
    </>
  );
};

export default EmployeeManagementComponent;
