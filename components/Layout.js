import Header from './Header';
import Navbar from './Navbar';
import router, { useRouter } from 'next/router';

function GetRouter(){
const router = useRouter();
return router.pathname === '/contactUs'  ? false : true;
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

/*
import Header from './Header';
import Navbar from './Navbar';

const Layout =({children}) => {
    return ( 
      <div className="content">
        <Header/>
        {children}
       <Navbar/>
      </div>
     
    );
}
export default Layout;
*/