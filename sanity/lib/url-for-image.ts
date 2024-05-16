import createImageUrlBuilder from '@sanity/image-url'

import { dataset, projectId } from '../env'
import { ImageUrlBuilder } from 'sanity'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || '',
  dataset: dataset || '',
})

export interface UrlForImage {
  image: any,
}

export const urlForImage = (source: SanityImageSource): ImageUrlBuilder => {
  return imageBuilder?.image(source).auto('format').fit('max').quality(75)
}
