import "./App.css";
import Row from "./components/Row"
import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Banner from "./components/Banner";
import requests from "./components/requests";
import Footer from "./components/Footer";
import Secondpage from "./components/Secondpage";

function App() {
  return (
    <>
   
      <Router>
       
        
        <Routes>
          <Route path="/" element={<Navbar/>}></Route>
        </Routes>
         
        <Routes>
          <Route path="/" element={ <Banner/>}></Route>
        </Routes>
        <Routes>
          <Route path="/" element={ <Row title='POPULAR MOVIES' fetchUrl={requests.fetchNetflixOriginals} isLargeRow />}></Route>
        </Routes>
        <Routes>
          <Route path="/" element={ <Row title='Trending Now' fetchUrl={requests.fetchTrending} />}></Route>
        </Routes>
       
        <Routes>
          <Route path="/" element={  <Row title='Top rated' fetchUrl={requests.fetchTopRated} />}></Route>
        </Routes>
        <Routes>
          <Route path="/" element={ <Row  title='Action Movies' fetchUrl={requests.fetchActionMovies} /> }></Route>
        </Routes>
        <Routes>
          <Route path="/" element={ <Row title='Horror' fetchUrl={requests.fetchHorrorMovies} />}></Route>
        </Routes>
        
        <Routes>
          <Route exact path="/secondpage.js" element={<Secondpage/>}></Route>
        </Routes>
        
        
        {/* <Footer/> */}
    </Router>
   
    
     
    </>
  );
}

export default App;
