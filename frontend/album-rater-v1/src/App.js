import './App.css';
import api from './api/axiosConfig';
import { useState, useEffect } from 'react';

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

    </div>
  );
}

export default App;
