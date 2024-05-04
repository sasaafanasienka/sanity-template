import { urlForImage } from "../../../../sanity/lib/image"

export const Img = ({ responsive, image, w, ...props }) => {

  const getPlaceholder = () => `https://imgholder.ru/600x600/f3f3f3/d2d2d2&text=${alt.toUpperCase().split(' ').join('+')}&font=kelson`
  const getSrcW = (w) => urlForImage(image?.asset?._ref).width(w).auto('format').quality(75).url()
  const getSrc = () => urlForImage(image?.asset?._ref).auto('format').quality(75).url()
  
  const src = w ? getSrcW(w) : getSrc()
  const alt = image?.alt || 'Decorative image'

  return (
    src && responsive ? (
      responsive ? (
        <picture {...props}>
          <source srcSet={getSrcW(540)} media="(max-width: 540px)"  type="image/webp" />
          <img src={getSrc()} alt={alt} />
        </picture>
      ) :
      <img alt={alt} src={src} {...props}/>
    ) : <img alt={alt} src={getPlaceholder()} {...props}/>
  )
}
