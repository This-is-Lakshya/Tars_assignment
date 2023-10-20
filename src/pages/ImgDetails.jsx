import React, { useEffect, useState } from 'react';
import '../styles/imgDetails.css';
import axios from 'axios';
import {useParams} from 'react-router-dom';

const client_id = "jj-15iQUmUP93q3NNpd7oRcv5s_qiJqA_ELbjH4yb2Q"

const ImgDetails = () => {

	const [singleImg, setSingleImg] = useState();
	const {id} = useParams();
	const url = `https://api.unsplash.com/photos/${id}?client_id=${client_id}`;

	const {likes, user, urls} = singleImg || {};
	const {name, social} = user || {};
	const {regular} = urls || {};
	const {instagram_username} = social || {};

	useEffect(()=>{

		const fetchData = async()=>{
			try{
				const res = await axios.get(url);
				const result = await res.data;

				setSingleImg(result);

			}catch(err){
				console.log(err);
			}
		}

		fetchData();
	}, [url])


  return (
    <>
	    <div className='imgDetails'>
      		<div className="CardView">
				<img  src={regular} alt="" />
				<div className="data">
					<h2>Image Details</h2>
					<div className="details">
						<span className='d_tails'><i id="remixicon" class="ri-thumb-up-line"></i> {likes}</span>
						<span className='d_tails'><i id="remixicon" class="ri-user-line"></i> {name}</span>
						<span className='d_tails'><i id="remixicon" class="ri-instagram-line"></i> @{instagram_username}</span>
					</div>
				</div>
			</div>
    	</div>
	</>
  )
}

export default ImgDetails;