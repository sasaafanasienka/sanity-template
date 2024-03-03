import React from 'react'
import classes from './Container.module.scss'
import { combine } from '@/shared/utils'

export const Container = ({children, className}) => {
  return (
    <div className={combine(classes.container, className)}>{children}</div>
  )
}
