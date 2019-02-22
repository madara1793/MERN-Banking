import React from 'react'
import {Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer} from 'recharts';
import styled from 'styled-components';

const MyRadarChart = () => {
    const data = [
        {
          subject: 'Math', A: 120, B: 110, fullMark: 150,
        },
        {
          subject: 'Chinese', A: 98, B: 130, fullMark: 150,
        },
        {
          subject: 'English', A: 86, B: 130, fullMark: 150,
        },
        {
          subject: 'Geography', A: 99, B: 100, fullMark: 150,
        },
        {
          subject: 'Physics', A: 85, B: 90, fullMark: 150,
        },
        {
          subject: 'History', A: 65, B: 85, fullMark: 150,
        },
      ];
  return (
    <ChartWrapper>
      <div className="chart-wrapper">
      <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx={300} cy={250} outerRadius={150} width={300} height={250} data={data}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis />
                <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
            </RadarChart>
      </ResponsiveContainer>
      </div>
    </ChartWrapper>
  )
}

const ChartWrapper = styled.div`
margin-left: 2rem;
.chart-wrapper {
    width: 30rem;
    height: 25rem;
    background-color: #3a4149;
    border: 1px solid #000;
}
`;



export default MyRadarChart;