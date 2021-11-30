import * as React from "react";
import Paper from "@material-ui/core/Paper";
import FormGroup from "@material-ui/core/FormGroup";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Typography from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";
import {
  ViewState,
  EditingState,
  IntegratedEditing,
} from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  WeekView,
  Appointments,
  AppointmentForm,
  AppointmentTooltip,
  DragDropProvider,
  Resources,
} from "@devexpress/dx-react-scheduler-material-ui";

import { doctorAppointmentsTable } from "../../../../demo-data/doctor-appointments-table";
import {
  appointments,
  resourcesData,
  owners,
} from "../../../../demo-data/doctor-appointments-table";
import { useCallback, useEffect, useState } from "react";
import { createAppointment } from "../../../../services/appointments-services";
import { getIdOfRepartiton } from "../../../../services/repartition-services";

const currentDate = Date.now();

const PatientCreateAppointment = ({ repartitonId, rooms, appointments }) => {
  // console.log(repartitonId)

  const [data, setData] = React.useState(appointments);
  const [resources, setResources] = useState([
    {
      fieldName: "roomId",
      title: "Room",
      instances: rooms,
    },
  ]);

  const editingOptions = {
    allowAdding: true,
    allowDeleting: true,
    allowUpdating: true,
    allowDragging: true,
    allowResizing: true,
  };
  const [addedAppointment, setAddedAppointment] = useState({});
  const [isAppointmentBeingCreated, setIsAppointmentBeingCreated] =
    useState(false);

  const {
    allowAdding,
    allowDeleting,
    allowUpdating,
    allowResizing,
    allowDragging,
  } = editingOptions;

  // console.log(repartitonId)

  const onCommitChanges = useCallback(
    ({ added, changed, deleted }) => {
      if (added) {
        const startingAddedId =
          data.length > 0 ? data[data.length - 1].id + 1 : 0;
        setData([...data, { id: startingAddedId, ...added }]);
        const appointmentData = {
          patient_id: 15, //todo change when login is implemented
          service_rep_id: repartitonId,
          hospital_room_id: added.roomId,
          additional_information: added.notes,
          start_date: added.startDate,
          end_date: added.endDate,
        };
        createAppointment(appointmentData);
        console.log(added);
      }
      if (changed) {
        setData(
          data.map((appointment) =>
            changed[appointment.id]
              ? { ...appointment, ...changed[appointment.id] }
              : appointment
          )
        );
      }
      if (deleted !== undefined) {
        setData(data.filter((appointment) => appointment.id !== deleted));
      }
      setIsAppointmentBeingCreated(false);
    },
    [setData, setIsAppointmentBeingCreated, data]
  );
  const onAddedAppointmentChange = useCallback((appointment) => {
    setAddedAppointment(appointment);
    setIsAppointmentBeingCreated(true);
  });

  const TimeTableCell = useCallback(
    React.memo(({ onDoubleClick, ...restProps }) => (
      <WeekView.TimeTableCell
        {...restProps}
        onDoubleClick={allowAdding ? onDoubleClick : undefined}
      />
    )),
    [allowAdding]
  );

  const CommandButton = React.useCallback(
    ({ id, ...restProps }) => {
      if (id === "deleteButton") {
        return (
          <AppointmentForm.CommandButton
            id={id}
            {...restProps}
            disabled={!allowDeleting}
          />
        );
      }
      return <AppointmentForm.CommandButton id={id} {...restProps} />;
    },
    [allowDeleting]
  );

  const allowDrag = React.useCallback(
    () => allowDragging && allowUpdating,
    [allowDragging, allowUpdating]
  );
  const allowResize = React.useCallback(
    () => allowResizing && allowUpdating,
    [allowResizing, allowUpdating]
  );

  // if (repartitonId === undefined || repartitonId === -1) {
  //   return <>Loading...</>
  // }

  return (
    <React.Fragment>
      <Paper>
        <Scheduler data={data} height={600}>
          <ViewState currentDate={currentDate} />
          <EditingState
            onCommitChanges={onCommitChanges}
            addedAppointment={addedAppointment}
            onAddedAppointmentChange={onAddedAppointmentChange}
          />

          <IntegratedEditing />
          <WeekView
            startDayHour={9}
            endDayHour={19}
            timeTableCellComponent={TimeTableCell}
          />

          <Appointments />

          <AppointmentTooltip showOpenButton showDeleteButton={allowDeleting} />
          <AppointmentForm
            commandButtonComponent={CommandButton}
            readOnly={isAppointmentBeingCreated ? false : !allowUpdating}
          />

          <Resources data={resources} mainResourceName="roomId" />

          <DragDropProvider allowDrag={allowDrag} allowResize={allowResize} />
        </Scheduler>
      </Paper>
    </React.Fragment>
  );
};

export default PatientCreateAppointment;
