import { Section, Container, Button } from '@/shared/ui'
import React from 'react'
import './MainHero.scss'
import { client } from '@/utils/sanity'
import { Img, Lottie } from '@/shared/lib'

export const MainHero = async () => {

  const mainPages = await client.fetch(`*[_type == "mainPage"]` )
  const page = mainPages[0]

  return (
    <Section className="pt-0 grow flex flex-col">
      <Container className="flex flex-col grow w-full">
        <div className="hero">
          <div className='flex flex-col gap-4'>
            <p className='paragraph'>{page.tag}</p>
            <h1 className="heading heading--xl">{page.title}</h1>
            <p className='paragraph'>{page.description}</p>
            <Img responsive className='hero__image' image={page.mainImage} w={400}></Img>
            <div style={{ width: '300px', height: '200px', position: 'relative' }}>
              <Lottie lottie={page.lottie}/>  
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
