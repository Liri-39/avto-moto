import React from "react";
import MapY from "../map/map";

const Contacts = () => {
    return <div className="contacts">
        <dl className="contacts__list">
            <dt className="contacts__item-title">Адрес</dt>
            <dd className="contacts__item-content">
                <span>Санкт-Петербург,</span>
                <span>набережная реки Карповки, дом 5</span>
            </dd>
            <dt className="contacts__item-title">Режим работы</dt>
            <dd className="contacts__item-content">Ежедневно, с 10:00 до 21:00</dd>
            <dt className="contacts__item-title">Телефон</dt>
            <dd className="contacts__item-content">
                <a href="tel:88003335599">8 (800) 333-55-99</a>
            </dd>
            <dt className="contacts__item-title">E-mail</dt>
            <dd className="contacts__item-content">
                <a href="mailto:info@avto-moto.ru">info@avto-moto.ru</a>
            </dd>
        </dl>
        {<MapY/>}
    </div>
};

export default Contacts;
