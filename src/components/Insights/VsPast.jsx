import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

const dataPastPeriod = [
  { name: "This week", consultations: 20, ordersClosed: 17 },
  { name: "Last week", consultations: 15, ordersClosed: 13 },
];

const VsPast = () => (
  <div className="w-full h-[310px] mt-5 flex justify-center">
    <ResponsiveContainer width="100%" height="100%" className="ml-[-50px]">
      <BarChart data={dataPastPeriod} barCategoryGap={20} barGap={10}>
        <CartesianGrid strokeDasharray="3 3" horizontal vertical={false} />
        <XAxis
          dataKey="name"
          stroke="none"
          tick={({ x, y, payload }) => (
            <text
              x={x}
              y={y + 20}
              textAnchor="middle"
              fill="#667085"
              className="text-[10px] md:text-[11px]"
            >
              {payload.value}
            </text>
          )}
        />
        <YAxis
          stroke="none"
          tick={({ x, y, payload }) => (
            <text
              x={x - 10}
              y={y + 3}
              textAnchor="middle"
              fill="#667085"
              className="text-[10px] md:text-[11px]"
            >
              {payload.value}
            </text>
          )}
        />
        <Tooltip />
        <Bar dataKey="consultations" fill="#a8edea" name="Consultations" barSize="20%" radius={[5, 5, 0, 0]} />
        <Bar dataKey="ordersClosed" fill="#264653" name="Orders Closed" barSize="20%" radius={[5, 5, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default VsPast;
