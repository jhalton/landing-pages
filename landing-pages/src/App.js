import "./App.css";
import LandingPageOne from "./components/01LandingPage";
import LandingPageTwo from "./components/02LandingPage";
import LandingPageThree from "./components/03LandingPage";
import LandingPageFour from "./components/04LandingPage";
import LandingPageFive from "./components/05LandingPage";
import LandingPageSix from "./components/06LandingPage";
import LandingPageSeven from "./components/07LandingPage";
import LandingPageEight from "./components/08LandingPage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SkincarePage from "./pages/SkincarePage";

function App() {
  return (
    <Router>
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
              <Link to="/pages/SkincarePage">
                <LandingPageOne />
              </Link>
            </li>
            <li className="LandingPageTile">
              <LandingPageTwo />
            </li>
            <li className="LandingPageTile">
              <LandingPageThree />
            </li>
            <li className="LandingPageTile">
              <LandingPageFour />
            </li>
            <li className="LandingPageTile">
              <LandingPageFive />
            </li>
            <li className="LandingPageTile">
              <LandingPageSix />
            </li>
            <li className="LandingPageTile">
              <LandingPageSeven />
            </li>
            <li className="LandingPageTile">
              <LandingPageEight />
            </li>
          </ul>
        </div>
        <Routes>
          <Route path="/pages/SkincarePage" element={<LandingPageOne />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
