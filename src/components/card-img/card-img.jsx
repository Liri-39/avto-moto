import React, {useState} from "react";
import {useSelector} from "react-redux";
import {getOffer} from "../../store/selectors";
import {MAX_IMG_COUNT} from "../../const";

const CardImg = () => {

    const [imageIndex, setImageIndex] = useState(0);
    const offer =  useSelector(getOffer);
    const count = offer.images.length < MAX_IMG_COUNT ? offer.images.length : MAX_IMG_COUNT ;

    const onLeftButtonClick = (evt) => {
        evt.preventDefault();
        if (imageIndex > 0) {
            setImageIndex(imageIndex - 1);
        }
    };

    const onRightButtonClick = (evt) => {
        evt.preventDefault();
        if (imageIndex < count-1) {
            setImageIndex(imageIndex + 1);
        }
    };

    return <div className="slider">
        <div className="slider__tag">
            <span>new model</span>
        </div>
        <img className="slider__photo" src={offer.images[imageIndex]} width="600" height="375" alt={`Изображение ${imageIndex}`} />
        <div className="slider__preview-block">
            <button className="slider__button slider__button--left"
                    type="button"
                    onClick={onLeftButtonClick}
                    disabled ={imageIndex === 0}
            >
                <svg width="20" height="13" viewBox="0 0 20 13" fill="none">
                    <path d="M1.00427 6.17188L6.91841 0.368597M1.00427 6.17188L6.69294 11.9692M1.00427 6.17188L19.9813 6.35128"/>
                </svg>
            </button>
            {offer.images.slice(0, count).map((image, i) => (
                <img className="slider__preview-item" src={image} key={`${i}-photo`} width="128" height="80" alt={`Изображение ${i}`} />
            ))}
            <button className="slider__button slider__button--right"
                    type="button"
                    onClick={onRightButtonClick}
                    disabled ={imageIndex === (count-1)}
            >
                <svg width="20" height="13" viewBox="0 0 20 13" fill="none">
                    <path d="M18.9873 6.17188L13.0747 0.368597M18.9873 6.17188L13.3001 11.9692M18.9873 6.17188L0.0150977 6.35128"/>
                </svg>
            </button>
        </div>
    </div>
};

export default CardImg;
