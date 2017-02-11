import React, { PropTypes } from 'react';
import CheckButtonGroup from './checkButtonGroup';
import RadioButtonGroup from './radioButtonGroup';

const ButtonGroup = (props) => {
  if (props.implyAll) {
    let implyAllOption = {
      name: props.options[0].name,
      value: 'All',
      checked: false,
      label: 'All'
    };
    props.options.unshift(implyAllOption);
  }
  if (props.implyNone) {
    let implyNoneOption = {
      name: props.options[0].name,
      value: 'None',
      checked: false,
      label: 'None'
    };
    props.options.push(implyNoneOption);
  }
  return props.multiple ?
    <CheckButtonGroup {...props} /> : <RadioButtonGroup {...props} />;
};

ButtonGroup.propTypes = {
  name: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.any,
    checked: PropTypes.bool,
    label: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
    ]),
    onChange: PropTypes.func
  })),
  multiple: PropTypes.bool,
  implyAll: PropTypes.bool,
  implyNone: PropTypes.bool,
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  onChange: PropTypes.func
};

export default ButtonGroup;
