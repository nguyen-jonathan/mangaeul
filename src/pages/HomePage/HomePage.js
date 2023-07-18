import React, {useEffect, useState} from 'react';
import axios from 'axios';
import MangaList from '../../components/MangaList/MangaList';

const HomePage = () => {
  const [mangaList, setMangaList] = useState([]);

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
    <div>
      <h1>Welcome to the Manga Browsing App!</h1>
      <MangaList mangaList={mangaList} />
    </div>
  );
};

export default HomePage;
