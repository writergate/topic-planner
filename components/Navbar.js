/*import React from 'react';
import { useState } from "react"; //use to track the event
import Link from 'next/Link'
import { NavLink } from "react";


import DehazeIcon from '@mui/icons-material/Dehaze';
import SpeedIcon from '@mui/icons-material/Speed';
import CreateIcon from '@mui/icons-material/Create';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import BadgeIcon from '@mui/icons-material/Badge';
import InfoIcon from '@mui/icons-material/Info';
import GroupIcon from '@mui/icons-material/Group';
import LayersIcon from '@mui/icons-material/Layers';
import CheckIcon from '@mui/icons-material/Check'


function Navbar() {
/*
  const Navbar = () => {
    const menuItem = [
      {
        title: 'Dashboard',
        icon: SpeedIcon,
        path: '/Dashboard'
      },
      {
        title: 'Account Settings',
        icon: CreateIcon,
        path: '/Templates'
      },
      {
        //sectionTitle: 'Pages'
      },
      {
        title: 'Article Types',
        icon: MenuBookIcon,
        path: '/ArticleTypes',
        //openInNewTab: true
      },
      {
        title: 'Topic Domains',
        icon: BadgeIcon,
        path: '/TopicDomains',
        //openInNewTab: true
      },

    ]
*//*

    const [openNav, setOpenNav] = useState(false); //initial state false since button not pressed
    return (

      <div className='container'>
        <div className='sidebar'>
          <div className='top-section'>
            <h1 className='logo'>Logo</h1>
            <div className='bars'>
              <DehazeIcon/>
            </div>
          </div>
          {
            menuItem.map((item, index) => (
              <NavLink to={item.path} key={index} className='link' activeClassName='active'>
                <div className="icon">{item.icon}</div>
                <div className="link_text">{item.name}</div>
              </NavLink>
            ))
          }
        </div>
        
      </div>
    )
  }

*/
/*
    <div className="navContainer">
      <div style={{ width: openNav ? "300px" : "50px" }} className='wrapper' >
        <div className='top-section'>

          <DehazeIcon sx={{ "&:hover": { color: "green", cursor: "pointer" } }} onClick={() => setOpenNav(!openNav)} />
          <h2 style={{ display: openNav ? "block" : "none" }} className="logo">Logo</h2>
        </div>
        <div className='wrapper'>


          <ul>
            <li>
              <SpeedIcon />
              
              <Link href="/Dashboard" >Dashboard </Link></li>
            <li>
              <CreateIcon /><Link href="/Templates">Templates</Link></li>
            <li>
              <BadgeIcon /> <Link href="/ArticleTypes">Article Types</Link></li>
            <li>
              <MenuBookIcon /> <Link href="/TopicDomains">Topic Domains</Link></li>
            <li>
              <InfoIcon /> <Link href="/flaggedTopics">Flagged Topics</Link></li>
            <li>
              <GroupIcon /> <Link href="/AssignUserRoles">Assign User Roles</Link></li>
            <li>
              <LayersIcon /> <Link href="/GenerateReports">Generate Reports</Link>
            </li>
            <li>
              <CheckIcon /> <Link href="/ArticleApproval">Articles approval</Link>
            </li>
          </ul>

        </div>
      </div>
    </div>
    )
}

export default Navbar
*/




//Permanent drawer
import { useState } from "react";
import { useRouter } from 'next/router';
import Link from 'next/link';
import * as React from 'react';

//MUI components
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';

import DehazeIcon from '@mui/icons-material/Dehaze';
import SpeedIcon from '@mui/icons-material/Speed';
import CreateIcon from '@mui/icons-material/Create';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import BadgeIcon from '@mui/icons-material/Badge';
import InfoIcon from '@mui/icons-material/Info';
import GroupIcon from '@mui/icons-material/Group';
import CheckIcon from '@mui/icons-material/Check';
import IconButton from '@mui/material/IconButton';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';




const drawerWidth = 220;  //width for the drawer we can change this
const AppBarWidth = 64;
const iconMap = {
  'Dashboard': <SpeedIcon sx={{ color: 'white' }} />,
  'Templates': <CreateIcon sx={{ color: 'white' }} />,
  'Article Types': <BadgeIcon sx={{ color: 'white' }} />,
  'Topic Domains': <MenuBookIcon sx={{ color: 'white' }} />,
  'Flagged Topics': <InfoIcon sx={{ color: 'white' }} />,
  'User Roles': <GroupIcon sx={{ color: 'white' }} />,
  'Generate Reports': <CheckIcon sx={{ color: 'white' }} />
};

