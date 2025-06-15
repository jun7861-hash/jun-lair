import Head from 'next/head';
import { useEffect } from 'react';
import { ThemeProvider } from 'next-themes';
import { ToastContainer } from 'react-toastify';
import Aos from 'aos';

import ThemeSwitch from '@/components/switch/ThemeSwitch';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'aos/dist/aos.css';
import 'react-loading-skeleton/dist/skeleton.css';
import 'react-multi-carousel/lib/styles.css';
import '@/styles/scss/style.scss';

type AppProps = {
  Component: React.ComponentType;
  pageProps: Record<string, unknown>;
};

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    Aos.init({
      duration: 1200,
    });
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="jun_lair_all_wrap">
        <ThemeProvider attribute="class">
          <ThemeSwitch />
          <Component {...pageProps} />
        </ThemeProvider>

        <ToastContainer />
      </div>
    </>
  );
}
