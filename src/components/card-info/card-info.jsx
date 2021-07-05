import React from 'react';
import Details from "../details/details";
import Contacts from "../contacts/contacts";
import Reviews from "../reviews/reviews";

const CardInfo = () => {
    return <>
        <div className="tab">
            <span className="tab__item tab__item--active">Характеристики</span>
            <span className="tab__item">Отзывы</span>
            <span className="tab__item">Контакты</span>
        </div>
        <div className="tab__content">
            {<Contacts/>}
        </div>
    </>
};

export default CardInfo;
