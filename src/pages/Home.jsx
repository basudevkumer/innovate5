import Artificial from "../component/Artificial";
import Bannar from "../component/Bannar";
import Build from "../component/Build";
import Business from "../component/Business";
import Demo from "../component/Demo";
import Plan from "../component/Plan";
import Slider from "../component/Sliders";
import Tool from "../component/Tool";
import Trial from "../component/Trial";

const Home = () => {
  return (
    <>
      <Bannar />
      <Slider/>
      <Tool/>
      <Business/>
      <Artificial/>
      <Plan/>
      <Demo/>
      <Build/>
      <Trial/>
    </>
  );
};

export default Home;
