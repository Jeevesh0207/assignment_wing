import React from "react";
import {
  Line,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Label,
  ResponsiveContainer,
  CartesianGrid,
  ComposedChart,
} from "recharts";

const dataConsultations = [
  { day: "Mon", incoming: 30, answered: 20 },
  { day: "Tue", incoming: 32, answered: 23 },
  { day: "Wed", incoming: 45, answered: 30 },
  { day: "Thu", incoming: 50, answered: 35 },
  { day: "Fri", incoming: 40, answered: 28 },
  { day: "Sat", incoming: 42, answered: 30 },
  { day: "Sun", incoming: 50, answered: 33 },
];

const dataExpertsOnline = [
  { day: "Mon", expertsOnline: 12 },
  { day: "Tue", expertsOnline: 13 },
  { day: "Wed", expertsOnline: 15 },
  { day: "Thu", expertsOnline: 20 },
  { day: "Fri", expertsOnline: 14 },
  { day: "Sat", expertsOnline: 12 },
  { day: "Sun", expertsOnline: 13 },
];

const axisTickStyle = {
  fill: "#667085",
  fontSize: "10px",
  mdFontSize: "13px",
};

const ConsulationChart = () => (
  <div className="w-full overflow-scroll no-scrollbar">
    <div className="w-full h-[310px] min-w-[450px] mt-5">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={dataConsultations}>
          <CartesianGrid strokeDasharray="3 3" horizontal vertical={false} />
          <XAxis
            dataKey="day"
            stroke="none"
            tick={({ x, y, payload }) => (
              <text
                x={x}
                y={y + 20}
                textAnchor="middle"
                style={axisTickStyle}
                className="text-[10px] md:text-[13px]"
              >
                {payload.value}
              </text>
            )}
          />
          <YAxis
            yAxisId="left"
            domain={[10, 60]}
            stroke="none"
            tickCount={6}
            tick={({ x, y, payload }) => (
              <text
                x={x - 10}
                y={y + 3}
                textAnchor="middle"
                style={axisTickStyle}
              >
                {payload.value}
              </text>
            )}
          >
            <Label
              value="Consultations"
              angle={-90}
              position="insideLeft"
              style={{
                textAnchor: "middle",
                fill: "#C4C4C4",
                fontSize: 11,
                textTransform: "uppercase",
                fontWeight: "500",
              }}
            />
          </YAxis>
          <YAxis
            yAxisId="right"
            orientation="right"
            domain={[10, 20]}
            stroke="none"
            tickCount={6}
            tick={({ x, y, payload }) => (
              <text
                x={x + 10}
                y={y + 3}
                textAnchor="middle"
                style={axisTickStyle}
              >
                {payload.value}
              </text>
            )}
          >
            <Label
              value="Experts Online"
              angle={-90}
              position="insideRight"
              style={{
                textAnchor: "middle",
                fill: "#C4C4C4",
                fontSize: 11,
                textTransform: "uppercase",
                fontWeight: "500",
              }}
            />
          </YAxis>
          <Tooltip />
          <Bar
            yAxisId="right"
            dataKey="expertsOnline"
            fill="#FFE587"
            name="Experts Online"
            barSize="10%"
            radius={[5, 5, 0, 0]}
            data={dataExpertsOnline}
          />
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="incoming"
            stroke="#8A94A6"
            strokeDasharray="5 5"
            dot={false}
            strokeWidth={2}
            name="Incoming"
          />
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="answered"
            stroke="#15B79F"
            strokeWidth={2}
            dot={false}
            name="Answered"
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  </div>
);

export default ConsulationChart;
