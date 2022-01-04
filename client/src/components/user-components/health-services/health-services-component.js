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

const getRowId = (row) => row.id;

const HealthServicesComponent = ({ notify }) => {
  const columns = [
    { name: "id", hidden: true },
    { name: "service_name", title: "Name" },
    { name: "price", title: "Price" },
  ];

  const [rows, setRows] = useState([]);
  const [loadingServicesData, setLoadingServicesData] = useState(true);

  useEffect(() => {
    const getServices = async () => {
      const services = await getMedicalServices();
      setRows(services.data);
      setLoadingServicesData(false);
    };
    getServices();
  }, []);

  const commitChanges = ({ added: addedData, changed, deleted }) => {
    let changedRows;
    if (addedData) {
      createMedicalService(addedData[0])
        .then((data) => {
          notify(SUCCESSFUL_SERVICE_CREATION);
          const startingAddedId =
            rows.length > 0 ? rows[rows.length - 1].id + 1 : 0;
          changedRows = [
            ...rows,
            ...addedData.map((row, index) => ({
              id: startingAddedId + index,
              ...row,
            })),
          ];
          setRows(changedRows);
          setTimeout(function () {
            window.location.reload();
          }, 1500);
        })
        .catch((err) => {
          notify(UNSUCCESSFUL_SERVICE_CREATION);
        });
    }
    if (changed) {
      updateMedicalService(changed)
        .then((data) => {
          notify(SUCCESSFUL_EDIT);
          changedRows = rows.map((row) =>
            changed[row.id] ? { ...row, ...changed[row.id] } : row
          );
          setRows(changedRows);
          setTimeout(function () {
            window.location.reload();
          }, 1500);
        })
        .catch((err) => {
          notify(UNSUCCESSFUL_SERVICE_CREATION);
        });
    }
    if (deleted) {
      deleteMedicalService(deleted[0])
        .then((data) => {
          notify(SUCCESSFUL_DELETION);
          const deletedSet = new Set(deleted);
          changedRows = rows.filter((row) => !deletedSet.has(row.id));
          setRows(changedRows);
          setTimeout(function () {
            window.location.reload();
          }, 1500);
        })
        .catch((err) => {
          notify(UNSUCCESSFUL_DELETION);
        });
    }
  };

  if (loadingServicesData) {
    return <>Data is loading</>;
  }
  return (
    <>
      <Paper>
        <p className="text-black fs-4 ms-sm-3 pt-sm-1">
          Adaugare servicii medicale
        </p>
        <Grid rows={rows} columns={columns} getRowId={getRowId}>
          <EditingState onCommitChanges={commitChanges} />
          <Table />
          <TableHeaderRow />
          <TableColumnVisibility defaultHiddenColumnNames={"id"} />
          <TableEditRow />
          <TableEditColumn showAddCommand showEditCommand showDeleteCommand />
        </Grid>
      </Paper>
      <CSVLink data={rows}>Export services data to CSV file</CSVLink>
    </>
  );
};

export default HealthServicesComponent;
