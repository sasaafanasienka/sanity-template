import React from 'react'
import './Section.scss';
import { combine } from '@shared/utils';
export interface SectionProps {
  children: React.ReactNode,
  className?: string
}

export const Section = ({children, className}: SectionProps) => {
  return (
    <section className={combine('section', className)}>{children}</section>
  )
}
