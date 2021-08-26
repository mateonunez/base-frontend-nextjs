import LottiePlayer from './LottiePlayer';
import React from 'react';
import loading from '../assets/lottie-files/loading.json';

export default function Loader({ ...props }) {
  return (
    <>
      <div className="flex items-center justify-center h-screen max-h-860-px">
        <LottiePlayer animationData={loading} {...props} />
      </div>
    </>
  );
}
