import React from 'react';
import { Toaster } from 'react-hot-toast';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import '@fortawesome/fontawesome-svg-core/styles.css'

import { Layout } from '../components';
import '../styles/globals.scss';
import { StateContext } from '../context/StateContext';

function MyApp({ Component, pageProps }) {
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