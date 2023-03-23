import * as React from 'react';
import { useRouter } from 'next/router';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Navbar from './Navbar';

import CreateIcon from '@mui/icons-material/Create';
import EditOffIcon from '@mui/icons-material/EditOff';


export default function TopTab() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const router = useRouter();

  const handleCreateArticleType = () => {
    console.log('Tab1 clicked');
    router.push('/createArticleTypes');
  };

  const handleEditArticleType = () => {
    console.log('Tab 2 clicked');
    router.push('/EditArticleTypes');
  };

  return (
    <div>
      <Navbar />
      <Box
        sx={{
          padding: '20px',
          marginLeft: '300px',
          marginRight: '260px',
          backgroundColor: '#0082e6',
          color: 'white',
        }}
      >
        <Box sx={{ maxWidth: { xs: 320, sm: 480 }, bgcolor: 'white' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            <Tab
              label="Create"
              icon={<CreateIcon />}
              onClick={handleCreateArticleType}
              
            />
            <Tab label="Edit"
              icon={< EditOffIcon/>}
              onClick={handleEditArticleType} />
          </Tabs>
        </Box>
      </Box>
    </div>
  );
}