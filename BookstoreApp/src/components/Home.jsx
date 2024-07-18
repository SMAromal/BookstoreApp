import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await axios.get('https://example-data.draftbit.com/books?_limit=20');
        setBooks(res.data);
      } catch (error) {
        console.error('Error, try again', error);
      }
    };
    fetchBooks();
  }, []);

  return (
    <div>
      <h2>BOOK LIST</h2>
      <div className="card-list">
        {books.map(book => (
          <div key={book.id} className="card">
            <Link to={`/book/${book.id}`} className="card-link">
              <img src={book.image_url} alt={book.title} className="card-img" />
              <div className="card-body">
                <h3 className="card-title">{book.title}</h3>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
