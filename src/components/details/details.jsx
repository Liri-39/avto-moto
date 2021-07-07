import React from 'react';
import {useSelector} from "react-redux";
import {getOffer} from "../../store/selectors";

const Details = () => {
    const offer = useSelector(getOffer);

    return <dl className="details-list" aria-label="Характеристики">
        {offer.details.map((item) =>
            <>
                <dt key={item.title}>{item.title}</dt>
                <dd key={item.description}>{item.description}</dd>
            </>
        )}
    </dl>
};

export default Details;
