import React from 'react';
import { useContext } from 'react';
import { DataContext } from '../data/ContexData';

function About() {

  const {data,m} = useContext(DataContext)

  console.log(data, m);

  return (
    <div>
      <p>{data}</p>
    </div>
  );
}

export default About;