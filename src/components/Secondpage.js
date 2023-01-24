import React from "react";
import { Router,Route,Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Row from "../components/Row";
import Second from "../components/Second";
import requests from "../components/requests";
import "../styles/second.css"
const Secondpage = () => {
  return (
    <>
    <Navbar/>
    <Second/>
    <h6>Total <span>28</span> Items Found</h6>
    <Row title='' fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
    <Row title='' fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
    {/* <Router>
       
        
      
       <Routes>
         <Route path="/seconpage" element={ <Row title='POPULAR MOVIES' fetchUrl={requests.fetchNetflixOriginals} isLargeRow />}></Route>
       </Routes>
       <Routes>
         <Route path="/secondpage" element={ <Row title='Trending Now' fetchUrl={requests.fetchTrending} />}></Route>
       </Routes>
       </Router> */}
    </>
  );
};

export default Secondpage;
