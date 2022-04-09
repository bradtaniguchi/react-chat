import { Link } from "react-router-dom";
import "./App.css";

const App = () => (
  <div>
    <header>
      {/**
       * Initial version will have basic links on the header
       *
       * Later version will have hamburger menu
       */}
      <div>
        {/* Make a link later */}
        App
      </div>
      <Link to="/login">Login</Link>
      <Link to="/rooms">rooms</Link>
    </header>
  </div>
);

export default App;
