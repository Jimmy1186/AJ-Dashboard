import React from "react";

import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { trpc } from "../../utils/trpc";
import Titles from "../layout/MainSide";


function Analysis() {
  const {data:payload} = trpc.useQuery(["findAllProject"])

  return (
    <>
      <div className="card bg-base-100 overflow-visible shadow-xl">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={payload}
          margin={{
            top: 20,
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
          <Bar dataKey="cost" stackId="a" fill="#d8bd84" />
          <Bar dataKey="price" stackId="a" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
      </div>
    </>
  );
}

export default Analysis;
