import React from 'react';
import '../../_scss/w98/inputs/toggle.scss';

const Toggle = props => (
  <React.Fragment>
    <input
      type={props.type}
      id={props.id}
      disabled={props.disabled}
      value={props.value}
      checked={props.checked}
      onChange={props.onChange}
      name={props.name}
      isDisabled={props.isDisabled}
    />
    <label htmlFor={props.id}>
      <span>
        {props.label}
      </span>
    </label>
  </React.Fragment>
);

export default Toggle;
