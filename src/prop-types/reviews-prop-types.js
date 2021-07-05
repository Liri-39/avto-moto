import PropTypes from 'prop-types';

export const reviewsPropTypes = PropTypes.shape({
    id: PropTypes.number.isRequired,
    user: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    plus: PropTypes.string.isRequired,
    minus: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    isPositive: PropTypes.bool.isRequired,
});
