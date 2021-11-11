/* eslint-disable jsx-a11y/anchor-is-valid */
import PropTypes from 'prop-types';

const CardBtn = props =>
<a href='#' class='btn btn-primary'>{props.btnTxt}</a>

CardBtn.propTypes = {
  btnTxt: PropTypes.string,
}

export default CardBtn;