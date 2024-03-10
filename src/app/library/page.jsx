'use client'
import '@mantine/core/styles.css';

import { Button, Container, Section } from '@/shared/ui'
import { Modal } from '@mantine/core'
import React from 'react'
import { useDisclosure } from '@mantine/hooks';

const Library = () => {

  const [opened, { open, close }] = useDisclosure(false, { onOpen: () => console.log('onOpen'), onClose: () => console.log('onClose') });

  return (
    <>
      <Modal opened={opened} onClose={close} title="Header is sticky">
        {/* {content} */}
        Zalupa
      </Modal>
      <Section>
        <Container>
          <div className='flex flex-col gap-8'>
            <h2 className='text-3xl font-bold'>Buttons</h2>
            <div>
              <Button onClick={open}>Open modal</Button>
            </div>
          </div>
        </Container>
      </Section>
      <Section><Container></Container></Section>
      <Section><Container></Container></Section>
    </>
  );
}
export default Library