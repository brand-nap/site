import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './views/Home';
import Contact from './views/Contact';
import Experience from './views/Experience';
import ExtraCurricular from './views/ExtraCurricular';
import Blog from './views/Blog';
import Palantir from './views/Palantir';
import ComingSoon from './views/ComingSoon'

const App = () => {
  const monitor = innerWidth > 1000;
  const [selected, setSelected]=useState(false)

  const selectPage = (event) => {
    event.preventDefault(); // Prevents navigation
    if(selected){
      setSelected(false)
      document.documentElement.style.setProperty('---selected', 'none');
    }else{
      setSelected(true)
      document.documentElement.style.setProperty('---selected', 'block');
    }
  };
  const pageSelected = (event) => {
    setSelected(false)
    document.documentElement.style.setProperty('---selected', 'none');
  };

  return (
    <Router>
      <div>
        {/* Navigation Links */}
        <nav className="navbar">
          <ul className="navbar-list">
            <li><Link to="/" className="cute-nav-link"><img src="/my_rose.png" alt="" id="home-icon"/></Link></li>
            <li><Link to="/coming-soon" className="cute-nav-link deprecated">experience</Link></li>
            <li><Link to="/coming-soon" className="cute-nav-link deprecated">extra curricular</Link></li>
            <li><Link to="/coming-soon" className="cute-nav-link deprecated">the blog</Link></li>
            <li><a href='https://www.linkedin.com/in/brandon-a-perez' target='_blank' className="cute-nav-link">linkedin</a></li>
            <li><Link to="/contact" className="cute-nav-link">contact</Link></li>
          </ul>

          <div className='dropdown'>
            <a href="#" className='cute-nav-link select' onClick={selectPage}>select page</a>
            <ul className="drop-list">
                <li id='dl-1'><Link onClick={pageSelected} to="/" className="cute-nav-link drop-link">home</Link></li>
                <li id='dl-2'><Link onClick={pageSelected} to="/contact" className="cute-nav-link drop-link">contact</Link></li>
                <li id='dl-3'><a onClick={pageSelected} href='https://www.linkedin.com/in/brandon-a-perez' target='_blank' className="cute-nav-link drop-link">linkedin</a></li>
            </ul>
          </div>

        </nav>
        
        

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/hobbies" element={<ExtraCurricular />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
          <Route path="/for-palantirs-eyes-only" element={<Palantir />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;