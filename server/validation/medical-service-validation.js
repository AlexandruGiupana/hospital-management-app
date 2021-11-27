export const MAXIMUM_CHARACTER_COUNT_FOR_SERVICE_NAME = 255;

export const validateServiceName = (serviceName) => {
  serviceName = serviceName.trim();
  if (serviceName === undefined) {
    return false;
  }
  if (serviceName === null) {
    return false;
  }
  if (serviceName.length === 0) {
    return false;
  }
  if (serviceName.length > MAXIMUM_CHARACTER_COUNT_FOR_SERVICE_NAME) {
    return false;
  }
  return true;
};
