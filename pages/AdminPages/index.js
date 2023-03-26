import Head from "next/Head"

import Navbar from '../../components/Navbar';


function Home() {
  return (
    
    <div className="container">
    
    <Head>
        <title>Create Admin Page</title>
        <meta name="description" content="created by team"  />

        <link rel="icon" href="/favicon.ico"/> 
      </Head>
      <Navbar/>
      <a>Admin page</a>  
 
    </div>
  

  )
}
export default Home