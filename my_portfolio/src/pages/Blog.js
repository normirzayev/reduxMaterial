import React, { useContext } from 'react';
import { DataContext } from '../data/ContexData';

function Blog() {

  const {chiq} = useContext(DataContext)

  return (
    <div>
      <h1>Blog</h1>

      <button onClick={chiq}> click me </button>

    </div>
  );
}

export default Blog;