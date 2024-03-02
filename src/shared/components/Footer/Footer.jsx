import React from 'react'
import { Flex, Input, Select } from '@mantine/core'
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
