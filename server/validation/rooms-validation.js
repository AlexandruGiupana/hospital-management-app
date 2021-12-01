export const validateRoomType = (typeField) => {
  if (typeField === undefined) {
    return false;
  }
  if (typeField === null) {
    return false;
  }
  return true;
};
