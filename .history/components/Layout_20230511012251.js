import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>NASA APOD</title>
        <meta name="description" content="NASA Astronomy Picture of the Day" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{children}</main>
    </>
  );
};

export default Layout;