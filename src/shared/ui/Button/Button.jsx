import React from 'react'

import './Button.scss';
import classNames from 'classnames';

export const Button = ({children, onClick, variant = 'base', size = 'md'}) => {
  return (
    <button onClick={onClick} className={classNames('button', {[`button--${variant}`]: Boolean(variant), [`button--${size}`]: Boolean(size)})}>{children}</button>
  )
}
