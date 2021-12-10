//Book Card
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const BookCard = (props) => {
    const  book  = props.book;

    return(
        //renders a book entry for each existing database entry
        <div className="card-container">
            {
                //Link to the placeholder image for each entry
            }
            <img src="https://commapress.co.uk/books/the-book-of-newcastle/newc_final_version_rgb/image%2Fspan3" alt="Book Placeholder" />
            <div className="desc">
                <h2>
                    {
                        //fetches the book from the database based on
                        //its id entry so it can fetch the correct data
                    }
                    <Link to={`/show-book/${book._id}`}>
                        { book.title }
                    </Link>
                </h2>
                {
                    //prints current books details
                }
                <h3>{book.author}</h3>
                <p>{book.description}</p>
            </div>
        </div>
    )
};
export default BookCard;
