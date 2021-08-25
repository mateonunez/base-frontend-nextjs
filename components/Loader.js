import LottiePlayer from './LottiePlayer';
import React from 'react';
import loading from '../assets/lottie-files/loading.json';

export default function Loader({ ...props }) {
  return <LottiePlayer animationData={loading} {...props} />;
}
