import React, { useState } from 'react';
import DateSelector from '../components/DateSelector';
import Apod from '@/components/Apod';

const HomePage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().substr(0, 10));

  const handleDateSelected = (date) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <DateSelector onDateSelected={handleDateSelected} />
      <Apod date={selectedDate} />
    </div>
  );
};

export default HomePage;
