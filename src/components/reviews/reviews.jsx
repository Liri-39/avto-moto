import React from "react";
import ReviewsItem from "../reviews-item/reviews-item";
import {setIsFormOpen} from "../../store/action";
import {useDispatch, useSelector} from "react-redux";
import {getReviews} from "../../store/selectors";

const Reviews = () => {
    const dispatch = useDispatch();
    const reviews =  useSelector(getReviews);

    const onButtonClick = (evt) => {
        evt.preventDefault();
        dispatch(setIsFormOpen(true));
    };

    return <div className="reviews">
        <a href="#" className="reviews__button"
                onClick={onButtonClick}
        >Оставить отзыв</a>
        <ul className="reviews__list">
            {reviews.map((item) => <ReviewsItem review={item} key={`review-${item.id}`}/>)}
        </ul>
    </div>;
};

export default Reviews;
