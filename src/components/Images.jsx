import React, { useContext } from 'react';
import '../styles/images.css';
import { ImageContext } from '../App';
import { useState } from 'react';
import Image from './Image';
import Skeleton from './Skeleton';

const Images = () => {

  const [pageNo, setPageNo] = useState(1);
  const {response, isLoading, searchedImage, fetchData} = useContext(ImageContext);

  const handleNextButton = ()=>{
    fetchData(`search/photos?page=${pageNo}&query=office&client_id=jj-15iQUmUP93q3NNpd7oRcv5s_qiJqA_ELbjH4yb2Q`)
    setPageNo(pageNo + 1);
  }

  const handlePreviousButton = ()=>{
    fetchData(`search/photos?page=${pageNo}&query=office&client_id=jj-15iQUmUP93q3NNpd7oRcv5s_qiJqA_ELbjH4yb2Q`)
    setPageNo(pageNo - 1);
  }

  return (
    <>
        <h1 className='main_heading'>Search Results for "{searchedImage || 'Office'}"</h1>
        <div className='img_container'>
            {
              isLoading ? <Skeleton item={10} /> : response.map((data, key)=> <Image key={key} data={data} /> )
            }
        </div>
    </>
  )
}

export default Images;