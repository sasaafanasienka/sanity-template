import imageUrlBuilder from '@sanity/image-url'
import {FileSource} from '@shared/types'
// import { SanityImageSource } from '@sanity/image-url/lib/types/types'

const PROJECT_ID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const DATASET = process.env.NEXT_PUBLIC_SANITY_DATASET

const builder = imageUrlBuilder({projectId: PROJECT_ID, dataset: DATASET})

export const urlFile = (source: FileSource) => {
  console.log('Source', source)
  const ref = source.asset?._ref ?? ''

  const [type, path, format] = ref.split('-');

  const types = {
    file: 'files'
  }

  return type && path && format ? (`https://cdn.sanity.io/${types[type] ?? 'files'}/${PROJECT_ID}/${DATASET}/${path}.${format}`) : ''
}