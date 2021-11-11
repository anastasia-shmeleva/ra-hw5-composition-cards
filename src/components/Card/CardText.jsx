import PropTypes from 'prop-types';

const CardText = props =>
  <p class='card-text'>{props.text}</p>

CardText.propTypes = {
  text: PropTypes.string,
}

export default CardText;