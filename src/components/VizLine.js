import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

const VizLine = (props) => {
  return (
    <div>
      <LineChart width={500} height={500} data={props.data}>
        <Line
          type='monotone'
          dataKey='num_of_babies_born'
          stroke='#8884d8'
        ></Line>
        <CartesianGrid stroke='#ccc' strokeDasharray='5 5' />
        <XAxis dataKey='month'></XAxis>
        <YAxis />
        <Tooltip />
        <Legend/>
      </LineChart>
    </div>
  );
};

export default VizLine;
