import React from 'react';
import { DatePicker } from '@material-ui/pickers';

const DateSelector = ({ label, value, onChange }) => {
  const [selectedDate, setSelectedDate] = React.useState(value);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    onChange(date);
  };

  return (
    <DatePicker
      label={label}
      inputVariant="outlined"
      format="yyyy-MM-dd"
      value={selectedDate}
      onChange={handleDateChange}
      maxDate={new Date()}
      fullWidth
    />
  );
};

export default DateSelector;
