import '@fortawesome/fontawesome-free/css/all.min.css';
import 'styles/globals.css';

import { useEffect, useState } from 'react';

import Head from 'next/head';
import Loading from 'pages/Loading';
import MainLayout from 'layouts/MainLayout';
import { useRouter } from 'next/router';

function App({ Component, pageProps }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  // Retriving layout from component
  const Layout = Component.layout || (({ children }) => <MainLayout>{children}</MainLayout>);

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

  return (
    <>
      <Head>
        <title>Base Frontend Next.JS</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      </Head>
      <Layout>{isLoading ? <Loading /> : <Component {...pageProps} />}</Layout>
    </>
  );
}

export default App;
