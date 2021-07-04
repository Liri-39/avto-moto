import React from 'react';

const CardOrderBlock = () => {
    return <>
    <h1 className="card__title">Марпех 11</h1>
        <div className="card__feature">
            <span className="card__feature-item card__feature-item--1">бензин</span>
            <span className="card__feature-item card__feature-item--2">механика</span>
            <span className="card__feature-item card__feature-item--3">100 л.с</span>
            <span className="card__feature-item card__feature-item--4">1.4 л</span>
        </div>
        <div className="card__price-block">
            <span className="card__price-actual">2&nbsp;300&nbsp;000&nbsp;₽</span>
            <span className="card__price-old">2&nbsp;&nbsp;400&nbsp;000&nbsp;₽</span>
        </div>
        <button className="card__button card__button--request">оставить заявку</button>
        <button className="card__button card__button--credit">В КРЕДИТ ОТ 11 000 ₽</button>
    </>
};

export default CardOrderBlock;
