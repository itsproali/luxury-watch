import React, { useEffect, useState } from "react";
import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
  LineChart,
  Legend,
  Line,
  BarChart,
  Bar,
  ResponsiveContainer,
} from "recharts";

const Dashboard = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [data]);

  return (
    <div>
      <h1 className="text-4xl text-pink-600 font-bold text-center my-4">
        Monthly Analytics
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 mx-3 md:mx-16 py-4 gap-4">
        {/* Line Chart */}
        <div>
          <h1 className="text-center text-pink-400 font-bold text-2xl my-4">
            Month Wise Sell
          </h1>
          <ResponsiveContainer width="90%" height={250}>
            <LineChart data={data} className="mx-auto">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="sell" stroke="#DB2777" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Area Chart */}
        <div>
          <h1 className="text-center text-pink-400 font-bold text-2xl my-4">
            Investment vs Revenue
          </h1>
          <ResponsiveContainer width="90%" height={250}>
            <AreaChart data={data} className="mx-auto">
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#DB2777" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#DB2777" stopOpacity={0.4} />
                </linearGradient>
              </defs>
              <XAxis dataKey="month" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Legend />
              <Area
                type="monotone"
                dataKey="investment"
                stroke="#8884d8"
                fillOpacity={1}
                fill="url(#colorUv)"
              />
              <Area
                type="monotone"
                dataKey="revenue"
                stroke="#DB2777"
                fillOpacity={1}
                fill="url(#colorPv)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart */}
        <div>
          <h1 className="text-center text-pink-400 font-bold text-2xl my-4">
            Investment vs Revenue
          </h1>
          <ResponsiveContainer width="90%" height={250}>
            <BarChart data={data} className="mx-auto">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="investment" fill="#8884d8" />
              <Bar dataKey="revenue" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
