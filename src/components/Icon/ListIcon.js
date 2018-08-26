import React from 'react';
import classnames from 'classnames';
import AbstractIcon, { iconProps } from './AbstractIcon';
import '../../_scss/w98/icons/icon--list.scss';

const ListIcon = props => (
  <AbstractIcon
    onClick={ props.onClick }
    onDoubleClick={ props.onDoubleClick }
    onContextMenu={ props.onContextMenu }
    alt={ props.alt }
    className={ classnames('icon--list', props.className) }
    icon={ props.icon }
    title={ props.title }
    value={ props.value }
  />
);

ListIcon.propTypes = iconProps;

export default ListIcon;
