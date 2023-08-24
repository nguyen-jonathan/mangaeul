import React, {useEffect, useState} from 'react';
import axios from 'axios';
import MangaList from '../../components/MangaList/MangaList';

function HomePage() {
  let [mangaList, setMangaList] = useState([]);

  useEffect(() => {
    // Fetch manga data using Axios (replace the API endpoint with your actual manga data source)
    axios
      .get('https://api.example.com/manga')
      .then((response) => {
        setMangaList(response.data);
      })
      .catch((error) => {
        console.error('Error fetching manga data:', error);
      });
  }, []);

  return (
    <div className="Home">
      <header className="Home-header">
        <h1>Mangaeul Collection</h1>
      </header>
      <p>Welcome to the Manga Browsing!</p>
      <MangaList mangaList={mangaList} />
    </div>
  );
}

export default HomePage;
