import React from 'react';
import './ProgressBar.css';

export default function ProgressBar() {
  return (
    <div className="progress">
      <div className="semiDonut">
        <h3>0%</h3>
      </div>
      <h6>
        <span>
          <i className="fas fa-chart-line"></i>18%{' '}
        </span>
        Faster
      </h6>
      <p>0% of the parameters are initiated in the model</p>
      <div className="stats">
        <div className="idam">
          <span>&nbsp;</span>
          <h6>Active</h6>
        </div>
        <div className="valam">
          <span>&nbsp;</span>
          <h6>Inactive</h6>
        </div>
      </div>
    </div>
  );
}
