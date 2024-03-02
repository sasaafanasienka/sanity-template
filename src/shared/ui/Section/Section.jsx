import React from 'react'
import classes from './Section.module.scss';

export const Section = ({children}) => {
  return (
    <section className={classes.section}>{children}</section>
  )
}
