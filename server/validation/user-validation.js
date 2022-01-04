export const MAXIMUM_CHARACTER_COUNT_FOR_NAME = 255;
const nameRegex = new RegExp("[A-Za-z]+$");
const numberRegex = new RegExp("[0-9]+$");
const postalCodeRegex = new RegExp("[A-Za-z0-9]+$");
const emailRegex = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

export const validateName = (nameField) => {
  if (nameField === undefined) {
    return false;
  }
  if (nameField === null) {
    return false;
  }
  if (nameField.length > MAXIMUM_CHARACTER_COUNT_FOR_NAME) {
    return false;
  }
  if (!nameRegex.test(nameField)) {
    return false;
  }
  return true;
};

export const validateCNP = (cnp) => {
  if (!numberRegex.test(cnp)) {
    return false;
  }
  if (cnp.length !== 13) {
    return false;
  }
  return true;
};

export const validateEmail = (email) => {
  if (!emailRegex.test(email)) {
    return false;
  }
  return true;
};

export const validatePhoneNumber = (phone_number) => {
  if (!numberRegex.test(phone_number)) {
    return false;
  }
  if (phone_number.length < 4 || phone_number.length > 12) {
    return false;
  }
  return true;
};

export const validatePostalCode = (postal_code) => {
  if (!postalCodeRegex.test(postal_code)) {
    return false;
  }
  if (postal_code.length > MAXIMUM_CHARACTER_COUNT_FOR_NAME) {
    return false;
  }
  return true;
};
