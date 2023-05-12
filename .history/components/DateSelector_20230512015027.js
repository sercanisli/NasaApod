import React from 'react';

const DateSelector = ({ onDateChange }) => {
  return (
    <div>
      <button onClick={() => onDateChange(new Date())}>Today's APOD</button>
    </div>
  );
};

export default DateSelector;
