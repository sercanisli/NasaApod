import Apod from "../components/Apod";

const Home = ({ title, url, explanation }) => {
  return (
    <div>
      <Apod title={title} url={url} explanation={explanation} />
    </div>
  );
}

export default Home;
