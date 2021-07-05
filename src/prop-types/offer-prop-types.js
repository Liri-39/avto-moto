import PropTypes from 'prop-types';
import {contactsPropTypes} from './contacts-prop-types';
import {featuresPropTypes} from './features-prop-types';
import {detailsPropTypes} from './details-prop-types';

export const offerPropTypes = PropTypes.shape({
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.string.isRequired,
    oldPrice: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    features: PropTypes.arrayOf(featuresPropTypes).isRequired,
    details: PropTypes.arrayOf(detailsPropTypes).isRequired,
    contacts: contactsPropTypes,
});
