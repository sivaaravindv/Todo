import React from 'react';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import BarChart from './BarChart';
import { GraphData } from './Data';
import { useState } from 'react';
import ProgressBar from './ProgressBar';
import Chart from 'chart.js/auto';
import './Graph.css';

export default function Graph() {
  const [userData, setUserData] = useState({
    labels: GraphData.map((data) => data.month),
    datasets: [
      {
        label: 'Monthly Earnings',
        data: GraphData.map((data) => data.earning),
        backgroundColor: [
          'rgb(216, 216, 216)',
          'rgb(216, 216, 216)',
          'rgb(216, 216, 216)',
          'rgb(216, 216, 216)',
          'rgb(252, 108, 45)',
          'rgba(0, 7, 179, 1)',
          'rgb(216, 216, 216)',
        ],
        borderColor: [
          'rgb(216, 216, 216)',
          'rgb(216, 216, 216)',
          'rgb(216, 216, 216)',
          'rgb(216, 216, 216)',
          'rgb(252, 108, 45)',
          'rgba(0, 7, 179, 1)',
          'rgb(216, 216, 216)',
        ],
        borderWidth: 1,
        categoryPercentage: 1.0,
        barPercentage: 1.0,
      },
    ],
  });

  return (
    <div className="graph">
      <div className="graphTop">
        <h2 className="graphTitle">Your Earnings</h2>
        <div className="datepicker">
          <div className="le">
            <ArrowBackIosIcon />
          </div>
          <div className="dates">
            <h3>December,2020</h3>
          </div>
          <div className="ri">
            <ArrowForwardIosIcon />
          </div>
        </div>
      </div>

      <div className="graphMid">
        <ProgressBar />
        <BarChart chartData={userData} />
      </div>
    </div>
  );
}
