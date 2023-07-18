import React from 'react';
import MangaCard from '../MangaCard/MangaCard';

const MangaList = ({mangaList}) => {
  return (
    <div className="manga-list">
      {mangaList.map((manga) => (
        <MangaCard key={manga.id} manga={manga} />
      ))}
    </div>
  );
};

export default MangaList;
