import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = 'EE0ZIoEOksDZKvkNgEcM1TfRaKWtTACerC0GhuJQ';

function Apod() {
  const [apodData, setApodData] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date().toLocaleDateString());

  useEffect(() => {
    const formatDate = date => {
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const day = date.getDate().toString().padStart(2, '0');
      return `${year}-${month}-${day}`;
    }

    const fetchApodData = async () => {
      try {
        const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${formatDate(selectedDate)}`);
        setApodData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchApodData();
  }, [selectedDate]);

  const handleDateChange = event => {
    const selectedDate = new Date(event.target.value);
    setSelectedDate(selectedDate);
  };
  console.log(apodData)

  return (
    <div>
        <div className="flex justify-center">
            <input type="date" className="text-black"  value={selectedDate.toISOString().substr(0, 10)} onChange={handleDateChange} />
        </div>
      {apodData ? (
        <div>
            <div className="flex justify-center mb-4 mt-4 text-xl">
                <h1>{apodData.title}</h1>
            </div>
            <div className="flex justify-center items-center">
                <div className="w-1/2 p-4">
                <img src={apodData.url} alt={apodData.title} />
                </div>
                <div className="w-1/2 p-4 self-center">
                    <p>{apodData.explanation}</p>
                </div>
            </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Apod;
