import React, {useState} from 'react';
import axios from 'axios';

function AddManga() {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    genre: '',
    description: '',
    cover_image: '',
    publication_year: 0,
    status: '',
    rating: '',
    number_of_volumes: 0,
    number_of_chapters: 0,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/manga', formData);
      console.log('New manga added:', response.data);
      // You can add further logic here, e.g., displaying a success message or refreshing the manga list.
    } catch (error) {
      console.error('Error adding manga:', error);
    }
  };

  return (
    <div className="AddManga">
      <h1>Add New Manga</h1>
      <form onSubmit={handleSubmit}>
        {/* Add input fields for all the manga fields */}
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </label>
        {/* Add other input fields for the remaining manga fields */}
        <button type="submit">Add Manga</button>
      </form>
    </div>
  );
}

export default AddManga;
