import React, { useState } from 'react';
import { formatISO } from 'date-fns';

const DateSelector = ({ onDateSelected }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (event) => {
    const selectedDate = new Date(event.target.value);
    setSelectedDate(selectedDate);
    onDateSelected(formatISO(selectedDate));
    console.log(selectedDate);
  };

  return (
    <div>
      <label htmlFor="date-input">Choose a date:</label>
      <input type="date" value={selectedDate.toISOString().substr(0, 10)} onChange={handleDateChange} />
    </div>
  );
};

export default DateSelector;
