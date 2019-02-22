import React from 'react';
import {
     AreaChart,
     ResponsiveContainer,
     Area,
     XAxis,
     YAxis,
     CartesianGrid,
     Tooltip,
     Legend
     }
     from 'recharts';
import styled from 'styled-components';
const MyAreaChart = () => {

    const data = [
        { date: 'Jan', y: 1000, Income: 5000, Expenses: 2000 },
        { date: 'Feb', y: 1000, Income: 6000, Expenses: 3000 },
        { date: 'Mar', y: 2000, Income: 4500, Expenses: 4000 },
        { date: 'Apr', y: 3000, Income: 7800, Expenses: 6000 },
        { date: 'May', y: 4000, Income: 9300, Expenses: 4500 },
        { date: 'Jun', y: 5000, Income: 6700, Expenses: 7500 },
        { date: 'Jul', y: 5000, Income: 5200, Expenses: 6000 },
        { date: 'Aug', y: 6000, Income: 5900, Expenses: 4000 },
        { date: 'Sep', y: 7000, Income: 8800, Expenses: 6000 },
        { date: 'Oct', y: 8000, Income: 9100, Expenses: 5000 },
        { date: 'Nov', y: 9000, Income: 5000, Expenses: 5000 },
        { date: 'Dec', y: 10000, Income: 4000, Expenses: 6000 }

    ];
    return(
        <ChartWrapper>
            <div className="chart-wrapper">
                <h6 className="header text-whitr">Income/Expense change stats - 1 year</h6>
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                            data={data}
                            margin={{top: 25, right: 25, left: 25, bottom: 25}}>

                        <XAxis
                            dataKey="date"
                            fontFamily="Open Sans"
                            fontSize="14"
                        />
                        <YAxis
                        dataKey="y"
                        fontSize="14"
                        />
                        <CartesianGrid
                            vertical={false}
                            stroke="#3a4149"
                        />
                        <Tooltip />
                        <Legend verticalAlign="top" height={36} />
                        <Area type="monotone" dataKey="Income" stroke="#20a8d8" fill='rgba(117, 207, 234, 0.6)' />
                        <Area type="monotone" dataKey="Expenses" stroke="#a80101" fill='#ff7a7a' />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </ChartWrapper>

    );
}

const ChartWrapper = styled.div`
margin-left: 2rem;
.chart-wrapper {
    width: 70rem;
    height: 25rem;
    background-color: #3a4149;
    border: 1px solid #000;
}
.header {
    text-align: center;
}
`;

export default MyAreaChart;