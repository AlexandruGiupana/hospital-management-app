export const getYesterdayDay = () => {
  const currentTimeStamp = new Date().getTime();
  const yesterdayTimeStamp = currentTimeStamp - 24 * 60 * 60 * 1000;
  let yesterdayDate = new Date(yesterdayTimeStamp);
  yesterdayDate =
    yesterdayDate.getFullYear() +
    "-" +
    String(yesterdayDate.getMonth() + 1).padStart(2, "0") +
    "-" +
    String(yesterdayDate.getDate()).padStart(2, "0");
  return yesterdayDate;
};

export const getTwoDaysAgoDate = () => {
  const currentTimeStamp = new Date().getTime();
  const twoDaysAgoTimeStamp = currentTimeStamp - 24 * 2 * 60 * 60 * 1000;
  let twoDaysAgo = new Date(twoDaysAgoTimeStamp);
  twoDaysAgo =
    twoDaysAgo.getFullYear() +
    "-" +
    String(twoDaysAgo.getMonth() + 1).padStart(2, "0") +
    "-" +
    String(twoDaysAgo.getDate()).padStart(2, "0");
  return twoDaysAgo;
};

export const getTomorrowDate = () => {
  const currentTimeStamp = new Date().getTime();
  const tomorrowTimeStamp = currentTimeStamp + 24 * 60 * 60 * 1000;
  let tomorrowDate = new Date(tomorrowTimeStamp);
  tomorrowDate =
    tomorrowDate.getFullYear() +
    "-" +
    String(tomorrowDate.getMonth() + 1).padStart(2, "0") +
    "-" +
    String(tomorrowDate.getDate()).padStart(2, "0");
  return tomorrowDate;
};

export const getDayAfterTomorrowDate = () => {
  const currentTimeStamp = new Date().getTime();
  const dayAfterTomorrowTimeStamp = currentTimeStamp + 2 * 24 * 60 * 60 * 1000;
  let dayAfterTomorrowDate = new Date(dayAfterTomorrowTimeStamp);
  dayAfterTomorrowDate =
    dayAfterTomorrowDate.getFullYear() +
    "-" +
    String(dayAfterTomorrowDate.getMonth() + 1).padStart(2, "0") +
    "-" +
    String(dayAfterTomorrowDate.getDate()).padStart(2, "0");
  return dayAfterTomorrowDate;
};
