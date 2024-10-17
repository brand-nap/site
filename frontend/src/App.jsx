import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './views/Home';
import Contact from './views/Contact';
import Experience from './views/Experience';
import ExtraCurricular from './views/ExtraCurricular';
import Blog from './views/Blog';

const App = () => {
  return (
    <Router>
      <div>
        {/* Navigation Links */}
        <nav className="navbar">
          <ul className="navbar-list">
            <li><Link to="/experience" className="cute-nav-link">experience</Link></li>
            <li><Link to="/hobbies" className="cute-nav-link">extra curricular</Link></li>
            <li><Link to="/blog" className="cute-nav-link">the blog</Link></li>
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
        </Routes>
      </div>
    </Router>
  );
}

export default App;