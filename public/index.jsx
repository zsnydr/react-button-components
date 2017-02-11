import React from 'react';
import ReactDOM from 'react-dom';
import ButtonGroup from './buttonGroup';

let options = [
  {name: 'task', value: 'Configure DB', checked: false, label: 'Configure DB'},
  {name: 'task', value: 'Design Server', checked: false, label: 'Design Server'},
  {name: 'task', value: 'Build Components', checked: false, label: 'Build Components'}
];

let checkButtonAttributes = {
  name: 'testCheckButtonGroup',
  options,
  multiple: true,
  implyAll: true,
  implyNone: true,
  label: 'testCheckButtonGroup',
  onChange: (e) => { console.log(`testCheckButtonGroup: ${e.target.value}`); }
};

let radioButtonAttributes = {
  name: 'testRadioButtonGroup',
  options,
  multiple: false,
  implyAll: true,
  implyNone: true,
  label: 'testRadioButtonGroup',
  onChange: (e) => { console.log(`testRadioButtonGroup: ${e.target.value}`); }
};

ReactDOM.render(
  <div>
    <ButtonGroup {...checkButtonAttributes} />
    <hr />
    <ButtonGroup {...radioButtonAttributes} />
  </div>,
  document.querySelector('.app')
);
