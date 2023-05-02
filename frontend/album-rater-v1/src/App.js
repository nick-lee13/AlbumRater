import './App.css';
import api from './api/axiosConfig';
import { useState, useEffect } from 'react';
import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';

function App() {

  const [albums, setAlbums] = useState();

  const getAlbums = async () =>{

    try
    {

      const response = await api.get("/api/v1/albums");

      console.log(response.data);

      setAlbums(response.data);

    }
    catch(err)
    {
      console.log(err);
    }

  }

  useEffect(() => {
    getAlbums();
  },[])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Home albums={albums} />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
