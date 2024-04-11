import React from 'react';
import "../styles/card.css"

const Card = ({ data }) => {
    // console.log(data);

    // Access the 'name' and 'poster-image' properties from the 'data' object
    const { name, ['poster-image']: posterImage } = data;

    return (
        // Handled missing images
        // Thumbnail placeholders have been implemented.
        <div className='card'>
            <img
                src={require(`../assets/${posterImage.includes('posterthatismissing') ? 'placeholder_for_missing_posters.png' : posterImage}`)}
                alt="movie-poster"
                loading="lazy"
            />
            <p title={name}>{name.length > 12 ? `${name.slice(0, 12)}...` : name}</p>
        </div>
    );
};

export default Card;
