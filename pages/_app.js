import '../styles/globals.css'
import Landing from '../src/components/Landing'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (
    <div className='bg-bg-dark h-full'>
  <Component {...pageProps} />
    
    <Landing />
    </div>
  )
}

export default MyApp
