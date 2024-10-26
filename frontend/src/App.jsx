import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import * as dotenv from 'dotenv'
import Home from './views/Home';
import Contact from './views/Contact';
import Experience from './views/Experience';
import ExtraCurricular from './views/ExtraCurricular';
import Blog from './views/Blog';
import Palantir from './views/Palantir';
import { useLocation } from 'react-router-dom';


const App = () => {

  return (
    <Router>
      <div>
        {/* Navigation Links */}
        <nav className="navbar">
          <ul className="navbar-list">
            <li><Link to="/" className="cute-nav-link"><img src="/my_rose.png" alt="" id="home-icon"/></Link></li>
            <li><p className="cute-nav-link deprecated">experience</p></li>
            <li><p className="cute-nav-link deprecated">extra curricular</p></li>
            <li><p className="cute-nav-link deprecated">the blog</p></li>
            <li><a href='https://www.linkedin.com/in/brandon-a-perez' target='_blank' className="cute-nav-link">linkedin</a></li>
            <li><Link to="/contact" className="cute-nav-link">contact</Link></li>
            
          </ul>
        </nav>

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/hobbies" element={<ExtraCurricular />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/for-palantirs-eyes-only" element={<Palantir />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;