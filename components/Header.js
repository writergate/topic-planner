
import SpeedIcon from '@mui/icons-material/Speed';
function Header() {
    return (
        <div className='headContainer'>
            <div className="headWrapper">
                <div className="title">
                    <h2>Hello,<span> v</span></h2>
                </div>
                <p>Welcome to board</p>
            </div>
            <div className='Email'>
                <SpeedIcon />
            </div>
        </div>
    )
}
export default Header
/*
import { useState } from "react";
import Link from 'next/Link'
import DehazeIcon from '@mui/icons-material/Dehaze';
const Header= () => {
  const [isNavExpanded, setIsNavExpanded] = useState(true);
  return (
    <div>
      <nav className="nav">
        <DehazeIcon/>
        <button
          className='hamburger'
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
            console.log("clicked");
            console.log(isNavExpanded);
          }}
        >
       
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 
              2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 
              01-1- 1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div className='navigation'>
          {isNavExpanded && (
            <ul className='menu'>
              <li className='links'>
                <Link href="/">
                 Home
                </Link>
              </li>
              <li className='links'>
                <Link href="/Dashboard">
                  Map Page
                </Link>
              </li>
              <li className='links'>
                <Link href="/flaggedTopics">
                  About
                </Link>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
};
export default Header
*/