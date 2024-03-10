import { Button, Container, Section } from '@/shared/ui'
import React from 'react'

const Library = () => {
  return (
    <>
      <Section>
        <Container>
          <div className='flex flex-col gap-8'>
            <h2 className='text-3xl font-bold'>Buttons</h2>
            <div>
              <Button>Regular button</Button>
              <Button>Regular button</Button>
              <Button>Regular button</Button>
            </div>
          </div>
        </Container>
      </Section>
      <Section><Container></Container></Section>
      <Section><Container></Container></Section>
    </>
  )
}
export default Library