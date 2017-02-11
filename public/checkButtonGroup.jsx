import React, { Component, PropTypes } from 'react';
import CheckButton from './checkButton';

class CheckButtonGroup extends Component {
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
    if (noButtonsChecked) {
      if (this.props.implyAll) {
        for (let key in this.state) {
          this.state[key] = key !== 'None';
        }
      } else if (this.props.implyNone) {
        this.state['None'] = true;
      }
    }
  }

  onChange(e) {
    let value = e.target.value.toString();
    let update;

    if (value === 'All') {
      update = this.props.options.reduce((store, next) => {
        store[next.value] = !this.state['All'] && next.value !== 'None';
        return store;
      }, {});
      if (this.state['All']) {
        update['None'] = true;
      }
    } else if (value === 'None') {
      if (this.state['None']) {
        // can't uncheck 'None' if no other buttons are checked
        update = { 'None': true };
      } else {
        update = this.props.options.reduce((store, next) => {
          store[next.value] = false;
          return store;
        }, {});
        update['None'] = true;
      }
    } else {
      update = { [value]: !this.state[value] };
      if (!this.state[value]) update['None'] = false;
      if (this.state[value]) {
        let noButtonsChecked = true;
        for (let key in this.state) {
          if (this.state[key] && key !== value) noButtonsChecked = false;
        }
        if (noButtonsChecked) update['None'] = true;
      }
    }
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
          return <CheckButton {...attributes} />;
        })}
      </form>
    );
  }
}

CheckButtonGroup.propTypes = {
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

export default CheckButtonGroup;
