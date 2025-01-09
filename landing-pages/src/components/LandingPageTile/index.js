import React from "react";
import "./LandingPageTile.css";

const LandingPageTile = ({ title, screenshot, description }) => {
  return <div>{title ? <p>{title}</p> : <p>Landing Page Tile</p>}</div>;
};

export default LandingPageTile;
