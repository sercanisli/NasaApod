export async function getStaticProps() {
    try {
      const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=EE0ZIoEOksDZKvkNgEcM1TfRaKWtTACerC0GhuJQ`);
      const data = await res.json();
      const { title, url, explanation } = data;
      return {
        props: { title, url, explanation }
      };
    } catch (err) {
      console.error(err);
      return { props: { title: null, url: null, explanation: null } };
    }
  }
  