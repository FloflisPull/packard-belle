import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '../src/Button/Button';
import GenericWindow from '../src/Window/GenericWindow';
import StaticWindow from '../src/Window/StaticWindow';
import ExplorerIcon from '../src/Icon/ExplorerIcon';
import img from '../src/Icon/images/directory_closed.png';

const noop = () => {
  console.log('run')
};

storiesOf('Button', module)
  .add('button', () => <Button>Button</Button>);

storiesOf('Windows', module)
  .add('Generic window', () => <GenericWindow>Window</GenericWindow>)
  .add('Static window', () => (
    <StaticWindow
      title="Title"
      onClose={ noop }
      onMinimize={ noop }
      onHide={ noop }
    >
      Windows
    </StaticWindow>
  ));

storiesOf('Icons', module)
  .add('ExplorerIcon', () => (
    <ExplorerIcon
      className="test"
      onClick={ noop }
      alt="Testing this testing some more"
      src={ img }
      title="Testing this testing some more"
    />
  ))