import React from 'react';
import {
  BarChart,
  Bar,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const VizBar = (props) => {
  return (
    <div>
      <BarChart width={500} height={500} data={props.data}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='month' />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey='num_of_babies_born' />
      </BarChart>
    </div>
  );
};

export default VizBar;
