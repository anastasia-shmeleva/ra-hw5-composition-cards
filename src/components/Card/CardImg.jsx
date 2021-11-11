import PropTypes from 'prop-types';

const CardImg = props => 
  <img src={props.img} className='card-img-top' alt='logo'></img>

CardImg.propTypes = {
  title: PropTypes.string,
}

export default CardImg;