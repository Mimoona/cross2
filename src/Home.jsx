import Navbar from './Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './Footer';
import { Link } from "react-router-dom";



function Home() {
  return (
    <>
  <div>
      <h1>Roadmaps</h1>
  </div>
   <Footer/>
   </>
  );
}

export default Home;
