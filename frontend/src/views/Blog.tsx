import React, {useEffect} from 'react';

const Blog = () => {
  useEffect(() => {
    document.documentElement.style.setProperty('--background', '#565351');
  }, []);
  return (
    <div>Blog</div>
  )
}

export default Blog