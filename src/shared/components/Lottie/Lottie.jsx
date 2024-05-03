'use client'

import { urlFile } from '@/utils/sanity';
import { Loader } from '@mantine/core';
import { LottiePlayer, Lottie as LottieReact } from 'lottie-react';
import lottie from 'lottie-web';
import { useEffect } from 'react';

export const Lottie = ({lottie, ...props}) => {

  cosnt [data, setData] = useState()

  
  useEffect(() => {
    const ref = lottie?.asset?._ref
  
    const src = urlFile(ref)

    lottie.loadAnimation({
      container: animationContainer.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: src,
    }).then(() => setLoaded(true))
  })

  if (!data) {
    return <Loader/>
  }

  return (
    data ? (
      <LottieReact animationData={data} {...props} />
    ) : null
  )
}
