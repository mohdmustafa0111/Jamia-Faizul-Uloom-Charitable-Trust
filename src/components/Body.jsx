import Header from "./Header";
import VideoBackground from "./VideoBackground";
import About from "./About";
import Events from "./Events";
import Media from "./Media";
import Donate from "./Donate";
import Footer from "./Footer";
import Docs from "./Docs";

const Body = () => {
  return (
    <div>
      <Header />
      <VideoBackground />
      <About />
      <Docs />
      <Events />
      <Media />
      <Donate />
      <Footer />
    </div>
  );
};
export default Body;
