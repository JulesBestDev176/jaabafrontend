import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const StarRating = () => {
    const [rating, setRating] = useState(null);

    return (
        <div className="d-flex">
            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;

                return (
                    <div key={i}>
                        <label>
                            <input
                                type="radio"
                                name="rating"
                                value={ratingValue}
                                onClick={() => setRating(ratingValue)}
                                style={{ display: 'none' }}
                            />
                            <FaStar
                                size={20}
                                color={ratingValue <= rating ? "#ffc107" : "#e4e5e9"}
                                className="star"
                            />
                        </label>
                    </div>
                );
            })}
        </div>
    );
}

export default StarRating;
