import PropTypes from 'prop-types';
import CardImg from './CardImg';

const Card = props => {
  return (
    <div className='card' style={{width: '18rem'}}>
      <CardImg img={props.img}/>
      <div className='card-body'>{props.children}</div>
    </div>
  )
}

Card.propTypes = {
  img: PropTypes.string,
  children: PropTypes.node,
}

export default Card;