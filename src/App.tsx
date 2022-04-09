import { Link, Outlet } from "react-router-dom";
import "./App.css";

const App = () => (
  <div>
    <header>
      {/**
       * Initial version will have basic links on the header
       *
       * Later version will have hamburger menu
       */}
      <Link to="/">App</Link>
      <Link to="/login">Login</Link>
      <Link to="/rooms">rooms</Link>
    </header>
    <main>
      <Outlet />
    </main>
  </div>
);

export default App;
