import React from 'react';

const DateSelector = ({ onDateChange }) => {
  return (
    <div >
      <h6 className="flex justify-center">Today's APOD</h6>
      <button onClick={() => onDateChange(new Date())}></button>
    </div>
  );
};

export default DateSelector;
