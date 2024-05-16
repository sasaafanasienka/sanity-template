import { FileSource } from '@shared/types';
import { urlFile } from '@shared/utils';
import NextBackgroundVideo from 'next-video/background-video'

export interface BackgroundVideoProps {
  children?: React.ReactNode
  video: FileSource,
  className?: string,
}

export const BackgroundVideo = ({ children, video, className, ...props }) => {
  const videoUrl = urlFile(video);

  return (
    <NextBackgroundVideo loop src={videoUrl} {...props} className={className}>{children ?? children}</NextBackgroundVideo>
  )
}
