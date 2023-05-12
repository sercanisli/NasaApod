import React from "react";

const Apod = ({ title, url, explanation }) => {
  return (
    <div>
      <h1>{title}</h1>
      <img src={url} alt={title} />
      <p>{explanation}</p>
    </div>
  );
}

export default Apod;
