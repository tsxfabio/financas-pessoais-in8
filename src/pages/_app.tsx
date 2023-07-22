import 'primereact/resources/themes/saga-blue/theme.css'
import 'primereact/resources/primereact.min.css'
import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'
import Head from 'next/head'
import { TransactionsProvider } from '../contexts/TransactionsContextType'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <TransactionsProvider>
      <Head>
        <title>IN8 - Finance</title>
      </Head>
      <Component {...pageProps} />
    </TransactionsProvider>
  )
}
