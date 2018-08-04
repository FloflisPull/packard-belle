import React from 'react';
import '../../_scss/w98/inputs/toggle.scss';
import '../../_scss/w98/inputs/checkbox.scss';
import '../../_scss/w98/inputs/radio.scss';

const Checkbox = props => (
  <React.Fragment>
    <input
      type={props.type}
      id={props.id}
      disabled={props.disabled}
      value={props.value}
      checked={props.checked}
      onChange={props.onChange}
      name={props.name}
      disabled={props.disabled}
    />
    <label htmlFor={props.id}>
      <span>
        {props.label}
      </span>
    </label>
  </React.Fragment>
);

export default Checkbox;
