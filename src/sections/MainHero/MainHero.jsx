import { Section, Container, Button } from '@/shared/ui'
import React from 'react'
import './MainHero.scss'
import Link from 'next/link'
import { client } from '@/utils/sanity'

export const MainHero = async () => {

  const mainPages = await client.fetch(`*[_type == "MainPage"]`) 
  const page = mainPages[0]
  console.log(page)

  return (
    <Section className="pt-0 grow flex flex-col">
      <Container className="flex flex-col grow w-full">
        <div className="hero">
          <div className='flex flex-col gap-4'>
            <p className='paragraph'>{page.tag}</p>
            <h1 className="heading heading--xl">{page.title}</h1>
            <p className='paragraph'>{page.description}</p>
            <img className='hero__image' data-src={page.mainimage?.asset?._ref} src={`https://cdn.sanity.io/images/zp7mbokg/production/${page.mainimage?.asset?._ref}`} alt='' width={1000} height={600}></img>
          </div>
          <div className='flex align-center justify-center gap-2'>
            {page.buttons.map((button) => (
              <Link href={button.Link} key={button._key}>
                <Button>{button.Text}</Button>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
