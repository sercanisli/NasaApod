import React from 'react';

const DateSelector = ({ onDateChange }) => {
  return (
    <div >
      <h1 className="flex justify-center">Today's APOD</h1>
      <button onClick={() => onDateChange(new Date())}></button>
    </div>
  );
};

export default DateSelector;
