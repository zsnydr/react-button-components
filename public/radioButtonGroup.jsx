import React, { Component, PropTypes } from 'react';
import RadioButton from './radioButton';

class RadioButtonGroup extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = this.props.options.reduce((store, next) => {
      store[next.value] = next.checked;
      return store;
    }, {});
    let noButtonsChecked = true;
    for (let key in this.state) {
      if (this.state[key]) noButtonsChecked = false;
    }
    if (this.props.implyAll) {
      this.state['All'] = noButtonsChecked;
    } else if (this.props.implyNone) {
      this.state['None'] = noButtonsChecked;
    }
  }

  onChange(e) {
    let value = e.target.value.toString();
    let update = this.props.options.reduce((store, next) => {
      store[next.value] = next.value === value;
      return store;
    }, {});
    this.setState(update);
    this.props.onChange(e);
  }

  render() {
    return (
      <form>
        {this.props.options.map((option) => {
          let attributes = {
            key: option.value,
            name: option.name,
            value: option.value,
            label: option.label,
            checked: this.state[option.value],
            onChange: this.onChange
          };
          return <RadioButton {...attributes} />;
        })}
      </form>
    );
  }
}

RadioButtonGroup.propTypes = {
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

export default RadioButtonGroup;
