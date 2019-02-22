import React from 'react'
import {Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend} from 'recharts';
import styled from 'styled-components';

const MyRadarChart = () => {
    const data = [
        {
          subject: 'Housing', A: 120, B: 110, fullMark: 100,
        },
        {
          subject: 'Transportation', A: 98, B: 130, fullMark: 100,
        },
        {
          subject: 'Food', A: 86, B: 130, fullMark: 100,
        },
        {
          subject: 'Debt Payments', A: 99, B: 100, fullMark: 100,
        },
        {
          subject: 'Savings', A: 85, B: 90, fullMark: 100,
        },
        {
          subject: 'Personal & Discretionary', A: 65, B: 85, fullMark: 100,
        },
      ];
  return (
    <ChartWrapper>
      <div className="chart-wrapper">
      <div className="header-wrapper">
          <h6 className="header text-white">Expenses detail summary</h6>
      </div>
      <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx={270} cy={190} outerRadius={100} width={100} height={150} data={data}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis />
                <Legend
                    verticalAlign="top"
                    horizontalAlign="left"
                    height={50}
                    width={200}
                    iconSize={20}
                    iconType="rect"
                />
                <Radar
                    name="Expenses"
                    dataKey="A"
                    stroke="#F6144D"
                    strokeWidth={3}
                    fill="#725e6c"
                    fillOpacity={0.7} />
            </RadarChart>
      </ResponsiveContainer>
      </div>
    </ChartWrapper>
  )
}

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
  font-family: 'Open Sans';
  padding: 1.3rem 1rem 1rem 1rem;

}
`;



export default MyRadarChart;