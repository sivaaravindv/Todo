import React from 'react';
import img1 from '../../images/logo-3d-png-9047.png';
import img2 from '../../images/logo-3d-png-9054 (1).png';
import img3 from '../../images/kisspng-logo-barricade-tape.png';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import CloseIcon from '@material-ui/icons/Close';
import './Sugg.css';

export default function Sugg({ setOpenSugg }) {
  return (
    <div className="searchSug" id="mySugg">
      <div className="wizard">
        <div
          className="closeButton"
          onClick={() => {
            setOpenSugg(false);
          }}
        >
          <CloseIcon />
        </div>
        <input type="text" placeholder="Type Your Keywords" />
      </div>
      <ul className="sugglist">
        <h5>Recent Searches</h5>
        <li>
          <span className="imgspan">
            <img src={img1} alt="" />
          </span>
          <span className="titlespan">
            <h4>Earning by items with...</h4>{' '}
          </span>
          <span className="iconspan">
            <ArrowForwardIosIcon />
          </span>
        </li>
        <li>
          <span className="imgspan">
            <img src={img2} alt="" />
          </span>
          <span className="titlespan">
            <h4>This months statement</h4>{' '}
          </span>
          <span className="iconspan">
            <ArrowForwardIosIcon />
          </span>
        </li>
        <li>
          <span className="imgspan">
            <img src={img3} alt="" />
          </span>
          <span className="titlespan">
            <h4>How many sales I got...</h4>{' '}
          </span>
          <span className="iconspan">
            <ArrowForwardIosIcon />
          </span>
        </li>
      </ul>
      <div className="advance">Advanced Search</div>
    </div>
  );
}
