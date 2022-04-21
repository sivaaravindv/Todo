import React from 'react';
import user from '../../images/Daco_2569650.png';

export default function People(props) {
  return (
    <div className="people">
      <div className="peopleimg">
        <img src={user} alt="" />
      </div>
      <div className="details">
        <p>{props.name}</p>
        <h4>{props.place}</h4>
      </div>
    </div>
  );
}
