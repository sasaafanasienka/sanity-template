import React from 'react'

import './Button.scss';
import classNames from 'classnames';
import { ButtonVariant, SIZE, Size, VARIANT } from '@shared/types';

export interface ButtonProps {
  children: React.ReactNode,
    onClick?: () => any,
    variant?: ButtonVariant,
    size?: Size
}


export const Button = ({children, onClick, variant = VARIANT.BASE, size = SIZE.MD} : ButtonProps) => {
  return (
    <button onClick={onClick ?? null} className={classNames('button', {[`button--${variant}`]: Boolean(variant), [`button--${size}`]: Boolean(size)})}>{children}</button>
  )
}
