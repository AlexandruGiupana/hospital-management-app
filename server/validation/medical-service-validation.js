export const MAXIMUM_CHARACTER_COUNT_FOR_SERVICE_NAME = 255;

export const validateServiceName = (serviceName) => {
  if (serviceName === undefined) {
    return false;
  }
  serviceName = serviceName.trim();
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
