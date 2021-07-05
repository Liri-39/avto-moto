import React, {useState, useEffect} from 'react';
import {useDispatch} from "react-redux";
/*import {sendComment} from "../../store/api-action";
import ReviewRatingItem from "../review-rating-item/review-rating-item";
import {ratings, CommentLength} from "../../const";*/

const ReviewForm = () => {

    const [reviews, setComment] = useState({
        comment: ``,
        rating: 0,
    });

    const dispatch = useDispatch();
    const {comment, rating} = reviews;

/*    const sendForm = (evt) => {
        evt.preventDefault();
        dispatch(sendComment({comment, rating}));
    };*/

    const handleCommentRatingChange = (evt) => {
        setComment({
            ...reviews,
            rating: parseFloat(evt.target.value),
        });
    };

    const handleCommentTextChange = (evt) => {
        setComment({
            ...reviews,
            comment: evt.target.value,
        });
    };

    return <form className="reviews__form form" action="#" method="post">
{/*        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <div className="reviews__rating-form form__rating">
            {ratings.map((item) =>
                <ReviewRatingItem
                    item={item}
                    handleOnChange={handleCommentRatingChange}
                    rating={reviews.rating}
                    key={`${item.rating}-stars`}
                    isDisabled={isDisabled}
                />
            )}
        </div>
        {isError && <div>Sorry, please try again </div>}
        <textarea
            className="reviews__textarea form__textarea"
            id="review"
            name="review"
            placeholder="Tell how was your stay, what you like and what can be improved"
            value={reviews.comment}
            onChange={handleCommentTextChange}
            maxLength={CommentLength.MAX}
            disabled={isDisabled}
            required
        />
        <div className="reviews__button-wrapper">
            <p className="reviews__help">
                To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay
                with at least <b className="reviews__text-amount">50 characters</b>.
            </p>
            <button
                className="reviews__submit form__submit button"
                type="submit"
                disabled={reviews.comment.length < CommentLength.MIN || reviews.rating === 0 }
                onClick={sendForm}
            >Submit</button>
        </div>*/}
    </form>;
};

export default ReviewForm;
