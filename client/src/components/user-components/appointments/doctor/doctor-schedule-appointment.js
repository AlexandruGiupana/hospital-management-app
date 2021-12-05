import React, { useCallback, useState } from "react";
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
  createAppointmentDoctor,
  deleteAppointment,
  updateAppointment,
} from "../../../../services/appointments-services";
import DoctorChooseService from "./doctor-choose-service";
import {
  SUCCESSFUL_CREATION_APPOINTMENT,
  SUCCESSFUL_DELETE_APPOINTMENT,
  SUCCESSFUL_EDIT_APPOINTMENT,
  UNSUCCESSFUL_CREATION_APPOINTMENT,
  UNSUCCESSFUL_DELETE_APPOINTMENT,
  UNSUCCESSFUL_EDIT_APPOINTMENT,
} from "../../../../notification-messages/notifications";

const DoctorScheduleAppointment = ({
  repartitions,
  rooms,
  appointments,
  notify,
}) => {
  const [repartitonId, setRepartitonId] = useState(repartitions[0].id);
  const [currentDate, setCurrentDate] = useState(Date.now());

  const [data, setData] = useState(appointments);
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

  const onCommitChanges = useCallback(
    ({ added, changed, deleted }) => {
      if (added) {
        const startingAddedId =
          data.length > 0 ? data[data.length - 1].id + 1 : 0;
        const appointmentData = {
          service_rep_id: repartitonId,
          hospital_room_id: added.roomId,
          additional_information: added.notes,
          start_date: added.startDate,
          end_date: added.endDate,
        };
        createAppointmentDoctor(appointmentData)
          .then((data) => {
            notify(SUCCESSFUL_CREATION_APPOINTMENT);
          })
          .catch((err) => {
            console.log(err);
            notify(UNSUCCESSFUL_CREATION_APPOINTMENT);
          });
        setData([...data, { id: startingAddedId, ...added }]);
      }
      if (changed) {
        const newAppointments = data.map((appointment) =>
          changed[appointment.id]
            ? { ...appointment, ...changed[appointment.id] }
            : appointment
        );
        newAppointments.map((appointment) => {
          if (parseInt(appointment.id) === parseInt(Object.keys(changed)[0])) {
            const translatedAppointment = {
              appointment_id: appointment.id,
              hospital_room_id: appointment.roomId,
              additional_information: appointment.notes,
              start_date: appointment.startDate,
              end_date: appointment.endDate,
            };
            updateAppointment(translatedAppointment)
              .then((data) => {
                notify(SUCCESSFUL_EDIT_APPOINTMENT);
              })
              .catch((err) => {
                console.log(err);
                notify(UNSUCCESSFUL_EDIT_APPOINTMENT);
              });
          }
        });
      }
      if (deleted !== undefined) {
        setData(data.filter((appointment) => appointment.id !== deleted));
        deleteAppointment(deleted)
          .then((data) => {
            notify(SUCCESSFUL_DELETE_APPOINTMENT);
          })
          .catch((err) => {
            console.log(err.message);
            notify(UNSUCCESSFUL_DELETE_APPOINTMENT);
          });
      }
      setIsAppointmentBeingCreated(false);
    },
    [setData, setIsAppointmentBeingCreated, data, repartitonId]
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

  const CommandButton = useCallback(
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
  return (
    <>
      <DoctorChooseService
        repartitions={repartitions}
        setRepartitonId={setRepartitonId}
      />
      <br />
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
            startDayHour={8}
            endDayHour={17}
            timeTableCellComponent={TimeTableCell}
          />
          <Appointments />
          <AppointmentTooltip showOpenButton showDeleteButton={allowDeleting} />
          <Toolbar />
          <DateNavigator />
          <TodayButton />
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
