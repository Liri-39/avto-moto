import PropTypes from 'prop-types';

export const contactsPropTypes = PropTypes.shape({
    address: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    mail: PropTypes.string.isRequired,
    workingHours: PropTypes.string.isRequired,
});
