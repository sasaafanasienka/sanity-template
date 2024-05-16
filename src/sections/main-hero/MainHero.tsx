import { Section, Container } from '@shared/ui'
import React from 'react'
import './MainHero.scss'
import { Img, Lottie, Video } from '@shared/lib'
import { client } from '@sanity/client'
import { BackgroundVideo } from '@shared/lib/Background-Video/BackgroundVideo'


export const MainHero = async () => {

  const mainPages = await client.fetch(`*[_type == "mainPage"]` )   
  const page = mainPages[0] 

  return (
    <BackgroundVideo video={page.videoInstruction} className="hero">
        <Container>
          <div className="hero">
          <h1 className='heading heading--xl'>{page.title}</h1>
          <p className='paragraph'>{page.description}</p>
          </div>
      </Container>
    </BackgroundVideo>
  )
}
