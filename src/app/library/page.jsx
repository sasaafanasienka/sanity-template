'use client'
import '@mantine/core/styles.css';

import { Button, Container, Section } from '@/shared/ui'
import { Modal } from '@mantine/core'
import React from 'react'
import { useDisclosure } from '@mantine/hooks';
import { Icon123, Icon24Hours, Icon360View, Icon3dCubeSphere, IconEyeX } from '@tabler/icons-react';

const Library = () => {

  const [opened, { open, close }] = useDisclosure(false, { onOpen: () => console.log('onOpen'), onClose: () => console.log('onClose') });

  return (
    <>
      <Modal opened={opened} onClose={close} title="Header is sticky">
        Zalupa
      </Modal>
      <Section>
        <Container>
          <div className='flex flex-col gap-8'>
            <h2 className='text-3xl font-bold'>Buttons</h2>
            <div className='flex gap-4'>
              <Button onClick={open}>Base</Button>
              <Button onClick={open} variant='dark'>Dark</Button>
              <Button onClick={open} variant='light'>Light</Button>
              <Button onClick={open} variant='white'>White</Button>
              <Button onClick={open} variant='outline'>Outline</Button>
            </div>
            <div className='flex gap-4'>
              <Button onClick={open} size="sm">Base</Button>
              <Button onClick={open} variant='dark' size="sm">Dark</Button>
              <Button onClick={open} variant='light' size="sm">Light</Button>
              <Button onClick={open} variant='white' size="sm">White</Button>
              <Button onClick={open} variant='outline' size="sm">Outline</Button>
            </div>
            <div className='flex gap-4'>
              <Button onClick={open} size="xs">Base</Button>
              <Button onClick={open} variant='dark' size="xs">Dark</Button>
              <Button onClick={open} variant='light' size="xs">Light</Button>
              <Button onClick={open} variant='white' size="xs">White</Button>
              <Button onClick={open} variant='outline' size="xs">Outline</Button>
            </div>
            <div className='flex gap-4'>
              <Button onClick={open} size="lg">Base</Button>
              <Button onClick={open} variant='dark' size="lg">Dark</Button>
              <Button onClick={open} variant='light' size="lg">Light</Button>
              <Button onClick={open} variant='white' size="lg">White</Button>
              <Button onClick={open} variant='outline' size="lg">Outline</Button>
            </div>
            <div className='flex gap-4'>
              <Button onClick={open} size="xl">Base</Button>
              <Button onClick={open} variant='dark' size="xl">Dark</Button>
              <Button onClick={open} variant='light' size="xl">Light</Button>
              <Button onClick={open} variant='white' size="xl">White</Button>
              <Button onClick={open} variant='outline' size="xl">Outline</Button>
            </div>
            <div className='flex gap-4'>
              <Button onClick={open}>Base
                <Icon123/>
              </Button>
              <Button onClick={open} variant='dark'>
                <Icon360View/>
                Dark</Button>
              <Button onClick={open} variant='light'>
                <IconEyeX/>Light</Button>
              <Button onClick={open} variant='white'><Icon24Hours/></Button>
              <Button onClick={open} variant='outline'>Outline <Icon3dCubeSphere/></Button>
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