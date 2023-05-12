import React from 'react';
import axios from 'axios';

const API_KEY = 'EE0ZIoEOksDZKvkNgEcM1TfRaKWtTACerC0GhuJQ';
const API_URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;

const Apod = ({ date }) => {
  const [apod, setApod] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`${API_URL}&date=${date}`).then((response) => {
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

export default Apod;
