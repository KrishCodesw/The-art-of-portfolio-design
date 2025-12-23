import CareerTab from "./Career";
import CraftsKJ from "./Crafts";
import Footerbar from "./Githubgraph";
import Introduction from "./Intro";
import Skillbar from "./Skills";
const Section = () => {
  return (
    <div>
      <Introduction />

      <Skillbar />
      <CareerTab />
      <CraftsKJ />
      <Footerbar />
    </div>
  );
};

export default Section;
