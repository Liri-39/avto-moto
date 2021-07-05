import PropTypes from 'prop-types';

export const detailsPropTypes = PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
});
