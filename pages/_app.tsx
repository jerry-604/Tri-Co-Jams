import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import React from 'react'

import firebase from './api/config'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
