
import Layout from '../components/Layout'
import {ThemeProvider} from "@mui/material";
import theme from '../components/theme';
import '../styles/globals.css';
import '../styles/layout.css';
import '../styles/flaggedTopic.css';
import "../styles/Templatespage.css";

export default function App({ Component, pageProps }) {
  return (
 <Layout>
    <Component {...pageProps} />
   </Layout>
  )
}
