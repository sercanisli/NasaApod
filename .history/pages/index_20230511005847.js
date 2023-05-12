import Apod from "@/components/Apod";

const Home = ({item}) => {
  return (
    <div>
      <Apod item={item}/>
    </div>
  );
}

export default Home;