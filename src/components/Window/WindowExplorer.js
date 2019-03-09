import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import WindowProgram from './WindowProgram';
import Select from '../Inputs/Select';
import OptionsList from './OptionsList';
import './styles/WindowExplorer.scss';

class WindowExplorer extends React.Component {
  static defaultProps = {
    footer: [],
    menuOptions: [],
  };

  render() {
    const { props } = this;
    return (
      <WindowProgram
        className={cx('WindowExplorer', props.className)}
        icon={props.icon}
        onClose={props.onClose}
        onMinimize={props.onMinimize}
        onMaximize={props.onMaximize}
        onRestore={props.onRestore}
        title={props.title}
        resizable={props.resizable}
        footer={props.footer}
        menuOptions={props.menuOptions}
        maximizeOnOpen={props.maximizeOnOpen}
        changingState={props.changingState}
      >
        {props.explorerOptions && (
          <OptionsList
            className="WindowExplorer__options"
            options={props.explorerOptions}
          />
        )}
        <menu className="WindowExplorer__address">
          <div className="WindowExplorer__address__title">Address</div>
          <Select placeholder={<span>Test</span>} isDisabled />
        </menu>
        <div className="WindowExplorer__view">{props.children}</div>
      </WindowProgram>
    );
  }
}

WindowExplorer.propTypes = {
  ...WindowProgram.propTypes,
  explorerOptions: PropTypes.shape(OptionsList.propTypes.options),
};

export default WindowExplorer;
