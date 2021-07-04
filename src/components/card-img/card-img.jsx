import React from 'react';

const CardImg = () => {
    return <div className="slider">
        <div className="slider__tag">
            <span>new model</span>
        </div>
        <img className="slider__photo" src="./img/desktop_slide_1.png" width="600" height="375" alt="Изображение1" />
        <div className="slider__preview-block">
            <button className="slider__button slider__button--left">
                <svg width="20" height="13" viewBox="0 0 20 13" fill="none">
                    <path d="M1.00427 6.17188L6.91841 0.368597M1.00427 6.17188L6.69294 11.9692M1.00427 6.17188L19.9813 6.35128"/>
                </svg>
            </button>
            <img className="slider__preview-item" src="./img/desktop_slide_1.png" width="128" height="80" alt="Изображение1" />
            <img className="slider__preview-item" src="./img/desktop_slide_2.png" width="128" height="80" alt="Изображение1" />
            <img className="slider__preview-item" src="./img/desktop_slide_3.png" width="128" height="80" alt="Изображение1" />
            <button className="slider__button slider__button--right slider__button--active">
                <svg width="20" height="13" viewBox="0 0 20 13" fill="none">
                    <path d="M18.9873 6.17188L13.0747 0.368597M18.9873 6.17188L13.3001 11.9692M18.9873 6.17188L0.0150977 6.35128"/>
                </svg>
            </button>
        </div>
    </div>
};

export default CardImg;
