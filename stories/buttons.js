import React from 'react';
import { storiesOf } from '@storybook/react';
import FormButton from '../src/components/Button/FormButton';
import NavButton from '../src/components/Button/NavButton';
import StartButton from '../src/components/Button/StartButton';
import ProgramButton from '../src/components/Button/ProgramButton';
import SmallIconButton from '../src/components/Button/SmallIconButton';
import LargeIconButton from '../src/components/Button/LargeIconButton';
import img from './directory_closed.png';

const noop = () => {
  console.log('run')
};

storiesOf('Buttons', module)
  .add('form button', () => (
    <div>
      <p><FormButton onClick={noop}>Regular</FormButton></p>
      <p><FormButton className="active" onClick={noop}>Pressed</FormButton></p>
      <p><FormButton onClick={noop} disabled>Disabled</FormButton></p>
    </div>
  ))
  .add('nav button', () => <NavButton />)
  .add('start button', () => <StartButton />)
  .add('program button', () => (
    <div>
      <ProgramButton
        icon={img}
        onClick={noop}
      >
        Inactive
      </ProgramButton>
      <ProgramButton
        icon={img}
        onClick={noop}
        isActive
      >
        Active
      </ProgramButton>
      <ProgramButton
        icon={img}
        onClick={noop}
        className="clicked"
      >
        Clicked
      </ProgramButton>
    </div>
  ))
  .add('small icon button', () => (
    <div>
      <SmallIconButton
        icon={img}
        onClick={noop}
      /> Regular
      <br />
      <SmallIconButton
        icon={img}
        onClick={noop}
        disabled
      /> Disabled
      <br />
      <SmallIconButton
        icon={img}
        onClick={noop}
        isActive
        className="clicked"
      /> Active
    </div>
  ))
  .add('large icon button', () => (
      <div>
        <LargeIconButton
          onClick={noop}
          icon={img}
        >
          Button
        </LargeIconButton>
        <LargeIconButton
          onClick={noop}
          icon={img}
          disabled
        >
          Disabled
        </LargeIconButton>
      </div>
    )
  );
