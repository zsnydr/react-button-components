import React, { PropTypes } from 'react';
import ButtonWithLabel from './buttonWithLabel';

const RadioButton = (props) => {
  return <ButtonWithLabel {...props} type={'radio'} />;
}

RadioButton.propTypes = {
  name: PropTypes.string,
  value: PropTypes.any,
  checked: PropTypes.bool,
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  onChange: PropTypes.func
};

export default RadioButton;
