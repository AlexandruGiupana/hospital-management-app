import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import { ViewState, EditingState, IntegratedEditing } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  WeekView,
  Appointments,
  AppointmentForm,
  AppointmentTooltip,
  DragDropProvider,
} from '@devexpress/dx-react-scheduler-material-ui';

import { appointments } from "../../../demo-data/appointments";
import styled from "styled-components";

const currentDate = Date.now();

const PatientCreateAppointments = () => {
  const [data, setData] = React.useState(appointments);
  const editingOptions = {
    allowAdding: true,
    allowDeleting: true,
    allowUpdating: true,
    allowDragging: true,
    allowResizing: true,
  };
  const [addedAppointment, setAddedAppointment] = React.useState({});
  const [isAppointmentBeingCreated, setIsAppointmentBeingCreated] = React.useState(false);

  const {
    allowAdding, allowDeleting, allowUpdating, allowResizing, allowDragging,
  } = editingOptions;

  const onCommitChanges = React.useCallback(({ added, changed, deleted }) => {
    if (added) {
      const startingAddedId = data.length > 0 ? data[data.length - 1].id + 1 : 0;
      setData([...data, { id: startingAddedId, ...added }]);
    }
    if (changed) {
      setData(data.map(appointment => (
          changed[appointment.id] ? { ...appointment, ...changed[appointment.id] } : appointment)));
    }
    if (deleted !== undefined) {
      setData(data.filter(appointment => appointment.id !== deleted));
    }
    setIsAppointmentBeingCreated(false);
  }, [setData, setIsAppointmentBeingCreated, data]);
  const onAddedAppointmentChange = React.useCallback((appointment) => {
    setAddedAppointment(appointment);
    setIsAppointmentBeingCreated(true);
  });

  const TimeTableCell = React.useCallback(React.memo(({ onDoubleClick, ...restProps }) => (
      <WeekView.TimeTableCell
          {...restProps}
          onDoubleClick={allowAdding ? onDoubleClick : undefined}
      />
  )), [allowAdding]);

  const CommandButton = React.useCallback(({ id, ...restProps }) => {
    if (id === 'deleteButton') {
      return <AppointmentForm.CommandButton id={id} {...restProps} disabled={!allowDeleting} />;
    }
    return <AppointmentForm.CommandButton id={id} {...restProps} />;
  }, [allowDeleting]);

  const allowDrag = React.useCallback(
      () => allowDragging && allowUpdating,
      [allowDragging, allowUpdating],
  );
  const allowResize = React.useCallback(
      () => allowResizing && allowUpdating,
      [allowResizing, allowUpdating],
  );

  return (
      <React.Fragment>
        <ServiceSelection>
          <SelectionContainer>
            <SelectionLabel>
              Serviciu medical
            </SelectionLabel>
            <SelectBoxContainer>
              <select>
                <option>Consult</option>
                <option>Consult ORL</option>
              </select>
            </SelectBoxContainer>
          </SelectionContainer>
          <SelectionContainer>
            <SelectionLabel>
              Doctor
            </SelectionLabel>
            <SelectBoxContainer>
              <select>
                <option>doctor 1</option>
                <option>doctor 2</option>
              </select>
            </SelectBoxContainer>
          </SelectionContainer>
        </ServiceSelection>
        <Paper>
          <Scheduler
              data={data}
              height={600}
          >
            <ViewState
                currentDate={currentDate}
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

            <Appointments />

            <AppointmentTooltip
                showOpenButton
                showDeleteButton={allowDeleting}
            />
            <AppointmentForm
                commandButtonComponent={CommandButton}
                readOnly={isAppointmentBeingCreated ? false : !allowUpdating}
            />
            <DragDropProvider
                allowDrag={allowDrag}
                allowResize={allowResize}
            />
          </Scheduler>
        </Paper>
      </React.Fragment>
  );
};

const ServiceSelection = styled.div`
  padding-bottom: 15px;
  display: flex;
`

const SelectionLabel = styled.div`
  padding-right: 20px;
`

const SelectionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  padding-right: 40px;
`

const SelectBoxContainer = styled.div`
`

export default PatientCreateAppointments;
