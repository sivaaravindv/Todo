import React from 'react';
import { useState, useRef, useEffect } from 'react';
import NoteIcon from '@material-ui/icons/Note';
import InboxIcon from '@material-ui/icons/Inbox';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Sugg from './Sugg';

import './ToolBar.css';

export default function ToolBar(props) {
  const [suggIsOpen, setSuggIsOpen] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (suggIsOpen && ref.current && !ref.current.contains(e.target)) {
        setSuggIsOpen(false);
      }
    };

    document.addEventListener('mousedown', checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [suggIsOpen]);
  return (
    <div className="topTool" ref={ref}>
      <div className="topLeft">
        <button
          className="searchBar"
          onClick={() => {
            setSuggIsOpen(true);
          }}
        >
          <p>Search...</p>
        </button>
        {suggIsOpen && <Sugg setOpenSugg={setSuggIsOpen} />}
        <div className="topLeftInner">
          <div className="note">
            <NoteIcon />
          </div>
          <div className="inbox">
            <InboxIcon />
          </div>
          <div className="dots">
            <MoreVertIcon />
          </div>
        </div>
      </div>
      <div className="topRight">
        <h4>My Calender</h4>
        <h4>Upgrade to Pro!</h4>
      </div>
    </div>
  );
}
