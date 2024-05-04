'use client'

import { urlFile } from '@/utils/sanity';
import lottieWeb from 'lottie-web';
import { useEffect, useRef, useState } from 'react';
import './Lottie.scss';

export const Lottie = ({ lottie, options, ...props }) => {

  const [isLoaded, setIsLoaded] = useState(false);

  const lottieRef = useRef();

  useEffect(() => {
    if (!isLoaded) {
      fetch(urlFile(lottie?.asset?._ref)).then((res) => res.json()).then(data => {
        lottieWeb.loadAnimation({
          container: lottieRef.current,
          animationData: data,
          rendered: 'svg',
          loop: true
        })
        setIsLoaded(true)
        console.log(lottieWeb);
      })
    }
  }, []);
  
  return (
    <div className='lottie' ref={lottieRef}></div>
  )
}
