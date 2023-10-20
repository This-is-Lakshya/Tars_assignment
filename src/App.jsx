import { createContext, useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import useAxios from './hooks/useAxios';
import ImgDetails from './pages/ImgDetails';

// Context Api
export const ImageContext = createContext();

function App() {

  const [searchedImage, setSearchedImage] = useState("");

  const {response, isLoading, error, fetchData} = useAxios(`search/photos?page=1&query=office&client_id=jj-15iQUmUP93q3NNpd7oRcv5s_qiJqA_ELbjH4yb2Q`);
  console.log(response);

  const value = {
    response,
    isLoading,
    error,
    fetchData,
    searchedImage,
    setSearchedImage
  }

  return (
    <ImageContext.Provider value={value}>
      <Router>
        <Routes>
          <Route path={"/"} element={<HomePage />} />
          <Route path='/imageDetails/:id' element={<ImgDetails />} />
        </Routes>
      </Router>
    </ImageContext.Provider>
  );
}

export default App;