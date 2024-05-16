// import React from 'react'
// import { urlFile } from '@shared/utils';
import { urlFile } from '@shared/utils';
import NextVideo from 'next-video';
// NextVideo


export const Video = ({ video }) => {
  
  const videoUrl = urlFile(video);

  return (
    <NextVideo src={videoUrl}/>
  )
}
