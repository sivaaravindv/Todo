import React, { useState, useEffect } from 'react';

import FreelancerList from './FreelancerList';
import AddFreelancer from './AddFreelancer';
import api from '../../api/freelancers';
import './Freelance.css';

export default function Freelancer() {
  const [freelancers, setFreelancers] = useState([]);

  const takeFreelancers = async () => {
    const resp = await api.get('/freelancers');
    return resp.data;
  };

  useEffect(() => {
    // const retrivefreelancers = JSON.parse(
    //   localStorage.getItem(LOCAL_STORAGE_KEY)
    // );
    // if (retrivefreelancers) setFreelancers(retrivefreelancers);

    const getAllFreelancers = async () => {
      const allFreelancers = await takeFreelancers();
      if (allFreelancers) setFreelancers(allFreelancers);
    };
    getAllFreelancers();
  }, []);

  useEffect(() => {
    // localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(freelancers));
  }, [freelancers]);

  const addNewFreelancerHandler = async (freelancer) => {
    const response = await api.post('/freelancers', freelancer);
    setFreelancers((prevFreelancers) => {
      return [...prevFreelancers, response.data];
    });
  };
  return (
    <div className="freelancer">
      <h2 className="freelancerTitle">Top Freelancers</h2>
      <div className="listShow">
        <FreelancerList items={freelancers} />

        <AddFreelancer onAddNewFreelancer={addNewFreelancerHandler} />
      </div>
    </div>
  );
}
