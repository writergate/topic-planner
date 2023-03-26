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

  const handleCreateTopicDomains = () => {

    router.push('/AdminPages/TopicDomains/CreateTopicDomains');
    console.log('Tab1 clicked');
  };

  const handleEditTopicDomains = () => {

    router.push('/AdminPages/TopicDomains/EditTopicDomains');
    console.log('Tab 2 clicked');
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
        <Box sx={{ maxWidth: { xs: 320, sm: 480 }, backgroundColor: 'white' }}>
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
              onClick={handleCreateTopicDomains}
              sx={{ flexDirection: 'row', alignItems: 'center', fontWeight: '700' }}
            />
            <Tab label="Edit"
              icon={<EditOffIcon />}
              onClick={handleEditTopicDomains}
              sx={{ flexDirection: 'row', alignItems: 'center', fontWeight: '700' }}
            />
          </Tabs>
        </Box>
      </Box>
    </div>
  );
}
