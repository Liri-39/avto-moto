import PropTypes from 'prop-types';
import {contactsPropTypes} from './contacts-prop-types';
import {featuresPropTypes} from './features-prop-types';
import {detailsPropTypes} from './details-prop-types';

export const offerPropTypes = PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    oldPrice: PropTypes.number.isRequired,
    images: PropTypes.arrayOf(PropTypes.string),
    features: PropTypes.arrayOf(featuresPropTypes).isRequired,
    details: PropTypes.arrayOf(detailsPropTypes).isRequired,
    contacts: contactsPropTypes,
});
