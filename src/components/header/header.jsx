import React from "react";

const Header = () => {
    return <header className="header" aria-label="Шапка сайта">
        <div className="header__wrapper">
            <a href="#" className="header__logo logo">
                <img src="/img/car.svg" alt="Логотип Avto-Moto"/>
                <div className="logo__text">
                    <span>Avto</span>
                    <span>Moto</span>
                </div>
            </a>
            <nav className="header__nav  nav" aria-label="Главное меню">
                <ul className="nav__list">
                    <li className="nav__item">
                        <a href="#" className="nav__item-link">Автомобили</a>
                    </li>
                    <li className="nav__item">
                        <a href="#" className="nav__item-link">Контакты</a>
                    </li>
                    <li className="nav__item">
                        <a href="#" className="nav__item-link">Услуги</a>
                    </li>
                    <li className="nav__item">
                        <a href="#" className="nav__item-link">Вакансии</a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
};

export default Header;
