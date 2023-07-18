import React from 'react';

const MangaCard = ({manga}) => {
  return (
    <div className="manga-card">
      <img src={manga.coverImage} alt={manga.title} />
      <h3>{manga.title}</h3>
    </div>
  );
};

export default MangaCard;
