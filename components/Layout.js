import Header from './Header';
import Navbar from './Navbar';
import router, { useRouter } from 'next/router';

function GetRouter(){
const router = useRouter();
return router.pathname === '/contactUs' ? false : true;
}

const Layout =({children}) => {
    return ( 
      <div className="content">
        <Header/>
        {children}
       {GetRouter() && <Navbar/>}
      </div>
     
    );
}
export default Layout;