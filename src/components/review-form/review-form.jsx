import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {addReview, setIsFormOpen} from "../../store/action";
import ReviewRatingItem from "../review-rating-item/review-rating-item";
import {ratings} from "../../const";
import {getRandomInteger} from "../../utils";

const ReviewForm = () => {

    const [review, setReview] = useState({
        user: localStorage.length ? localStorage.getItem('user') : ``,
        plus: localStorage.length ? localStorage.getItem('plus') : ``,
        minus: localStorage.length ? localStorage.getItem('minus') : ``,
        comment: localStorage.length ? localStorage.getItem('comment') : ``,
        rating: localStorage.length ? Number(localStorage.getItem('rating')) : 0,
    });

    const dispatch = useDispatch();
    const {user, plus, minus, comment, rating} = review;

    let isError = false;
    if (user.length === 0 || comment.length === 0) {
       isError = true;
    }

    const sendForm = (evt) => {
        evt.preventDefault();
        const date = new Date().toISOString();
        const id = getRandomInteger();
        dispatch(addReview({id, user, plus, minus, comment, rating, date}));
        dispatch(setIsFormOpen(false));
        localStorage.clear();
    };

    const handleFormClose = (evt) => {
        evt.preventDefault();
        dispatch(setIsFormOpen(false));
    }

    const handleEscKeyPress = (evt) => {
        if (evt.key === `Escape`) {
            dispatch(setIsFormOpen(false));
        }
    }

    const handleFormInputChange = (evt) => {
        localStorage.setItem(evt.target.id, evt.target.value);
        setReview({
            ...review,
            [evt.target.id]: evt.target.value,
        });
    };

    const handleCommentRatingChange = (evt) => {
        localStorage.setItem('rating', evt.target.value);
        setReview({
            ...review,
            rating: parseFloat(evt.target.value),
        });
    };

    return <>
        <div className="modal"
             onClick={handleFormClose}
        />
        <form className="review-form"
              action="#"
              method="post"
              onSubmit={sendForm}
              onKeyDown={handleEscKeyPress}
        >
            <button className="review-form__close-button"
                    type="button"
                    aria-label="Закрыть форму"
                    onClick={handleFormClose}
            />
            <h2 className="review-form__title">Оставить отзыв</h2>
            <div className="review-form__wrapper">
                <label className="form__input-name" htmlFor="user">Пожалуйста, заполните поле</label>
                <input className="form__input form__input--required"
                       type="text"
                       name="user"
                       id="user"
                       placeholder="Имя"
                       value={review.user}
                       autoFocus
                       onChange={handleFormInputChange}
                />
                <label className="visually-hidden" htmlFor="plus">Расскажите о достоинствах</label>
                <input className="form__input form__input--text"
                       type="text"
                       name="plus"
                       id="plus"
                       placeholder="Достоинства"
                       value={review.plus}
                       onChange={handleFormInputChange}
                />
                <label className="visually-hidden" htmlFor="minus">Расскажите о недостатках</label>
                <input className="form__input form__input--text"
                       type="text"
                       name="minus"
                       id="minus"
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
                <label className="visually-hidden" htmlFor="comment">Оставьте комментарий</label>
                <textarea
                    className="review-form__textarea"
                    id="comment"
                    name="comment"
                    rows="5"
                    placeholder="Комментарий"
                    value={review.comment}
                    onChange={handleFormInputChange}
                />
            </div>
            <button
                className="review-form__submit-button"
                type="submit"
                onClick={sendForm}
                disabled={isError}
            >оставить отзыв
            </button>
        </form>
    </>;
};

export default ReviewForm;
