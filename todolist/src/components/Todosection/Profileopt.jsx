import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../../pages/firebase';
function Profileopt() {
  return (
    <ul className="list">
      <li className="list-item">My Account</li>
      <li className="list-item">Option 2</li>
      <li className="list-item">Option 3</li>
      <li className="list-item" onClick={() => signOut(auth)}>
        Logout
      </li>
    </ul>
  );
}

export default Profileopt;
