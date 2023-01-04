
import Layout from '../components/Layout'
import '../styles/globals.css'
import '../styles/layout.css'
import '../styles/flaggedTopic.css'

export default function App({ Component, pageProps }) {
  return (
   <Layout>
    <Component {...pageProps} />
   </Layout>
    
   
  )
}
