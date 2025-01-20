import React from "react";
import LandingPageTile from "../LandingPageTile";
import SkincarePage from "../../pages/SkincarePage";

//going to add props so I can use this component for all the tiles
// title, screenshot, brief description of the app/project/site

const LandingPageOne = () => {
  const title = "Skincare Page";
  const screenshot = "";
  const description = "";
  return (
    <div>
      <SkincarePage title={title} />
    </div>
  );
};

export default LandingPageOne;
