import { Section, Container } from '@/shared/ui'
import React from 'react'

export const MainHero = () => {
  return (
    <Section>
      <Container>
        <h1>Main <span style={{color: 'var(--color-accent)'}}>Hero</span></h1>
      </Container>
    </Section>
  )
}
