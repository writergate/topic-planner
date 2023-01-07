import React from 'react';
import Link from "next/Link"

import DehazeIcon from '@mui/icons-material/Dehaze';
import SpeedIcon from '@mui/icons-material/Speed';
import CreateIcon from '@mui/icons-material/Create';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import BadgeIcon from '@mui/icons-material/Badge';
import InfoIcon from '@mui/icons-material/Info';
import GroupIcon from '@mui/icons-material/Group';
import LayersIcon from '@mui/icons-material/Layers';
import CheckIcon from '@mui/icons-material/Check'



import { useState } from "react"; //use to track the event





function Navbar(){
/*
  const Navbar = () => {
    const menuItem=[
      {
        title: 'Dashboard',
        icon:  SpeedIcon ,
        path: '/Dashboard'
      },
      {
        title: 'Account Settings',
        icon: CreateIcon,
        path: '/Templates'
      },
      {
        sectionTitle: 'Pages'
      },
      {
        title: 'Article Types',
        icon: MenuBookIcon,
        path: '/ArticleTypes',
        openInNewTab: true
      },
      {
        title: 'Topic Domains',
        icon: BadgeIcon,
        path: '/TopicDomains',
        openInNewTab: true
      },
      
    ]
  */
  


  const [open, setOpen] = useState(false); //initial state false since button not pressed
  

  return (

    <div className="navContainer">
      <div style={{ width: open ? "300px" : "50px" }} className='wrapper' >
      
        <DehazeIcon onClick={() => setOpen(!open)} />
          <h2 style={{ display: open ? "block" : "none" }} className="logo">Logo</h2>

          <div className='wrapper'>
        
          <ul>
          <li>
            <SpeedIcon /><Link href="/Dashboard"><a>Dashboard </a></Link></li>
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

                <h2 className="text-ArticleTypes"><BadgeIcon/><Link href="/ArticleTypes">Articl Types</Link></h2>
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
