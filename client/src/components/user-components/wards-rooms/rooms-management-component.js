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
  generateRows,
  defaultColumnValues,
} from "../../../demo-data/generator";
import { createRoom, deleteRoom, getRooms, updateRoom } from "../../../services/rooms-services";
import { toast, ToastContainer } from "react-toastify";
import {
  SUCCESSFUL_DELETION, SUCCESSFUL_DELETION_ROOM,
  SUCCESSFUL_EDIT, SUCCESSFUL_EDIT_ROOM,
  SUCCESSFUL_ROOM_CREATION, UNSUCCESSFUL_DELETION, UNSUCCESSFUL_DELETION_ROOM, UNSUCCESSFUL_EDIT_ROOM,
  UNSUCCESSFUL_ROOM_CREATION, UNSUCCESSFUL_SERVICE_CREATION
} from "../../../notification-messages/notifications";
import { deleteMedicalService } from "../../../services/health-services-services";

const getRowId = (row) => row.id;

const RoomsManagementComponent = () => {
  const [columns] = useState([
    { name: "room_number", title: "Cod sala" },
    { name: "type", title: "Tip (C / O)" },
  ]);

  const [rows, setRows] = useState([]);
  const [loadingRooms, setLoadingRooms] = useState(true);

  useEffect(() => {
    const getAllRooms = async () => {
      const roomsData = (await getRooms()).data;
      setRows(roomsData);
      console.log(roomsData)
      setLoadingRooms(false);
    }
    getAllRooms();
  }, [])

  const commitChanges = ({ added, changed, deleted }) => {
    let changedRows;
    if (added) {
      createRoom(added[0])
        .then((data) => {
          const startingAddedId =
            rows.length > 0 ? rows[rows.length - 1].id + 1 : 0;
          changedRows = [
            ...rows,
            ...added.map((row, index) => ({
              id: startingAddedId + index,
              ...row,
            })),
          ];
          setRows(changedRows);
          toast(SUCCESSFUL_ROOM_CREATION);
        })
        .catch((err) => {
          toast(UNSUCCESSFUL_ROOM_CREATION);
        })
    }
    if (changed) {
      updateRoom(changed)
        .then((data) => {
          toast(SUCCESSFUL_EDIT_ROOM);
          changedRows = rows.map((row) =>
            changed[row.id] ? { ...row, ...changed[row.id] } : row
          );
          setRows(changedRows);
        })
        .catch((err) => {
          console.log(err.msg)
          toast(UNSUCCESSFUL_EDIT_ROOM);
        });
    }
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

  if(loadingRooms) {
    return (
      <>
        Loading...
      </>
    )
  }

  return (
    <Paper>
      <ToastContainer />
      <p className="text-black fs-4 ms-sm-3 pt-sm-1">
        Gestionare sali si cabinete
      </p>
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

export default RoomsManagementComponent;
