import Navbar from './Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './Footer';
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
  <div>
      <p>Home</p>
     
      {Navbar}
      <h1>Roadmaps</h1>
      <Link to="/frontend" onClick={}></Link>
  </div>
   <Footer/>
   </>
  );
}

export default Home;
