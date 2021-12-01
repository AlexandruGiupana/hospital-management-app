const MAXIMUM_CHARACTER_COUNT_FOR_INFORMATION = 255;
const DATE_REGEX =
  "[2][0][2-9][0-9]-(0?[1-9]|1[012])-(0[1-9]|[12]\\d|3[01])T(?:(?:([01]?\\d|2[0-3]):)?([0-5]?\\d):)?([0-5]?\\d).[0-9][0-9][0-9]Z";
export const validate_information = (information) => {
  if (information === undefined) {
    return false;
  }
  information = information.trim();
  if (information === null) {
    return false;
  }
  if (information.length === 0) {
    return false;
  }
  if (information.length > MAXIMUM_CHARACTER_COUNT_FOR_INFORMATION) {
    return false;
  }
  return true;
};

export const validateDate = (date) => {
  date = date.trim();
  return date.match(DATE_REGEX);
};

export const checkDateOrder = (startDate, endDate) => {
  return startDate < endDate;
};
