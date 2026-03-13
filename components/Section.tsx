import { ReactLenis } from "lenis/react";
import CareerTab from "./Career";
import CraftsKJ from "./Crafts";
import Footerbar from "./Githubgraph";
import Introduction from "./Intro";
import Skillbar from "./Skills";

const Section = () => {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      <div>
        <Introduction />
        <Skillbar />
        <CareerTab />
        <CraftsKJ />
        <Footerbar />
      </div>
    </ReactLenis>
  );
};

export default Section;
