import React, { useEffect } from 'react';

import lottie from 'lottie-web';

export default function LottiePlayer({
  animationData,
  width = 200,
  height = 200,
  renderer = 'svg',
  loop = true,
  autoplay = true
}) {
  useEffect(() => {
    lottie.loadAnimation({
      animationData,
      container: document.querySelector('#lottie'),
      renderer,
      loop,
      autoplay
    });
  }, []);

  return (
    <div>
      <div id="lottie" style={{ width: width, height: height }} />
    </div>
  );
}
