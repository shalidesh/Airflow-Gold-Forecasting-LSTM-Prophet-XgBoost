import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';
import axios from "axios";
import ForecastTable from './ForecastTable';

function ProphetPlot(graphdata) {



  useEffect(() => {

    console.log(graphdata);


    
  }, [graphdata]);

  const plotData = [
    {
      x: graphdata.map(data => data.ds),
      y: graphdata.map(data => data.yhat_smooth),
      type: 'scatter',
      mode: 'lines',
      name: 'Forecast',
      line: {color: 'blue'},
    },
    {
      x: graphdata.map(data => data.ds),
      y: graphdata.map(data => data.yhat_lower_smooth),
      type: 'scatter',
      mode: 'lines',
      name: 'Lower Bound',
      line: {color: 'red',dash: 'dot'},
    },
    {
      x: graphdata.map(data => data.ds),
      y: graphdata.map(data => data.yhat_upper_smooth),
      type: 'scatter',
      mode: 'lines',
      name: 'Upper Bound',
      line: {color: 'green',dash: 'dot'},
    },
  ];

  return (

      <div>
        <h1 className='mt-5 mb-3'>Rs 1,650,000 (2024-May-29)</h1>
        <p>Upper Bound - Rs 1,750,000</p>
        <p>Lower Bound - Rs 1,550,000</p>
        <Plot
          data={plotData}
          layout={ {width: 1000, height: 600, title: 'Gold Price Forecast'} }
        />
        <ForecastTable data={graphdata} />
      </div>
   
  )
}

export default ProphetPlot;
