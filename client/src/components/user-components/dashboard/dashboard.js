import React, { useEffect, useState } from "react";
import DashboardItem from "./dash-board-item";
import styled from "styled-components";
import Chart from "./Chart";
import { DOCTOR_ACCOUNT } from "../../../demo-data/account-types";
import {
  getAppointmentsOfDoctor,
  getAppointmentsOfDoctorFromDate,
} from "../../../services/user-services/appointments-services";
import { getUserData } from "../../../services/local-storage-services";
import {
  convertDatabaseDateFormat,
  convertDateToNormalFormatDate,
} from "../../../services/date-converters/date-converter";
import {
  getDayAfterTomorrowDate,
  getTomorrowDate,
  getTwoDaysAgoDate,
  getYesterdayDay,
} from "../../../services/date-converters/get-past-future-dates";

const Dashboard = ({ accountType }) => {
  const [appointments, setAppointments] = useState([]);
  const [remainingAppointments, setRemainingAppointments] = useState([]);
  const [finishedAppointment, setFinishedAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [today, setToday] = useState("");
  const [yesterday, setYesterday] = useState("");
  const [yesterdayAppointmentsCount, setYesterdayAppointmentsCount] =
    useState();
  const [twoDaysAgo, setTwoDaysAgo] = useState("");
  const [twoDaysAgoAppointmentsCount, setTwoDaysAgoAppointmentsCount] =
    useState();
  const [tomorrow, setTomorrow] = useState("");
  const [tomorrowAgoAppointmentsCount, setTomorrowAppointmentsCount] =
    useState();
  const [dayAfterTomorrow, setDayAfterTomorrow] = useState("");
  const [
    dayAfterTomorrowAppointmentsCount,
    setDayAfterTomorrowAppointmentsCount,
  ] = useState();

  useEffect(() => {
    const getAppointments = async () => {
      let today = new Date();
      const dd = String(today.getDate()).padStart(2, "0");
      const mm = String(today.getMonth() + 1).padStart(2, "0");
      const yyyy = today.getFullYear();
      const hh = today.getHours();
      const min = today.getMinutes();
      today = yyyy + "-" + mm + "-" + dd;
      setToday(today);

      let appointmentsFromDb = (
        await getAppointmentsOfDoctorFromDate(getUserData().data.user.id, today)
      ).data;

      let appointments = [];
      appointmentsFromDb.forEach((appointment) => {
        const date = convertDatabaseDateFormat(appointment);
        const object = { start_date: date };
        appointments.push(object);
      });

      let remAppointments = [];
      let finAppointments = [];
      appointments.forEach((appointment) => {
        const date = convertDateToNormalFormatDate(appointment?.start_date);
        if (new Date() <= date) {
          remAppointments.push(appointment);
        } else {
          finAppointments.push(appointment);
        }
      });

      setRemainingAppointments(remAppointments);
      setFinishedAppointments(finAppointments);
      setAppointments(appointments);

      const currentTimeStamp = new Date().getTime();
      const yesterdayDate = getYesterdayDay();
      let appointmentsCount = (
        await getAppointmentsOfDoctorFromDate(
          getUserData().data.user.id,
          yesterdayDate
        )
      ).data;
      setYesterdayAppointmentsCount(appointmentsCount.length);
      setYesterday(yesterdayDate);

      const twoDaysAgoDate = getTwoDaysAgoDate();
      appointmentsCount = (
        await getAppointmentsOfDoctorFromDate(
          getUserData().data.user.id,
          twoDaysAgoDate
        )
      ).data;
      setTwoDaysAgoAppointmentsCount(appointmentsCount.length);
      setTwoDaysAgo(twoDaysAgoDate);

      const tomorrowDate = getTomorrowDate();
      appointmentsCount = (
        await getAppointmentsOfDoctorFromDate(
          getUserData().data.user.id,
          tomorrowDate
        )
      ).data;
      setTomorrowAppointmentsCount(appointmentsCount.length);
      setTomorrow(tomorrowDate);

      const dayAfterTomorrowDate = getDayAfterTomorrowDate();
      appointmentsCount = (
        await getAppointmentsOfDoctorFromDate(
          getUserData().data.user.id,
          dayAfterTomorrowDate
        )
      ).data;
      setDayAfterTomorrowAppointmentsCount(appointmentsCount.length);
      setDayAfterTomorrow(dayAfterTomorrowDate);

      setLoading(false);
    };
    getAppointments();
  }, [
    yesterdayAppointmentsCount,
    yesterday,
    twoDaysAgo,
    twoDaysAgoAppointmentsCount,
    tomorrowAgoAppointmentsCount,
    tomorrow,
  ]);

  console.log(twoDaysAgo);

  if (loading) {
    <>Loading...</>;
  }
  return (
    <DashboardContainer>
      {accountType === DOCTOR_ACCOUNT && (
        <>
          <DashboardItemsContainer>
            <DashboardPairItems>
              <DashboardItem
                title="Programari astazi"
                value={appointments.length}
              />
              <DashboardItem
                title="Pacienti consultati astazi"
                value={finishedAppointment.length}
              />
            </DashboardPairItems>
            <DashboardPairItems>
              <DashboardItem
                title="Urmatoarea programare"
                value={
                  remainingAppointments[0]
                    ? remainingAppointments[0]?.start_date[11] +
                      remainingAppointments[0]?.start_date[12] +
                      remainingAppointments[0]?.start_date[13] +
                      remainingAppointments[0]?.start_date[14] +
                      remainingAppointments[0]?.start_date[15]
                    : "Gata pe azi"
                }
              />
              <DashboardItem
                title="Pacienti ramasi de consultat"
                value={appointments.length - finishedAppointment.length}
              />
            </DashboardPairItems>
          </DashboardItemsContainer>
          <Chart
            today={today}
            todayCount={appointments.length}
            yesterdayAppointmentsCount={yesterdayAppointmentsCount}
            yesterday={yesterday}
            twoDaysAgo={twoDaysAgo}
            twoDaysAgoAppointmentsCount={twoDaysAgoAppointmentsCount}
            tomorrow={tomorrow}
            tomorrowAgoAppointmentsCount={tomorrowAgoAppointmentsCount}
            dayAfterTomorrow={dayAfterTomorrow}
            dayAfterTomorrowAppointmentsCount={
              dayAfterTomorrowAppointmentsCount
            }
          />
        </>
      )}
    </DashboardContainer>
  );
};

const DashboardContainer = styled.div`
  padding-top: 15px;
`;

const DashboardItemsContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  @media (max-width: 1261px) {
    flex-direction: column;
  }
`;

const DashboardPairItems = styled.div`
  display: flex;
  width: 50%;
  gap: 20px;
  @media (max-width: 1261px) {
    width: 100%;
  }
  @media (max-width: 912px) {
    flex-direction: column;
  }
`;

export default Dashboard;
