import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {getActiveTab} from '../../store/selectors';
import Details from "../details/details";
import Contacts from "../contacts/contacts";
import Reviews from "../reviews/reviews";
import {TabType} from "../../const";
import {changeActiveTab} from "../../store/action";

const CardInfo = () => {
    const dispatch = useDispatch();
    const tab =  useSelector(getActiveTab);
    console.log (tab);

    let content;
    switch (tab) {
        case TabType.CONTACTS.id :
            content = <Contacts/>;
            break;
        case TabType.REVIEWS.id :
            content = <Reviews/>;
            break;
        default:
            content = <Details/>;
            break;
    }

    const onTabClick = (evt, id) => {
        evt.preventDefault();
        if (tab !== evt.target.id) {
            dispatch(changeActiveTab(id));
        }
    };

    return <div className="tabs">
        <ul className="tabs__list">
            {Object.values(TabType).map((item) =>
            <li className="tabs__item-container">
                <a href="#"
                   id={item.id}
                   className={`tabs__item  ${item.id === tab ? `tabs__item--active` : ``}`}
                   onClick={(evt) => onTabClick(evt, item.id)}
                >{item.name}</a>
            </li>)}
        </ul>
        <div className="tabs__content">
            {content}
        </div>
    </div>
};

export default CardInfo;
