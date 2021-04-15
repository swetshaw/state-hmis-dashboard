import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Title from './components/Title';
import Dropdown from './components/Dropdown';
import Visualization from './components/Visualization';
import './App.css';

const states = ['Jharkhand', 'Maharashtra', 'Gujarat'];
const parameters = ['Parameter 1', 'Parameter 2', 'Parameter 3'];
const years = ['2017-2018', '2018-2019', '2019-2020', '2020-2021'];
const vizs = ['Map', 'Pie', 'Line', 'Bar'];

const data = [
  {month: "Jan", num_of_babies_born:200},
  {month: "Feb", num_of_babies_born:400},
  {month: "Mar", num_of_babies_born:250}
]
  
const App = (props) => {
  const [state, setState] = useState("Jharkhand");
  const [parameter, setParameter] = useState("Parameter 1");
  const [year, setYear] = useState('2017-18');
  const [viz, setViz] = useState('Line');

  const handleStateClick = (event) => {
    // console.log("event", event.target.value);
    setState(event.target.value);
  };
  const handleParameterClick = (event) => {
    setParameter(event.target.value);
  };

  const handleYearClick = (event) => {
    setYear(event.target.value);
  };

  const handleVizClick = (event) => {
    setViz(event.target.value);
  };

  return (
    <div className='container-fluid'>
      <div className='row bg-info p-2'>
        <Title title='Health Management Information System' />
      </div>
      <div className='row bg-secondary p-2 d-flex justify-content-around'>
        <Dropdown
          list={states}
          header={'states'}
          handleClick={handleStateClick}
        />

        <Dropdown
          list={parameters}
          header={'parameters'}
          handleClick={handleParameterClick}
        />
        <Dropdown
          list={vizs}
          header={'vizualization'}
          handleClick={handleVizClick}
        />

        <Dropdown list={years} header={'years'} handleClick={handleYearClick} />
      </div>

      <div className='row text-center pt-4'>
        <div className='col-md-8 mx-auto'>
          <Visualization viz={viz} data={data} />
        </div>
        <div className='col-md-4 '></div>
      </div>
    </div>
  );
};

export default App;
