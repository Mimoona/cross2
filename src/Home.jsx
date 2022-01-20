import Navbar from './Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Link } from "react-router-dom";

function Home() {
  return (
  <div>
      {Navbar}
      <h1>Roadmaps</h1>
      <Link to="/frontend" onClick={}></Link>
  </div>
  );
}

export default Home;
