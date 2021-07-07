import React from 'react';
import {useSelector} from "react-redux";
import {getOffer} from "../../store/selectors";

const Details = () => {
    const offer = useSelector(getOffer);

    return <dl className="details-list" aria-label="Характеристики">
        {offer.details.map((item, index) =>
            <div className="details-list__pair-container" key={`title-${index}`}>
                <dt>{item.title}</dt>
                <dd>{item.description}</dd>
            </div>
        )}
    </dl>
};

export default Details;
