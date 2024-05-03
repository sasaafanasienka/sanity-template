import imageUrlBuilder from '@sanity/image-url'

const PROJECT_ID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const DATASET = process.env.NEXT_PUBLIC_SANITY_DATASET

const builder = imageUrlBuilder({projectId: PROJECT_ID, dataset: DATASET})
export const urlImage = (source) => builder.image(source)
export const urlFile = (source) => {
  console.log('Source', source)
  const [type, path, format] = source.split('-');

  const types = {
    file: 'files'
  }

  return `https://cdn.sanity.io/${types[type] ?? 'files'}/${PROJECT_ID}/${DATASET}/${path}.${format}`
}