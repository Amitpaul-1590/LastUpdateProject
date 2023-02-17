import React, { useState } from 'react';  //Component
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';  
import Home from './Components/Home';  
import Login from './Components/Login';  
import About from './Components/About';
import Signup from './Components/Signup';  
import NotFound from './Components/NotFound'; 
import Information from './Components/Information'
import { GiHamburgerMenu } from "react-icons/gi";


import { AddPlaces } from './Components/AddPlaces'
import logoImg from './Images/prolgo.png';
// import emailimg from './Images/email.png';
// import passimg from './Images/pass.png';


import './App.css'; 
   
const App = () => {  
    const [showMediaIcons, setShowMediaIcons] = useState(false);
    return ( 
       <Router>  
        <div  className="App">   
          <nav  id='mainNav' className="main-nav ">  
            {/* 1st logo part  */}
              <div className="logoIMG">
                  <img style={{height: '100px',marginBottom:"60px"}} src={logoImg} alt="logo" />
              </div>      
            <div   id="navbarONE" 
              style={{
                
                
                
               

              }}
              className={ 
                showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
              }>
              <ul  className='mainbar' style={{borderRadius: "60px"}}>
             
                <li className='list'>
                {/* <img className='emailimg' src={emailimg} alt="emailimg"></img> */}
                    <p ><Link  className='link' to="/home"><span className='barmanu'>Home</span></Link></p>
                </li>
                <li>
                    <p><Link className='link'  to="/Login"><span  className='barmanu'>Login</span></Link></p>  
                </li>
                <li>  
                    <p><Link className='link' to="/Signup"><span  className='barmanu'>Sign Up</span></Link></p>
                  </li> 
                  <li>  
                    <p><Link className='link' to="/"><span  className='barmanu'>About</span></Link></p>  
                  </li>  
                  <li>  
                    <p><Link className='link' to="/add-products"> <span  className='barmanu'>Admin</span> </Link></p>  
                  </li> 
              </ul>
            </div>
 
            {/* 3rd social media links */}
            <div  className="social-media ">       

              {/* hamburget menu start  */}
              <div className="hamburger-menu">
                <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                  <GiHamburgerMenu />
                </a>
              </div>
        </div>
      </nav>
           <Routes>  
                 <Route exact path='/home' element={< Home />}></Route>
                 <Route exact path='/Login' element={< Login />}></Route>   
                 <Route exact path='/Signup' element={< Signup />}></Route>
                 <Route exact path='/' element={< About />}></Route> 
                 <Route exact path='/Information' element={< Information /> }></Route>
                 <Route Component={NotFound}></Route>              
                 <Route exact path="/add-products" element={<AddPlaces />}/>
                {/* <Route exact path="/cart" component={Cart}/>        */}        
          </Routes>  
          </div>            
       </Router> 
   );  
  }  
  
export default App;  

