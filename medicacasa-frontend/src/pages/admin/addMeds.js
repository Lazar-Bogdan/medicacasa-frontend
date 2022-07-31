import React from 'react';
import MedForm from './medForm';

const AddMeds = () => {
  const handleOnSubmit = (med) => {
    console.log(med);
  };

  return (
    <React.Fragment>
      <MedForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddMeds;