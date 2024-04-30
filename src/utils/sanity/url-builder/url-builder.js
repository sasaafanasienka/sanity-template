import imageUrlBuilder from '@sanity/image-url'

const PROJECT_ID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const DATASET = process.env.NEXT_PUBLIC_SANITY_DATASET

const builder = imageUrlBuilder({projectId: PROJECT_ID, dataset: DATASET})
export const urlFor = (source) => builder.image(source)