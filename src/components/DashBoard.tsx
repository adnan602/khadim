import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import DataTable from './DashTables';


export default function Dashboard() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="ENGINE" value="1" />
            <Tab label="CA" value="2" />
            <Tab label="CERTIFICATE PROVIDER" value="3" />
            <Tab label="OSCP" value="4" />
            <Tab label="TIMPSTAMPING" value="5" />
            <Tab label="SIGNING" value="6" />
          </TabList>
        </Box>
        <TabPanel value="1"><DataTable/></TabPanel>
        <TabPanel value="2">CA</TabPanel>
        <TabPanel value="3">CERTIFICATE PROVIDER</TabPanel>
        <TabPanel value="4">OSCP</TabPanel>
        <TabPanel value="5">TIMPSTAMPING</TabPanel>
        <TabPanel value="6">SIGNING</TabPanel>
      </TabContext>
    </Box>
  );
}