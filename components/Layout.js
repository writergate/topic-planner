import Header from './Header';
import Navbar from './Navbar';
import router, { useRouter } from 'next/router';

function GetRouter(){
const router = useRouter();
return router.pathname === '/contactUs' || '/forgotPassword' ? false : true;
}

const Layout =({children}) => {
    return ( 
      <div className="content">
         {GetRouter() && <Header/>}
        {children}
       {GetRouter() && <Navbar/>}
      </div>
     
    );
}
export default Layout;