import React, { useState, useRef, useEffect, Children } from 'react';
import Modal from './Modal';

import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import { useAuthValue } from '../../pages/AuthContext';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import pic2 from '../../images/guy4.png';
import './ToDo.css';
import Profileopt from './Profileopt';

export default function ToDo() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { currentUser } = useAuthValue();
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [enteredDate, setEnteredDate] = useState('');
  const [enteredStartTime, setEnteredStartTime] = useState('');
  const [enteredEndTime, setEnteredEndTime] = useState('');

  const acc = useRef();

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  const startTimeHandler = (event) => {
    setEnteredStartTime(event.target.value);
  };

  const endTimeHandler = (event) => {
    setEnteredEndTime(event.target.value);
  };

  function parseTime(s) {
    var c = s.split(':');
    return parseInt(c[0]) * 60 + parseInt(c[1]);
  }

  function convertHours(mins) {
    let hour = Math.floor(mins / 60);
    mins = mins % 60;
    let converted = pad(hour, 2) + ':' + pad(mins, 2);
    return converted;
  }

  function pad(str, max) {
    str = str.toString();
    return str.length < max ? pad('0' + str, max) : str;
  }

  function calculate_time_slot(start_time, end_time, interval = '30') {
    let i, formatted_time;
    let time_slots = new Array();
    for (i = start_time; i <= end_time; i = i + interval) {
      formatted_time = convertHours(i);
      time_slots.push(formatted_time);
    }
    return time_slots;
  }

  var start_time = parseTime(enteredStartTime),
    end_time = parseTime(enteredEndTime),
    interval = 30;

  const submitHandler = (event) => {
    event.preventDefault();
    const times_slots = calculate_time_slot(start_time, end_time, interval);
    console.log(times_slots);

    setEnteredDate('');
    setEnteredStartTime('');
    setEnteredEndTime('');
  };

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (isMenuOpen && acc.current && !acc.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [isMenuOpen]);

  return (
    <aside className="rightBar">
      <div className="rightTop">
        <div className="AccountInfo" ref={acc}>
          <div
            className="userName"
            onClick={() => setIsMenuOpen((oldState) => !oldState)}
          >
            <h3>Hi, {currentUser?.email}</h3>
            <div className="accountimg">
              <img src={pic2} alt="" />
            </div>
          </div>
          {isMenuOpen && <Profileopt />}
        </div>
        <div className="todoTitle">
          <h2>Todo Tasks</h2>
          <div className="searchOpt">
            <SearchIcon />
          </div>
          <div
            onClick={() => setIsModalOpened(true)}
            className="addOpt addAvatar"
          >
            <AddIcon />
          </div>
          <Modal
            isOpened={isModalOpened}
            onClose={() => setIsModalOpened(false)}
          >
            <h2>Add Task</h2>
            <form onSubmit={submitHandler} className="login-form">
              <section className="new-expense__control">
                <label>Date: </label>
                <input
                  type="date"
                  min="2019-01-01"
                  max="2022-12-31"
                  value={enteredDate}
                  onChange={dateChangeHandler}
                />
              </section>
              <small>Office hours are 9:00 to 18:00</small>
              <section>
                <label for="appt">Choose the start time: </label>
                <input
                  type="time"
                  min="09:00"
                  max="18:00"
                  value={enteredStartTime}
                  onChange={startTimeHandler}
                />
              </section>
              <section>
                <label for="appt">Choose the End time: </label>
                <input
                  type="time"
                  min="09:00"
                  max="18:00"
                  value={enteredEndTime}
                  onChange={endTimeHandler}
                />
              </section>

              <button>show slots</button>
            </form>
          </Modal>
        </div>
      </div>
      <div className="rightMid">
        <div className="todoTasks">
          <div className="todoTasksDate">
            <h3>6 october</h3>
            <MoreVertIcon />
          </div>
          <div className="todoTasksDes">
            <div className="desLeft">
              <h2>08:30</h2>
              <h4>09:00</h4>
            </div>
            <div className="desSeparater"></div>
            <div className="desRight">
              <h4>Marketing</h4>
              <p>3 Market sales</p>
            </div>
          </div>
          <div className="todoTasksDes">
            <div className="desLeft">
              <h2>08:30</h2>
              <h4>09:00</h4>
            </div>
            <div className="desSeparater"></div>
            <div className="desRight">
              <h4>Developing</h4>
              <p>Java Tasks</p>
            </div>
          </div>
        </div>
        <div className="todoTasks">
          <div className="todoTasksDate">
            <h3>7 october</h3>
            <MoreVertIcon />
          </div>
          <div className="todoTasksDes">
            <div className="desLeft">
              <h2>08:30</h2>
              <h4>09:00</h4>
            </div>
            <div className="desSeparater"></div>
            <div className="desRight">
              <h4>Tasks</h4>
              <p>Project</p>
            </div>
          </div>
          <div className="todoTasksDes">
            <div className="desLeft">
              <h2>08:30</h2>
              <h4>09:00</h4>
            </div>
            <div className="desSeparater"></div>
            <div className="desRight">
              <h4>Sales</h4>
              <p>Successfull sales</p>
            </div>
          </div>
        </div>
        <div className="todoTasks">
          <div className="todoTasksDate">
            <h3>8 october</h3>
            <MoreVertIcon />
          </div>
          <div className="todoTasksDes">
            <div className="desLeft">
              <h2>08:30</h2>
              <h4>09:00</h4>
            </div>
            <div className="desSeparater"></div>
            <div className="desRight">
              <h4>Developing</h4>
              <p>App development</p>
            </div>
          </div>
          <div className="todoTasksDes">
            <div className="desLeft">
              <h2>08:30</h2>
              <h4>09:00</h4>
            </div>
            <div className="desSeparater"></div>
            <div className="desRight">
              <h4>Marketing</h4>
              <p>App Marketing</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bookTripBtn">Book Your Trip</div>
    </aside>
  );
}