export default function NavBar() {
  const router = useRouter();

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: '#0082e6'
          //width:`calc(100% - ${drawerWidth}px)`,
          // ml: `${drawerWidth}px`,
        }}
      >
        <Toolbar>

          <Typography variant="h6" noWrap component="div">
            Admin (our logo)
          </Typography>
          <div style={{ flexGrow: 1 }}></div>
          <IconButton
            size="large"
            color="white"
            aria-label="search"
          >
            < MailIcon />
          </IconButton>
          <IconButton
            size="large"
            color="white" // this don't work
            aria-label="notifications"
          >
            <NotificationsIcon />
          </IconButton>
          <IconButton
            size="large"
            color="white" // this don't work
            aria-label="account"
          >
            <AccountCircleIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Toolbar />

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            marginTop: `calc(${AppBarWidth}px)`, //marginTop:'64px',
            backgroundColor: '#2c3e50',
          },
        }}
        variant="permanent"  // making drawer permenant
        anchor="left"   //drawer to left
      >




        <List sx={{ overflow: 'hidden' }}>
          {['Dashboard', 'Templates', 'Article Types', 'Topic Domains', 'Flagged Topics', 'User Roles', 'Generate Reports'].map((text, index) => (
            <ListItem key={text} >
              <Link href={`/${text.replace(' ', '')}`} passHref >
                <ListItemButton sx={{ color: 'white', padding: '8px 1px', width: drawerWidth, ':hover': { color: 'black', backgroundColor: 'white' }, '&:hover .MuiSvgIcon-root': { color: 'black' } }}>
                  <ListItemIcon>
                    {iconMap[text]}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>

              </Link>
            </ListItem>
          ))}
        </List>

      </Drawer>

      <Box
        component="main"
        sx={{ flexGrow: 1, backgroundColor: 'background.default', p: 3 }} //p means padding
      >
        <Toolbar />
        {/*start no need*/}
        <Typography paragraph>

        </Typography>
        {/*End no need*/}
      </Box>
    </Box>
  );
}




































//manual navbar

/*
function Navbar() {
    return (

        <nav>
      
            <div className="layout-Navbar">
            
                <h1 className="logo"><DehazeIcon sx={{ "&:hover": { color: "green" } }}/>Logo </h1>

                <h2 className="text-Dashboard">
                <SpeedIcon/><Link href="/Dashboard">Dashboard</Link></h2>

                <h2 className="text-Templates"> <CreateIcon/>
                <Link href="/Templates">Templates</Link></h2>

                <h2 className="text-ArticleTypes"><BadgeIcon/><Link href="/ArticleTypes">Article Types</Link></h2>
                <h2 className="text-TopicDomains"><MenuBookIcon/><Link href="/TopicDomains">Topic Domains</Link></h2>
                <h2 className="text-flaggedTopics"><InfoIcon/> <Link href="/flaggedTopics">Flagged Topics</Link></h2>
                <h2 className="text-AssignUserRoles"><GroupIcon/> <Link href="/AssignUserRoles">Assign User Roles</Link></h2>
                <h2 className="text-GenerateReports"><LayersIcon/> <Link href="/GenerateReports">Generate Reports</Link></h2>
                <h2 className="text-ArticleApproval"><CheckIcon /> <Link href="/ArticleApproval">Approve Reject Articles</Link></h2>
            </div>
        </nav>
    )
}
export default Navbar
*/

/*const Navbar = () => {
  return [

    {
      title: 'Account Settings',
      icon: DehazeIcon,
      path: '/Dashboard'
    },
    
    
    {
      title: 'Login',
      icon:  SpeedIcon,
      path: '/ArticleTypes',
      openInNewTab: true
    },
    {
      title: 'Register',
      icon: CreateIcon ,
      path: '/Templates',
      openInNewTab: true
    },
    {
      title: 'Error',
      icon: MenuBookIcon,
      path: '/flaggedTopics',
      openInNewTab: true
    }
    
  ]
}

export default Navbar
*/
