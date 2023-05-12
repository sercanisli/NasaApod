import Head from 'next/head';
import Layout from '../components/Layout';
import Apod from '@/components/Apod';

export default function Home({ title, url, explanation }) {
  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <Apod title={title} url={url} explanation={explanation} />
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API_KEY}`
  );
  const data = await res.json();

  return {
    props: {
      title: data.title,
      url: data.url,
      explanation: data.explanation,
    },
  };
}
