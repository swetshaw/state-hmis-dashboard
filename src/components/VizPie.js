import React from 'react';
import { Pie, PieChart, Tooltip } from 'recharts';

const VizPie = (props) => {
  return (
    <div>
      <h2>Displaying Pie Chart</h2>
      <PieChart width={600} height={400}>
        <Pie
          dataKey='num_of_babies_born'
          isAnimationActive={true}
          data={props.data}
          
          outerRadius={100}
          fill='#8884d8'
          label
        />
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default VizPie;
