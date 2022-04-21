import React, { useState } from 'react';
import Alert from './Alert';
import Modal from '../Todosection/Modal';

import AddIcon from '@material-ui/icons/Add';
import './AddFreelaner.css';

export default function AddFreelancer(props) {
  const freeValues = { name: '', place: '' };
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' });
  const [freelancerInfo, SetFreelancerInfo] = useState(freeValues);

  const changeHandler = (event) => {
    const { name, value } = event.target;
    SetFreelancerInfo({ ...freelancerInfo, [name]: value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (freelancerInfo.name === '' || freelancerInfo.place === '') {
      showAlert(true, 'danger', 'Please enter required informaton');
      return;
    }
    showAlert(true, 'success', 'Freelancer added to the list');

    const freelancerData = {
      id: Math.random().toString(),
      ...freelancerInfo,
    };

    props.onAddNewFreelancer(freelancerData);
    SetFreelancerInfo(freeValues);
  };
  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({ show, type, msg });
  };
  return (
    <>
      <div onClick={() => setIsModalOpened(true)} className="add-people">
        <AddIcon />
      </div>

      <Modal isOpened={isModalOpened} onClose={() => setIsModalOpened(false)}>
        <div className="modal-content">
          <h2>Add Freelancers</h2>
          <form onSubmit={submitHandler}>
            <div className="new-freelancer__controls">
              <div className="new-freelancer__control">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  value={freelancerInfo.name}
                  onChange={changeHandler}
                />
              </div>
              <div className="new-freelancer__control">
                <label>Location</label>
                <input
                  type="text"
                  name="place"
                  value={freelancerInfo.place}
                  onChange={changeHandler}
                />
              </div>
            </div>
            {alert.show && (
              <Alert {...alert} removeAlert={showAlert} list={freelancerInfo} />
            )}
            <div className="new-freelancer__actions">
              <button type="submit">Add Freelancer</button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
}
