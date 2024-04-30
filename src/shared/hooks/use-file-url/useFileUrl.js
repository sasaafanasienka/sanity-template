export const useFileUrl = () => {
  const PROJECT_ID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
  const DATASET = process.env.NEXT_PUBLIC_SANITY_DATASET

  const getImageUrl = (file) => {
    return `https://cdn.sanity.io/images/${PROJECT_ID}/${DATASET}/${file}`
  }

  const getFileUrl = (file) => {
    return `https://cdn.sanity.io/files/${PROJECT_ID}/${DATASET}/${file}`
  }

  return {getFileUrl, getImageUrl}
}