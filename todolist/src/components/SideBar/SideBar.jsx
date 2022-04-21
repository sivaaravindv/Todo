import React, { useState } from 'react';
import Contact from '../Contact/Contact';
import DashboardIcon from '@material-ui/icons/Dashboard';
import LaptopWindowsIcon from '@material-ui/icons/LaptopWindows';
import TextsmsIcon from '@material-ui/icons/Textsms';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import PeopleIcon from '@material-ui/icons/People';
import AddIcon from '@material-ui/icons/Add';

import pic1 from '../../images/guy3.png';
import pic2 from '../../images/guy4.png';
import pic3 from '../../images/guy5.png';
import './SideBar.css';

export default function SideBar() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const toggleContact = () => {
    setIsChatOpen(!isChatOpen);
  };
  return (
    <nav>
      <div className="container">
        <div className="sidebarTop">
          <div className="big">
            <div className="circle">
              <div className="small"></div>
              <div className="small"></div>
              <div className="small"></div>
              <div className="small"></div>
            </div>
          </div>
          <div className="option firstOption">
            <DashboardIcon />
          </div>
          <div className="option">
            <LaptopWindowsIcon />
            <span className="badge"></span>
          </div>
          <div className="option lastOpt" onClick={toggleContact}>
            <TextsmsIcon />
            <span className="badge"></span>
          </div>
          {isChatOpen && <Contact open={isChatOpen} onClose={toggleContact} />}
        </div>
        <div className="sidebarMid">
          <div className="option firstOption">
            <VerifiedUserIcon />
          </div>
          <div className="option">
            <PermContactCalendarIcon />
          </div>
          <div className="option lastOpt">
            <PeopleIcon />
          </div>
        </div>
        <div className="sidebarBottom">
          <div className="avatar">
            <img src={pic1} alt="" />
          </div>
          <div className="avatar">
            <img src={pic2} alt="" />
          </div>
          <div className="avatar">
            <img src={pic3} alt="" />
          </div>
          <div className="addAvatar">
            <AddIcon />
          </div>
        </div>
      </div>
    </nav>
  );
}
