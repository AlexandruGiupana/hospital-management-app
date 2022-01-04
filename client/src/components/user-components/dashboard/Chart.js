import React from "react";
import styled from "styled-components";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Chart = ({
  yesterdayAppointmentsCount,
  yesterday,
  twoDaysAgoAppointmentsCount,
  twoDaysAgo,
  today,
  todayCount,
  tomorrowAgoAppointmentsCount,
  tomorrow,
  dayAfterTomorrow,
  dayAfterTomorrowAppointmentsCount,
}) => {
  const data = [
    {
      name: twoDaysAgo,
      "numar consultatii": twoDaysAgoAppointmentsCount,
      pv: 2400,
      amt: 2400,
    },
    {
      name: yesterday,
      "numar consultatii": yesterdayAppointmentsCount,
      amt: 2210,
    },
    {
      name: "azi, " + today,
      "numar consultatii": todayCount,
      pv: 9800,
      amt: 2290,
    },
    {
      name: tomorrow,
      "numar consultatii": tomorrowAgoAppointmentsCount,
      pv: 3908,
      amt: 2000,
    },
    {
      name: dayAfterTomorrow,
      "numar consultatii": dayAfterTomorrowAppointmentsCount,
      pv: 4800,
      amt: 2181,
    },
  ];
  return (
    <ChartContainer>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 5,
            left: -30,
            bottom: 2,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="numar consultatii"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};

const ChartContainer = styled.div`
  width: 100%;
  height: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 15px;
  background: white;
  @media (max-width: 1108px) {
    padding-left: 0;
    padding-right: 0;
  }
`;

export default Chart;
