import React from 'react'
import { Flex } from '@mantine/core'
import Link from 'next/link'

export const Footer = () => {
  return (
    <footer>
      <Flex>
        <Link href='/'>Main page</Link>
      </Flex>
      <div>Book</div>
    </footer>
  )
}
