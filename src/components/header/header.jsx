import React from 'react';

const Header = () => {
    return <header className="header">
        <div className="header__wrapper">
            <div className="header__logo logo">
                <img src="/img/car.svg" alt="Логотип Avto-Moto"/>
                <div className="logo__text">
                    <span>Avto</span>
                    <span>Moto</span>
                </div>
            </div>
            <nav className="nav">
                <ul className="nav__list">
                    <li className="nav__item">
                        <span>Автомобили</span>
                    </li>
                    <li className="nav__item">
                        <span>Контакты</span>
                    </li>
                    <li className="nav__item">
                        <span>Услуги</span>
                    </li>
                    <li className="nav__item">
                        <span>Вакансии</span>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
};

export default Header;
