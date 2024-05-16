import React from 'react'
import Link from 'next/link'
import { Container } from '@shared/ui'
import './Footer.scss'

export const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <div className='flex justify-between'>
          <div className='flex items-center gap-4 flex-wrap'> 
            <Link className='text-nowrap' href='/'>Main page</Link>
            <Link className='text-nowrap' href='/'>Main page</Link>
            <Link className='text-nowrap' href='/'>Main page</Link>
          </div>
          <div>
            Sasa Afanasienka
          </div>
        </div>
      </Container>
    </footer>
  )
}
