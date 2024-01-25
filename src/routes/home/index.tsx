import Hero from "../../components/hero/Hero";
import Nav from "../../components/nav/Nav";
import Sele from "../../components/seleup/Sele";

const Home = () => {
  return (
    <div>
      <Nav />
      {<Hero />}
      <Sele />
    </div>
  );
};

export default Home;
