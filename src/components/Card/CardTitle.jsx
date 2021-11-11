import PropTypes from 'prop-types';

const CardTitle = props =>
  <h5 class='card-title'>{props.title}</h5>

CardTitle.propTypes = {
  title: PropTypes.string,
}

export default CardTitle;