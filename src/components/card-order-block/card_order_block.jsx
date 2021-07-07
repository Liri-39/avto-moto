import React from "react";
import {useSelector} from "react-redux";
import {getOffer} from "../../store/selectors";
import {priceFormat} from "../../utils"

const CardOrderBlock = () => {
    const offer = useSelector(getOffer);

    return <>
    <h1 className="card__title">{offer.title}</h1>
        <div className="card__feature">
            {offer.features.map((item) =>
                <span className={`card__feature-item card__feature-item--${item.typeId}`}>{item.title}</span>
            )}
        </div>
        <div className="card__price-block">
            <span className="card__price-actual">{priceFormat(offer.price)} ₽</span>
            <span className="card__price-old">{priceFormat(offer.oldPrice)} ₽</span>
        </div>
        <button className="card__button card__button--request">оставить заявку</button>
        <button className="card__button card__button--credit">В КРЕДИТ ОТ 11 000 ₽</button>
    </>
};

export default CardOrderBlock;
