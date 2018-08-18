// @flow
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../../_scss/w98/inputs/input.scss';

class InputText extends Component {
  static defaultProps = {
    onChange: () => {},
    onKeyDown: () => {},
    onBlur: () => {},
    onFocus: () => {},
  }

  state = {
    value: this.props.value,
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });

    this.props.onChange(e.target.value);
  }

  handleBlur = () => {
    this.props.onBlur(this.state.value);
  }

  render() {
    return (
      <input
        type="text"
        className={this.props.className}
        value={this.state.value}
        id={this.props.id}
        isDisabled={this.props.isDisabled}
        name={this.props.name || this.props.id}
        onBlur={this.handleBlur}
        onChange={this.handleChange}
        onKeyDown={this.props.onKeyDown}
        onFocus={this.props.onFocus}
      />
    );
  }
}

InputText.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  isDisabled: PropTypes.bool,
  id: PropTypes.string,
  name: PropTypes.string,
  onBlur: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired,
};

export default InputText;
