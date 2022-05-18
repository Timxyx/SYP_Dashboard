import '../styles/globals.css'
import Landing from '../src/components/Landing'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (
    <>
  <Component {...pageProps} />
    APP
    <Landing />
    </>
  )
}

export default MyApp
