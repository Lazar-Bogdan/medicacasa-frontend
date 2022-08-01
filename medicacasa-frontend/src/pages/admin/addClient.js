import React from 'react';
import MedForm from './medForm';

const AddClient = () => {
  const handleOnSubmit = (med) => {
    console.log(med);
  };

  return (
    <React.Fragment>
      <h2>DE MODIFICAT FORM UL</h2>
      <MedForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddClient;