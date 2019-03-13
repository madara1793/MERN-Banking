import React from "react";
import { PieChart, Pie, Legend, Cell } from "recharts";
import styled from "styled-components";

const data = [
  { name: "Salary", value: 600 },
  { name: "Freelancing", value: 100 },
  { name: "Passive income", value: 200 },
  { name: "Rental", value: 100 }
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.6;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="middle"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
const MyPieChart = () => {
  return (
    <ChartWrapper>
      <div className="chart-wrapper">
        <div className="header-wrapper">
          <h6 className="header text-white">Income Detail Summary</h6>
        </div>
        <PieChart width={500} height={500}>
          <Legend verticalAlign="top" height={40} iconType="rect" />
          <Pie
            data={data}
            cx={250}
            cy={140}
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={120}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </div>
    </ChartWrapper>
  );
};

const ChartWrapper = styled.div`
  margin-left: 2rem;
  .chart-wrapper {
    width: 33rem;
    height: 25rem;
    background-color: #3a4149;
    border: 1px solid #000;
  }
  .header-wrapper {
    background-color: #343b41;
    border-bottom: 1px solid #000;
  }
  .header {
    text-align: left;
    font-family: "Open Sans";
    padding: 1.3rem 1rem 1rem 1rem;
  }
`;

export default MyPieChart;
