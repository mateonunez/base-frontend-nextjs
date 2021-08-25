import '../styles/globals.css';

import { useEffect, useState } from 'react';

import Loading from '../pages/Loading';
import { useRouter } from 'next/router';

function App({ Component, pageProps }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  // Setting isLoading
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    // Changing route
    router.events.on('routeChangeStart', () => {
      console.log('Route is changing');
      setIsLoading(true);
    });

    // Changed route
    router.events.on('routeChangeComplete', () => {
      console.log('Route changed');
      setIsLoading(false);
    });
  }, [router.events]);

  return <>{isLoading ? <Loading /> : <Component {...pageProps} />}</>;
}

export default App;
