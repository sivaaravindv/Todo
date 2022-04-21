import React from 'react';
import ToolBar from '../ToolBar/ToolBar';
import Projects from '../Projects/Projects';
import Graph from '../Graph/Graph';
import Freelancer from '../Freelancer/Freelancer';

import './Main.css';

export default function Main() {
  return (
    <div className="main">
      <ToolBar />
      <Graph />
      <Freelancer />
      <Projects />
    </div>
  );
}
