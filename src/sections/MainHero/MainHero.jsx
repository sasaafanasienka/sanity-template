import { Section, Container, Button } from '@/shared/ui'
import React from 'react'
import './MainHero.scss'
import Link from 'next/link'
import { client } from '@/utils/sanity'

export const MainHero = async () => {

  const mainPages = await client.fetch(`*[_type == "MainPage"]{title, description, buttons}`)
  const page = mainPages[0]
  console.log(mainPages)

  return (
    <Section className="pt-0 grow flex flex-col">
      <Container className="flex flex-col grow w-full">
        <div className="hero">
          <div className='flex flex-col gap-4'>
            <h1 className="hero__heading">{page.title}</h1>
            <p className='hero__subheading'>{page.description}</p>
          </div>
          <div className='flex align-center justify-center gap-4'>
            {page.buttons.map((button) => (
            <Link href={button.Link}>
              <Button>{button.Text}</Button>
            </Link>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
