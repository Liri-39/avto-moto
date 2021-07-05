import React from 'react';
import PropTypes from 'prop-types';
import {reviewsPropTypes} from "../../prop-types/reviews-prop-types";
import ReviewsForm from "../review-form/review-form";
import ReviewsItem from "../reviews-item/reviews-item";
import {reviews} from "../../mocks/reviews";

const Reviews = () => {
    return <div className="reviews">
        <button className="reviews__button">Оставить отзыв</button>
        <ul className="reviews__list">
            {reviews.map((item) => <ReviewsItem review={item} key={`review-${item.id}`}/>)}
        </ul>
    </div>;
};

Reviews.propTypes = {
    comments: PropTypes.arrayOf(reviewsPropTypes).isRequired
};

export default Reviews;
