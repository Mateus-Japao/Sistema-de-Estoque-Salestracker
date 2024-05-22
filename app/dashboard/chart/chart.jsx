"use client"
import styles from "./chart.module.css";
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



 export const Chart = () => {

  const data = [
  {
    name: "Page A",
    Sell: 4000,
    Buy: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    Sell: 3000,
    Buy: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    Sell: 2000,
    Buy: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    Sell: 2780,
    Buy: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    Sell: 1890,
    Buy: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    Sell: 2390,
    Buy: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    Sell: 3490,
    Buy: 4300,
    amt: 2100,
  },
];
  return (
    <div className={styles.container}>
      <h2 className={styles.title}> Weekly Recap</h2>

      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="Buy"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="Sell" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
