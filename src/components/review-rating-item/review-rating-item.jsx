import React from "react";
import PropTypes from "prop-types";

const ReviewRatingItem = ({item, handleOnChange, rating}) => {
    return <>
        <input
            className="review-form__rating-input visually-hidden"
            name="rating"
            value={item.rating}
            id={`${item.rating}-stars`}
            type="radio"
            onChange={handleOnChange}
            checked={item.rating === rating}
        />
        <label
            htmlFor={`${item.rating}-stars`}
            className="review-form__rating-label"
            title={item.title}
        >
            <svg  className="review-form__star-image" width="27" height="25"  key={`${item.rating}-stars-svg`}>
                <path d="M13.5688 0L16.6151 9.52282H26.4734L18.4979 15.4082L21.5443 24.9311L13.5688 19.0456L5.59324 24.9311L8.63961 15.4082L0.664102 9.52282H10.5224L13.5688 0Z"/>
            </svg>
        </label>
    </>;
};

ReviewRatingItem.propTypes = {
    item: PropTypes.shape({
        rating: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
    }).isRequired,
    handleOnChange: PropTypes.func.isRequired,
    rating: PropTypes.number.isRequired
};

export default React.memo(ReviewRatingItem);
