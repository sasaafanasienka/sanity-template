import { Section, Container, Button } from '@/shared/ui'
import React from 'react'
import './MainHero.scss'
import Link from 'next/link'

export const MainHero = () => {      
  return ( 
    <Section className="pt-0 grow flex flex-col">
      <Container className="flex flex-col grow w-full">
        <div className="hero">
          <div className='flex flex-col gap-4'>
            <h1 className="hero__heading">Next JS + Sanity</h1>
            <p className='hero__subheading'>Precreated template</p>
          </div>
          <div className='flex align-center justify-center gap-4'>
            <Link href='/library'>
              <Button>Buttons</Button>
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  )
}
