import React, { useCallback } from "react";
import Paper from "@material-ui/core/Paper";
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
  Toolbar,
  DateNavigator,
  TodayButton,
} from "@devexpress/dx-react-scheduler-material-ui";

import {
  owners,
  resourcesData,
} from "../../../../demo-data/doctor-appointments-table";
import { useEffect, useState } from "react";
import { getAppointmentsOfDoctor } from "../../../../services/appointments-services";

const DoctorScheduleAppointment = ({ chosenMedicalService, rooms }) => {
  const [appointmentsFromServer, setAppointmentsFromServer] = useState([]);
  const [loadingAppointments, setLoadingAppointments] = useState(true);
  const [currentDate, setCurrentDate] = useState(Date.now());

  useEffect(() => {
    const getAppointments = async () => {
      const appointments = await getAppointmentsOfDoctor(10); //todo change id when login is implemented
      setAppointmentsFromServer(appointments.data);
      setData(appointments.data);
      setLoadingAppointments(false);
    };
    getAppointments();
  }, []);

  const [data, setData] = React.useState([]);
  const [resources, setResources] = useState([
    {
      fieldName: "room_number",
      title: "Room",
      instances: rooms,
    },
    {
      fieldName: "members",
      title: "Patient",
      instances: owners,
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

  const handleDataChange = (newDate) => {
    setCurrentDate(newDate);
  };

  const {
    allowAdding,
    allowDeleting,
    allowUpdating,
    allowResizing,
    allowDragging,
  } = editingOptions;

  const onCommitChanges = React.useCallback(
    ({ added, changed, deleted }) => {
      if (added) {
        const startingAddedId =
          data.length > 0 ? data[data.length - 1].id + 1 : 0;
        setData([...data, { id: startingAddedId, ...added }]);
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
  const onAddedAppointmentChange = React.useCallback((appointment) => {
    setAddedAppointment(appointment);
    setIsAppointmentBeingCreated(true);
  });

  const TimeTableCell = React.useCallback(
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

  const allowDrag = useCallback(
    () => allowDragging && allowUpdating,
    [allowDragging, allowUpdating]
  );
  const allowResize = useCallback(
    () => allowResizing && allowUpdating,
    [allowResizing, allowUpdating]
  );

  if (loadingAppointments) {
    return <>Loading...</>;
  }

  return (
    <>
      <Paper>
        <Scheduler data={data} height={600}>
          <ViewState
            currentDate={currentDate}
            onCurrentDateChange={(date) => handleDataChange(date)}
          />
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
          <Toolbar />
          <DateNavigator />
          <TodayButton />
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
    </>
  );
};

export default DoctorScheduleAppointment;
