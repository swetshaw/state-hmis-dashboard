import React from 'react';
import VizBar from './VizBar';
import VizLine from './VizLine';
import VizMap from './VizMap';
import VizPie from './VizPie';

const Visualization = (props) => {
  if (props.viz === 'Line') {
    return <VizLine data={props.data} />;
  }
  if (props.viz === 'Pie') {
    return <VizPie data={props.data} />;
  }
  if (props.viz === 'Bar') {
    return <VizBar data={props.data} />;
  }
  if (props.viz === 'Map') {
    return <VizMap data={props.data} />;
  }
};
export default Visualization;
