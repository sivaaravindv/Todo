import React from 'react';
import Chart from 'chart.js/auto';
import './BarChart.css';
import { Bar } from 'react-chartjs-2';

export default function BarChart({ chartData }) {
  return (
    <div className="barChart">
      {' '}
      <Bar data={chartData} />
    </div>
  );
}
