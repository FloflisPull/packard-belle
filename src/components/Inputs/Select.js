import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import RSelect from 'react-select';
import './_select.scss';

const DefaultOptionComponent = props => <div {...props} />;

// copied straight from react select demos with slight changes
const menuRenderer = ({
  focusedOption,
  focusOption,
  inputValue,
  instancePrefix,
  onFocus,
  onOptionRef,
  onSelect,
  optionClassName,
  optionComponent,
  options,
  removeValue,
  selectValue,
  valueArray,
  valueKey,
}) => {
  let Option = optionComponent || DefaultOptionComponent;

  return options.map((option, i) => {
    let isSelected = valueArray && valueArray.some(x => x[valueKey] === option[valueKey]);
    let isFocused = option === focusedOption;
    let optionClass = classNames(optionClassName, {
      'Select-option': true,
      'is-selected': isSelected,
      'is-focused': isFocused,
      'is-disabled': option.disabled,
    });

    return (
      <Option
        className={optionClass}
        focusOption={focusOption}
        inputValue={inputValue}
        instancePrefix={instancePrefix}
        isDisabled={option.disabled}
        isFocused={isFocused}
        isSelected={isSelected}
        key={`option-${i}-${option[valueKey]}`}
        onFocus={onFocus}
        onSelect={onSelect}
        option={option}
        optionIndex={i}
        ref={ref => { onOptionRef(ref, isFocused); }}
        removeValue={removeValue}
        selectValue={selectValue}
        backgroundImage={option.icon}
      >
        <span>
          {option.label}
        </span>
      </Option>
    );
  });
};

menuRenderer.propTypes = {
  focusedOption: PropTypes.object,
  inputValue: PropTypes.string,
  instancePrefix: PropTypes.string,
  optionClassName: PropTypes.string,
  options: PropTypes.array,
  valueArray: PropTypes.array,
  valueKey: PropTypes.string,
  focusOption: PropTypes.func,
  onFocus: PropTypes.func,
  onOptionRef: PropTypes.func,
  onSelect: PropTypes.func,
  optionComponent: PropTypes.func,
  optionRenderer: PropTypes.func,
  removeValue: PropTypes.func,
  selectValue: PropTypes.func,
};

const ValueRenderer = props => (
  <div style={{ backgroundImage: props.icon ? `url('${props.icon}')` : 'none' }}>
    {props.label}
  </div>
);
ValueRenderer.propTypes = {
  icon: PropTypes.string,
  label: PropTypes.string,
};

class Select extends Component {
  static defaultProps = {
    placeholder: '',
    searchable: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value || null,
    };
  }

  onChange = e => {
    this.setState({ value: e.value });
  }

  render() {
    const { props } = this;
    return (
      <RSelect
        {...props}
        className="Select"
        placeholder={props.placeholder}
        onChange={this.onChange}
        isOpen
        isDisabled={this.props.isDisabled}
        searchable={this.props.searchable}
        menuRenderer={this.props.useIcons ? menuRenderer : undefined}
        valueRenderer={ValueRenderer}
        value={this.state.value}
      />
    );
  }
}

export default Select;
