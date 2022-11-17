import React from "react";
import TabList from '@mui/lab/TabList';
import Tab from "@mui/material/Tab";
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';

import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import DraftTab from "./Tabs/DraftTab";

const theme = createTheme({
  palette: {
    type: "dark",
  },
});

function DraftTabSection() {

  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <TabContext value={value}>
        <div className="pl-1 pr-5 bg-[#1A1D21] flex">
          <TabList 
            style={{ height: 20 }}
            textColor="secondary"
            indicatorColor="secondary"
            aria-label="basic tabs example"
            onChange={handleChange}
          >
            <Tab style={{ fontSize: 11 }} value="1" className="text-sm" label="Drafts" />
            <Tab style={{ fontSize: 11 }} value="2" label="Scheduled" />
            <Tab style={{ fontSize: 11 }} value="3" label="Sent" />
          </TabList>
        </div>

        <div
          style={{ height: "calc(100vh - 90px)" }}
          className="w-[100%] bg-[#222529]"
        >
          <TabPanel value="1">
            <DraftTab />
          </TabPanel>
          
          <TabPanel value="2">
          
          </TabPanel>
          
          <TabPanel value="3">
          
          </TabPanel>
        
          </div>
      </TabContext>
    </ThemeProvider>
  );
}

export default DraftTabSection;
