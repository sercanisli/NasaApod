import React from 'react';

const DateSelector = ({ onDateChange }) => {
  return (
    <div className="flex justify-center mb-8">
      <button onClick={() => onDateChange(new Date())}>
        <span className="text-4xl ">Apod Of The Chosen Day</span>
      </button>
    </div>
  );
};

export default DateSelector;
