import React from 'react';

const DateSelector = ({ onDateChange }) => {
  return (
    <div className="flex justify-center">
      <button onClick={() => onDateChange(new Date())}>Today's APOD</button>
    </div>
  );
};

export default DateSelector;
