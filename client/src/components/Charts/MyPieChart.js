import React from 'react';
import {PieChart, Pie, Sector, Cell} from 'recharts';
import styled from 'styled-components';

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
    cx, cy, midAngle, innerRadius, outerRadius, percent, index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
const MyPieChart = () => {
  return (
      <ChartWrapper>
        <div className="chart-wrapper">
            <PieChart width={500} height={500}>
                    <Pie
                    data={data}
                    cx={200}
                    cy={200}
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    >
                    {
                        data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                    }
                    </Pie>
            </PieChart>
        </div>
      </ChartWrapper>

  )
}

const ChartWrapper = styled.div`
margin-left: 2rem;
.chart-wrapper {
    width: 20rem;
    height: 25rem;
    background-color: #3a4149;
    border: 1px solid #000;
}
`;



export default MyPieChart;