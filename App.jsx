import React from 'react';
import {Routes, Route, NavLink} from 'react-router-dom';
import Home from './Home.jsx';
import Contact from './Contact.jsx';
import About from './About.jsx';
function App(){
  const linkStyle=({isActive})=>({
    margin:'0 10px',
    textDecoration:'none',
    color:isActive?'blue':'black',
    fontWeight:isActive?'bold':'normal'
  });
  return (
    <div>
    <nav style={{
      display:'flex',
      justifyContent:'center',
      gap:'20px'
    }}>
      <NavLink to='/' style={linkStyle} end> Home</NavLink>
      <NavLink to='/About' style={linkStyle} end> About</NavLink>
      <NavLink to='/Contact' style={linkStyle} end> Contact</NavLink>
      </nav>
      <hr/><Routes><Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </div>
  );
}
export default App;