import React from 'react';
import '../styles/image.css';
import {NavLink} from 'react-router-dom';

const Image = ({data}) => {

  const id = data.id;

  return (
      <div className='img_card'>
        <NavLink to={`/imageDetails/${id}`}>
            <img className='img' src={data.urls.small} alt={data.alt_description} />
        </NavLink>
        <div className='img_details'>
          <span><img className='profile_img' src={data.user.profile_image.medium} alt="" />{data.user.name}</span>
          <span><i id='likes_icon' class="ri-thumb-up-line"></i>{data.likes}</span>
        </div>
      </div>
  )
}

export default Image;