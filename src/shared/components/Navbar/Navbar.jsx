import { Button, Container } from '@/shared/ui'
import { Flex } from '@mantine/core'
import Link from 'next/link'

import './Navbar.scss';
// import classes from './Navbar.module.scss';

export const Navbar = () => {
  return (
    <header className='navbar'>
      <Container className='navbar__container'>
        <div className='navbar__inner'>
          <Link href='/'>Main page</Link>
          <nav></nav>
          <Flex>
            <Button>Get started</Button>
            {/* <Button>Get started</Button> */}
          </Flex>
        </div>
      </Container>
    </header>
  )
}
