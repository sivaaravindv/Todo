import React from 'react';

import SideBar from '../components/SideBar/SideBar';
import Main from '../components/Main/Main';
import ToDo from '../components/Todosection/ToDo';

export default function Home() {
  return (
    <>
      <SideBar />
      <Main />

      <ToDo />
    </>
  );
}
