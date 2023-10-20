import React from 'react';
import '../styles/skeleton.css';

const Skeleton = ({item}) => {
  return [...Array(item).keys()].map(()=>(
    <div className='skelton_animate'></div>
  ))
}

export default Skeleton;