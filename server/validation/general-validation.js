export const validateNumberField = (repartitionField) => {
  if(repartitionField === null) {
    return false;
  }
  if(repartitionField === undefined) {
    return false;
  }
  if(isNaN(repartitionField)) {
    return false;
  }
  return true;
}
