import React, {useEffect} from 'react';
import { Toaster } from 'react-hot-toast';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import '@fortawesome/fontawesome-svg-core/styles.css'
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';

import { Layout } from '../components';
import '../styles/globals.scss';
import { StateContext } from '../context/StateContext';

function MyApp({ Component, pageProps, }) {
  
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
        jssStyles.parentElement.removeChild(jssStyles);
    }
}, []);

  return (
    <StateContext>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
        </Layout>
    </StateContext>
  )
}

export default MyApp