export async function getStaticProps() {
    const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=EE0ZIoEOksDZKvkNgEcM1TfRaKWtTACerC0GhuJQ`);
    const data = await res.json();
  
    if (!data) {
      return {
        notFound: true,
      };
    }
  
    return {
      props: {
        title: data.title || null,
        url: data.url || null,
        explanation: data.explanation || null,
      },
    };
  }
  