import React, {useEffect} from 'react';
import '../stylesheets/blog.css';
const Blog = () => {
  useEffect(() => {
    document.documentElement.style.setProperty('--background', '#565351');
  }, []);
  return (
    <div>Blog</div>
  )
}

export default Blog