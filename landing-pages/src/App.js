import "./App.css";
import LandingPageOne from "./components/01LandingPage";
import LandingPageTile from "./components/LandingPageTile";

function App() {
  return (
    <div className="App">
      <h1>Welcome to The Landing page of Landing Pages</h1>
      <p>
        □ I think I would like to just have a grid of different landing pages.
      </p>
      <p>□ My initial goal is 8.</p>
      <p>□ Each grid will have a title beneath.</p>
      <p>
        □ I am considering either showing a brief description when you hover
        over the cell or...
      </p>
      <p>
        □ When you get to the next landing page, a modal pops up with a brief
        description and when you click it goes away.
      </p>
      <p>□ I think the first one feels less annoying as a user.</p>
      <div className="LandingPagesGrid">
        <ul>
          <li className="LandingPageTile">
            <LandingPageOne />
          </li>
          <li className="LandingPageTile">
            <LandingPageTile />
          </li>
          <li className="LandingPageTile">
            <LandingPageTile />
          </li>
          <li className="LandingPageTile">
            <LandingPageTile />
          </li>
          <li className="LandingPageTile">
            <LandingPageTile />
          </li>
          <li className="LandingPageTile">
            <LandingPageTile />
          </li>
          <li className="LandingPageTile">
            <LandingPageTile />
          </li>
          <li className="LandingPageTile">
            <LandingPageTile />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
