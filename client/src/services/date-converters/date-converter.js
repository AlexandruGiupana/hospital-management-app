export const convertDateToNormalFormatString = (date) => {
  const year = date[0] + date[1] + date[2] + date[3];
  const month = date[5] + date[6];
  const day = date[8] + date[9];
  const hours = date[11] + date[12];
  const minutes = date[14] + date[15];
  const seconds = date[17] + date[18];
  return (
    day + "/" + month + "/" + year + " " + hours + ":" + minutes + ":" + seconds
  );
};

export const convertDateToNormalFormatDate = (date) => {
  const year = date[0] + date[1] + date[2] + date[3];
  const month = date[5] + date[6];
  const day = date[8] + date[9];
  const hours = date[11] + date[12];
  const minutes = date[14] + date[15];
  const seconds = date[17] + date[18];
  return new Date(year, month - 1, day, hours, minutes, seconds);
};

export const convertDatabaseDateFormat = (appointment) => {
  const convertedDate =
    appointment?.start_date[0] +
    appointment?.start_date[1] +
    appointment?.start_date[2] +
    appointment?.start_date[3] +
    appointment?.start_date[4] +
    appointment?.start_date[5] +
    appointment?.start_date[6] +
    appointment?.start_date[7] +
    appointment?.start_date[8] +
    appointment?.start_date[9] +
    appointment?.start_date[10] +
    appointment?.start_date[11] +
    (parseInt(appointment?.start_date[12]) + 2) +
    appointment?.start_date[13] +
    appointment?.start_date[14] +
    appointment?.start_date[15] +
    appointment?.start_date[16] +
    appointment?.start_date[17] +
    appointment?.start_date[18];
  return convertedDate;
};
