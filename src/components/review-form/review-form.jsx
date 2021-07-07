import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {addReview, setIsFormOpen} from "../../store/action";
import ReviewRatingItem from "../review-rating-item/review-rating-item";
import {ratings} from "../../const";

const ReviewForm = () => {

    const [review, setReview] = useState({
        user: ``,
        plus: ``,
        minus: ``,
        comment: ``,
        rating: 0,
    });

    const dispatch = useDispatch();
    const {user, plus, minus, comment, rating} = review;

    const sendForm = (evt) => {
        evt.preventDefault();
        const date = Date.now();
        dispatch(addReview({user, plus, minus, comment, rating, date}));
        dispatch(setIsFormOpen(false));
    };

    const handleFormClose = (evt) => {
        evt.preventDefault();
        dispatch(setIsFormOpen(false));
    }

    const handleFormInputChange = (evt) => {
        setReview({
            ...review,
            [evt.target.id]: evt.target.value,
        });
    };

    const handleCommentRatingChange = (evt) => {
        setReview({
            ...review,
            rating: parseFloat(evt.target.value),
        });
    };

    return <>
        <div className="modal"
             onClick={handleFormClose}
        />
        <form className="review-form" action="#" method="post" onSubmit={sendForm}>
            <button className="review-form__close-button"
                    type="button"
                    aria-label="Закрыть форму"
                    onClick={handleFormClose}
            />
            <h2 className="review-form__title">Оставить отзыв</h2>
            <div className="review-form__wrapper">
                <label className="form__input-name" htmlFor="name">Пожалуйста, заполните поле</label>
                <input className="form__input form__input--text"
                       type="text"
                       name="name"
                       id="name"
                       placeholder="Имя"
                       value={review.user}
                       autoFocus
                       required
                       onChange={handleFormInputChange}
                />
                <input className="form__input form__input--text"
                       type="text"
                       name="plus"
                       id="plus"
                       placeholder="Достоинства"
                       value={review.plus}
                       onChange={handleFormInputChange}
                />
                <input className="form__input form__input--text"
                       type="text"
                       name="name3"
                       id="name3"
                       placeholder="Недостатки"
                       value={review.minus}
                       onChange={handleFormInputChange}
                />
                <div className="review-form__rating">
                    <span className="review-form__rating-title">Оцените товар:</span>
                    {ratings.map((item) =>
                        <ReviewRatingItem
                            item={item}
                            handleOnChange={handleCommentRatingChange}
                            rating={review.rating}
                            key={`${item.rating}-stars`}
                        />
                    )}
                </div>
                <textarea
                    className="review-form__textarea"
                    id="comment"
                    name="comment"
                    rows="5"
                    placeholder="Комментарий"
                    value={review.comment}
                    onChange={handleFormInputChange}
                    required
                />
            </div>
            <button
                className="review-form__submit-button"
                type="submit"
                onClick={sendForm}
            >оставить отзыв
            </button>
        </form>
    </>;
};

export default ReviewForm;
