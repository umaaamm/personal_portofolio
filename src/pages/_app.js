import Head from 'next/head'
import { ThemeProvider } from 'next-themes'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Head>
        <title>Kurniawan Gigih Lutfi Umam</title>
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
