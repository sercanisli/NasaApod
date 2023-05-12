const PhotoOfTheDay = ({ title, url, explanation }) => {
    return (
      <section>
        <h1>{title}</h1>
        <img src={url} alt={title} />
        <p>{explanation}</p>
      </section>
    );
  };
  
  export default PhotoOfTheDay;
  