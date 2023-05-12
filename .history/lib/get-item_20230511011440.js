export const getStaticProps = async () => {
    const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}`);
    const data = await res.json();
  
    return {
      props: {
        title: data.title,
        url: data.url,
        explanation: data.explanation,
      },
    };
  };
  