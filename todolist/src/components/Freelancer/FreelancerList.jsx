import React from 'react';
import People from './People';

export default function Freelancers(props) {
  return (
    <div className="freelancers">
      {props.items.map((freelancers) => (
        <People
          key={freelancers.id}
          name={freelancers.name}
          place={freelancers.place}
        />
      ))}
    </div>
  );
}
