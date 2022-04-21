import React from 'react';
import './Projects.css';
export default function Projects() {
  return (
    <div className="project" onload="checkEmpty()">
      <h2 className="project-title">Your Projects</h2>
      <ul className="containor">
        <li className="draggable" draggable="true" id="drag1">
          <div className="timer">
            <p>3:30 PM</p>
            <h4>30 minutes</h4>
          </div>
          <div className="sept"></div>
          <div className="logor">
            <img
              src="./img/kisspng-logo-barricade-tape-abstract-religion-abstract-logo-5af116ce2a1c85.2622598215257494541725.png"
              alt=""
            />
          </div>
          <div className="location">
            <p>Productivity App</p>
            <h4>India</h4>
          </div>
          <div className="dating">
            <p>September 10th</p>
            <h5>confirmed</h5>
          </div>
          <div className="status completed">Completed</div>
          <div className="finisher">
            <i className="far fa-sticky-note"></i>
          </div>

          <div className="closer">
            <i className="fas fa-times "></i>
          </div>
          <div className="out out01" id="out01">
            <i className="fa-solid fa-trash-can "></i>
          </div>
        </li>
        <li className="draggable" draggable="true" id="drag2">
          <div className="timer">
            <p>4:30 PM</p>
            <h4>30 minutes</h4>
          </div>
          <div className="sept"></div>
          <div className="logor">
            <img
              src="./img/kisspng-abstract-art-clip-art-religion-abstract-logo-5af116cd63bc80.7666994815257494534085.png"
              alt=""
            />
          </div>
          <div className="location">
            <p>Trading App</p>
            <h4>Australia</h4>
          </div>
          <div className="dating">
            <p>September 12th</p>
            <h5>confirmed</h5>
          </div>
          <div className="status pending">In Progress</div>
          <div className="finisher">
            <i className="far fa-sticky-note"></i>
          </div>

          <div className="closer">
            <i className="fas fa-times "></i>
          </div>
          <div className="out out02">
            <i className="fa-solid fa-trash-can "></i>
          </div>
        </li>
        <li className="draggable" draggable="true" id="drag3">
          <div className="timer">
            <p>6:00 PM</p>
            <h4>60 minutes</h4>
          </div>
          <div className="sept"></div>
          <div className="logor">
            <img
              src="./img/kisspng-tennyson-knolls-elementary-school-sherrelwood-elem-5b127bde5c9738.7598457515279380143793.png"
              alt=""
            />
          </div>
          <div className="location">
            <p>Healthcare App</p>
            <h4>Singapore</h4>
          </div>
          <div className="dating">
            <p>September 14th</p>
            <h5>confirmed</h5>
          </div>
          <div className="status completed">Completed</div>
          <div className="finisher">
            <i className="far fa-sticky-note"></i>
          </div>

          <div className="closer">
            <i className="fas fa-times "></i>
          </div>
          <div className="out out03">
            <i className="fa-solid fa-trash-can "></i>
          </div>
        </li>
        <li className="draggable" draggable="true" id="drag4">
          <div className="timer">
            <p>1:30 PM</p>
            <h4>45 minutes</h4>
          </div>
          <div className="sept"></div>
          <div className="logor">
            <img
              src="./img/kisspng-logo-barricade-tape-abstract-religion-abstract-logo-5af116ce2a1c85.2622598215257494541725.png"
              alt=""
            />
          </div>
          <div className="location">
            <p>Dating App</p>
            <h4>USA</h4>
          </div>
          <div className="dating">
            <p>September 16th</p>
            <h5>confirmed</h5>
          </div>
          <div className="status pending">In Progress</div>
          <div className="finisher">
            <i className="far fa-sticky-note"></i>
          </div>

          <div className="closer">
            <i className="fas fa-times "></i>
          </div>
          <div className="out out04">
            <i className="fa-solid fa-trash-can "></i>
          </div>
        </li>
      </ul>

      <div className="empty" id="empty">
        <h1>No project scheduled</h1>
      </div>
    </div>
  );
}
