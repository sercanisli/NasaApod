import React from 'react';
import axios from 'axios';

const NASA_APOD_API_KEY = 'your-api-key-here';
const NASA_APOD_API_URL = `https://api.nasa.gov/planetary/apod?api_key=${NASA_APOD_API_KEY}`;

const NasaApod = ({ date }) => {
  const [apod, setApod] = React.useState(null);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    axios.get(`${NASA_APOD_API_URL}&date=${date}`).then((response) => {
      setApod(response.data);
    }).catch((error) => {
      setError(error);
    });
  }, [date]);

  if (error) {
    return <div>An error occurred: {error.message}</div>;
  }

  if (!apod) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{apod.title}</h2>
      <img src={apod.url} alt={apod.title} width="100%" />
      <p>{apod.explanation}</p>
    </div>
  );
};

export default NasaApod;
