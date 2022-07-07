import Intro from "../../components/Home/Intro";
import Footer from "../../components/Home/Footer";
import Header from "../../components/Home/Header";
import "./styles.css";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Intro />
      <Footer />
    </div>
  );
};

export default Home;
