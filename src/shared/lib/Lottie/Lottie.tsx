'use client'

import lottieWeb from 'lottie-web';
import { useEffect, useRef, useState } from 'react';
import './Lottie.scss';
import { urlFile } from '@shared/utils';


export const Lottie = ({ lottie, options = {}, ...props }) => {

  const [isLoaded, setIsLoaded] = useState(false);

  const lottieRef = useRef();

  useEffect(() => {
    if (!isLoaded) {
      fetch(urlFile(lottie?.asset?._ref)).then((res) => res.json()).then(data => {
        lottieWeb.loadAnimation({
          container: lottieRef.current,
          animationData: data,
          renderer: 'svg',
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
