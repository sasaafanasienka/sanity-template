import React from 'react'
import classes from './Section.module.scss';

export const Section = ({children, className}) => {
  return (
    <section className={`classes.section ${className}`}>{children}</section>
  )
}
