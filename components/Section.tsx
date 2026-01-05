import CareerTab from "./Career";
import CraftsKJ from "./Crafts";
import Footerbar from "./Githubgraph";
import Introduction from "./Intro";
import Skillbar from "./Skills";
import Footer from "./Footer";
const Section = () => {
  return (
    <div>
      <Introduction />

      <Skillbar />
      <CareerTab />
      <CraftsKJ />
      <Footerbar />
      <Footer />
    </div>
  );
};

export default Section;
