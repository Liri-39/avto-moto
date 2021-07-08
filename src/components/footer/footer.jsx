import React from "react";

const Footer = () => {
    return <footer className="footer" aria-label="Подвал сайта">
        <div className="footer__wrapper">
            <ul className="footer__menu">
                <li className="footer__menu-item">
                    <a href="#">Корпоративным клиентам</a>
                </li>
                <li className="footer__menu-item">
                    <a href="#">Клиентам</a>
                </li>
                <li className="footer__menu-item">
                    <a href="#">Аренда авто</a>
                </li>
                <li className="footer__menu-item">
                    <a href="#">Каршеринг</a>
                </li>
                <li className="footer__menu-item">
                    <a href="#">Как продать авто</a>
                </li>
                <li className="footer__menu-item">
                    <a href="#">Trade-in</a>
                </li>
                <li className="footer__menu-item">
                    <a href="#">Test drive</a>
                </li>
            </ul>
        </div>
    </footer>
};

export default Footer;
