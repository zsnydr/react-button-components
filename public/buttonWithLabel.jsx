import React, { Component, PropTypes } from 'react';

const ButtonWithLabel = (props) => {
  let attributes = {
    type: props.type,
    name: props.name,
    value: props.value,
    checked: props.checked,
    onChange: props.onChange
  };
  let labelStyle = { padding: "10px" };
  return (
    <label htmlFor={props.name} style={labelStyle}>
      {props.label}
      <input {...attributes} />
    </label>
  );
};

ButtonWithLabel.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.any,
  checked: PropTypes.bool,
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  onChange: PropTypes.func
};

export default ButtonWithLabel;
