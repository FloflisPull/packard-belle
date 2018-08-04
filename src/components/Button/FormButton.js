import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Button from './AbstractButton';

import '../../_scss/w98/buttons/btn--form.scss';

const FormButton = props => (
  <Button
    className={ classnames('btn--form', props.className) }
    onClick={ props.onClick }
    isActive={ props.isActive }
    disabled={props.disabled}
  >
    { props.children }
  </Button>
);

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  text: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  isActive: PropTypes.bool,
  disabled: PropTypes.bool,
};

// title, click,
// onAppearSound
// canClose?
// scrollbar style

export default FormButton;
