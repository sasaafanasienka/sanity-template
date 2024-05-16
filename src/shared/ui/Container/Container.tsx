import React from 'react'
import classes from './Container.module.scss'
import { combine } from '@shared/utils'

export interface ContainerProps {
  children: React.ReactNode,
  className?: string
}

export const Container = ({children, className}: ContainerProps) => {
  return (
    <div className={combine(classes.container, className)}>{children}</div>
  )
}
