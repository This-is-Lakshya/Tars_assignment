import React, { useContext, useEffect, useState } from 'react';
import '../styles/header.css';
import { ImageContext } from '../App';

const Header = ({children}) => {

  const [pageNo, setPageNo] = useState(1);
  const [searchValue, setSearchValue] = useState("office");
  const {fetchData, setSearchedImage} = useContext(ImageContext);

  useEffect(() => {
    fetchData(`search/photos?page=${pageNo}&query=${searchValue}&client_id=jj-15iQUmUP93q3NNpd7oRcv5s_qiJqA_ELbjH4yb2Q`)
  }, [pageNo])

  const handleInputChange = (e)=>{
    setSearchValue(e.target.value);
  }

  const handleButtonSearch = ()=>{
    setPageNo(1);
    fetchData(`search/photos?page=${pageNo}&query=${searchValue}&client_id=jj-15iQUmUP93q3NNpd7oRcv5s_qiJqA_ELbjH4yb2Q`)
    setSearchedImage(searchValue);
  }

  const handleNextButton = ()=>{
    setPageNo(pageNo + 1);
  }

  const handlePreviousButton = ()=>{
    setPageNo(pageNo - 1);
  }

  return (
    <div className='header'>
      <div className='outerMost_container'>
          <div className="inner_container">
            <h1 className='page_heading'>Download High Quality Images</h1>
            <h6 className='page_subHeading'>Over 2.4 million+ stock Images by our talented community</h6>
            {children}
          </div>

          <div className="SearchField">
            <input className='input_search' value={searchValue} onChange={handleInputChange} placeholder='Search for high quality images' type="search" />
            <button disabled={!searchValue} onClick={handleButtonSearch} className='search_btn'>Search</button>
          </div>
      </div>

      <div className='pagination'>
        <button className='page_btn' onClick={handlePreviousButton}>Previous</button>
        <button className='page_btn' onClick={handleNextButton}>Next Page</button>
      </div>
    </div>
  )
}

export default Header;