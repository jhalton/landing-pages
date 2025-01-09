import React from "react";
import LandingPageTile from "../LandingPageTile";

//going to add props so I can use this component for all the tiles
// title, screenshot, brief description of the app/project/site

const LandingPageOne = () => {
  const title = "Landing Page 01";
  const screenshot = "";
  const description = "";
  return (
    <div>
      <LandingPageTile title={title} />
    </div>
  );
};

export default LandingPageOne;
