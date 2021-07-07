import React from 'react';
import {getDateDiff, getRatingPercentage} from "../../utils"

const ReviewsItem = ({review}) => {
    return <li className="reviews__item">
        <div className="reviews__user">
            <span>{review.user}</span>
        </div>
        <div className="reviews__content">
            <div className="reviews__content-title reviews__content-title--plus">Достоинства</div>
            <p>{review.plus}</p>
            <div className="reviews__content-title reviews__content-title--minus">Недостатки</div>
            <p>{review.minus}</p>
        </div>
        <div className="reviews__comment">
            <div className="reviews__comment-title">Комментарий</div>
            <p>{review.comment}</p>
        </div>
        <div className="reviews__rating rating">
            <div className="reviews__stars rating__stars">
                <span style={{width: getRatingPercentage(review.rating)}}/>
                <span className="visually-hidden">Rating</span>
            </div>
            <span className="reviews__resume">{review.rating >= 3 ? `Советует` : `Не советует`}</span>
        </div>
        <div className="reviews__footer">
            <time className="reviews__time" dateTime={review.date}>
                {getDateDiff(review.date)}
            </time>
            <a href="#">Ответить</a>
        </div>
    </li>
};

export default ReviewsItem;
