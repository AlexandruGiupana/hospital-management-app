export const MAXIMUM_CHARACTER_COUNT_FOR_SERVICE_NAME = 255;

const validateServiceName = (serviceName) => {
  if (serviceName.length === 0) {
    return false;
  }
  if (serviceName.length > MAXIMUM_CHARACTER_COUNT_FOR_SERVICE_NAME) {
    return false;
  }
}