import { Fragment } from 'react';
import { Provider } from 'react-redux';
import { UseWalletProvider } from 'use-wallet';
import Head from 'next/head';

import { connectorConfig } from '../constants/chains';

// import getLibrary from '../libs/getLibrary';
import '../styles/globals.css';
import store from '../state/store';

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <UseWalletProvider autoConnect connectors={connectorConfig}>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </UseWalletProvider>
    </Fragment>
  );
}

export default MyApp;
