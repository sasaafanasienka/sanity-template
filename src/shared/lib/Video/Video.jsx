// import React from 'react'
import { urlFile } from '@/utils/sanity';
import NextVideo from 'next-video';

export const Video = ({ video }) => {
  
  const videoUrl = urlFile(video?.asset?._ref);

  return (
    <NextVideo src={videoUrl}/>
  )
}
