import React from "react";

import { BrowserRouter,Routes,Route} from "react-router-dom";
import Signup from "./components/Signup";
import NavBar from './components/NavBar';
import Header from './components/Header';
import Container from './components/Container';
import Features from './components/Features';
import Body from './Body';
import Footer from './Footer';
import Home from "./Home";
const App=()=>{


return (
  <>

<BrowserRouter>

<Routes>
   <Route path="/" element={<Home />} />
  <Route path="/signup" element={<Signup />} />
</Routes>
</BrowserRouter>
  {/* <NavBar/>
  <Header/>
  <Container/>
  <Features/>
   <Body/>
   <Footer/> */}

 
  
  </>
)

}


export default App;

