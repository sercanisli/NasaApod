import React from 'react';

const DateSelector = ({ onDateChange }) => {
  return (
    <div className="flex justify-center">
      <button onClick={() => onDateChange(new Date())}>
        <span className="text-4xl">Today's APOD</span>
      </button>
    </div>
  );
};

export default DateSelector;
