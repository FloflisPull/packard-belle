import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import Checkbox from '../src/Inputs/Checkbox';
import InputText from '../src/Inputs/InputText';
import SelectMultiple from '../src/Inputs/SelectMultipleSimple';
import Select from '../src/Inputs/Select';
import SelectBox from '../src/Inputs/SelectBox';
import ListIcon from '../src/Icon/ListIcon';
import ExplorerIcon from '../src/Icon/ExplorerIcon';
import img from '../src/Icon/images/directory_closed.png';

const noop = () => {};

class RadioTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'checked',
    }
  }
  onChange = (e) => {
    this.setState({ value: e.target.value });
  }
  render() {
    const { props } = this;
    return (
      <div>
        { props.options.map(option =>(
          <div key={`${option.value}`}>
            <Checkbox
              name={props.name}
              type={props.type}
              onChange={this.onChange}
              checked={this.state.value === option.value}
              {...option}
            />
          </div>
        ))}
      </div>
    )
  }
}

class CheckboxTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: false,
    }
  }
  onChange = (e) => {
    const value = e.target.value;
    this.setState({ value: value !== this.state.value ? value : null });
  }
  render() {
    const { props } = this;
    return (
      <Checkbox
        key={`${props.value}`}
        name={props.name}
        type={props.type}
        onChange={this.onChange}
        checked={this.state.value === props.value}
        {...props}
      />
    )
  }
}

class SelectBoxState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: [],
    }
  }

  handleChange(val) {
    if (!this.props.multiple) {
      this.setState({ selected: val });
      return;
    }

    if (this.state.selected.some(selectedEntry => selectedEntry === val )) {
      this.setState({
        selected: this.state.selected.filter(selectedEntry => selectedEntry !== val),
      });
      return;
    }

    this.setState({
      selected: [...this.state.selected, val],
    });
  }

  render() {
    return (
      <div>
        <SelectBox
          onClick={(val) => this.handleChange(val)}
          options={[
            {
              title: 'Testing6 test',
              icon: img,
              value: 'TestValue1',
              alt: 'test',
            },
            {
              title: 'Testing7 Testing Test another test ohhhh right',
              icon: img,
              value: 'TestValue2',
              alt: 'test'
            },
            {
              title: 'Testing8',
              icon: img,
              value: 'TestValue3',
              alt: 'test'
            },
            {
              title: 'Testing9 Test Test',
              value: 'TestValue4',
              alt: 'test'
            },
            {
              title: 'Testing0',
              icon: img,
              value: 'TestValue5',
              alt: 'test'
            },
          ]}
          selected={this.state.selected}
          component={this.props.component}
        />
      </div>
    );
  }
}

storiesOf('Inputs', module)
  .add('checkbox', () => (
    <div>
      <CheckboxTest
        type="checkbox"
        label="Label"
        id="ID"
        value="checkit"
      />
      <CheckboxTest
        type="checkbox"
        label="Label2"
        id="ID2s"
        value="checkit"
        disabled
      />
    </div>
  ))
  .add('radio', () => (
    <div>
      <RadioTest
        name="radio"
        value='option3'
        options={[{
          label: 'Option 1',
          id: 'option1',
          value: 'option1',
          type: 'radio',
        }, {
          label: 'Option 2',
          id: 'option2',
          value: 'option2',
          type: 'radio',
        }, {
          label: 'Option 3',
          id: 'option3',
          value: 'option3',
          type: 'radio',
          disabled: true,
        }]}
      />
    </div>
  ))
  .add('text', () => (
    <InputText />
  ))
  .add('select multiple basic', () => (
    <SelectMultiple
      options={[{
        name: 'option1',
        value: 'option1',
      }, {
        name: 'option2',
        value: 'option2',
      }, {
        name: 'option3',
        value: 'option3',
      }]}
      multiple
    />
  ))
  .add('select', () => (
    <Select
      options={[{
        label: 'option1',
        value: 'option1',
      }, {
        label: 'option2',
        value: 'option2',
      }, {
        label: 'option3',
        value: 'option3',
      }, {
        label: 'Option4',
        value: 'option4',
      }]}
      value="option1"
      useIcons
    />
  ))
  .add('selectbox', () => (
    <SelectBoxState multiple />
  ))
  .add('selectbox with icons', () => (
    <SelectBoxState multiple component={ListIcon} />
  ))
  .add('selectbox with other icon type', () => (
    <SelectBoxState multiple component={ExplorerIcon} />
  ));;
