import React, { useEffect } from 'react';
import './Alert.css';

const Alert = ({ type, msg, removeAlert, list }) => {
  const timeout = setTimeout(() => {
    removeAlert();
  }, 3000);

  useEffect(() => {
    return () => clearTimeout(timeout);
  }, [list]);

  return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;
