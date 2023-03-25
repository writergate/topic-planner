
import { useState } from 'react';
import Navbar from '../../components/Navbar';
import TopTabDomains from '../../components/TopTabDomains';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import Image from 'next/image'

function TopicDomains(){
  const [tabsOpen, setTabsOpen] = useState(false);

  const handleTabsOpen = () => {
    setTabsOpen(true);
  };

  const handleTabsClose = () => {
    setTabsOpen(false);
  };

  return (
    <div>
      <Navbar />
      <TopTabDomains onTabsOpen={handleTabsOpen} onTabsClose={handleTabsClose} />
      <Box
        sx={{
          padding: '20px',
          marginLeft: '300px',
          marginRight: '260px',
          backgroundColor: '#1b1155',
          color: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h6" gutterBottom sx={{color:'#d5d7e7', fontWeight: 600,letterSpacing: '.1rem'}}> 
         Choose to Edit or Create Topic Domains
          </Typography>
        <Box sx={{ maxWidth: { xs: 320, sm: 480 }, backgroundColor: '##1b1155' }}>
        
       
          {!tabsOpen && (
            <div style={{ width: '100%', height: 'auto' }}>
              <Image src="/writing.jpg" alt="My Image" width={640} height={480} layout="responsive" />
            </div>
          )}
        </Box>
      </Box>
    </div>
  );
}

export  default TopicDomains;

