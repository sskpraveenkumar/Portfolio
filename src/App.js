import React from 'react';

import Home from './components/Home';
import About from './components/About';
import Interest from './components/Interest';
import Portfolio from './components/Portfolio';
// import { BrowserRouter,Routes,Route } from 'react-router-dom'; 
 import { BrowserRouter } from 'react-router-dom'; 
/*import {Link,Route,Router,BrowserRouter as Routes} from 'react-router-dom';*/
import Contact from './components/Contact';
import './components/Index.css';
import './components/Navbar.jsx';






 function App(){
    return(
        <BrowserRouter>
        
        <Home />
        <About />
        <Interest />
        <Portfolio />
        <Contact/> 
        </BrowserRouter>




       /* <div>
            <Router>
                <Link to="/">Home</Link>
                <Link to="/About">About</Link>
                 <Link to="/Interest">Interest</Link>
                 <Link to="/Portfolio">Portfolio</Link>
                 <Link to="/Contact">Contact</Link>



                 <Routes>
                    <Route path='/' element={<Home></Home>}></Route>
                    <Route path='/Aboutt' element={<About></About>}></Route>
                    <Route path='/Interest' element={<Interest></Interest>}></Route>
                    <Route path='/Portfolio' element={<Portfolio></Portfolio>}></Route>
                    <Route path='/Contact' element={<Contact></Contact>}></Route>
                 </Routes>
            </Router>
        // </div>*/


        

    );
}
export default App;