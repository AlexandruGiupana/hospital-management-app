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

const Chart = () => {
  const data = [
    {
      name: "14.11",
      "numar consultatii": 20,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "15.11",
      "numar consultatii": 15,
      amt: 2210,
    },
    {
      name: "16.11",
      "numar consultatii": 22,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "17.11",
      "numar consultatii": 4,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "18.11",
      "numar consultatii": 25,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "19.11",
      "numar consultatii": 11,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "20.11",
      "numar consultatii": 6,
      pv: 4300,
      amt: 2100,
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
