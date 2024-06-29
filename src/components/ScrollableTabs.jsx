import React from "react";
import { Tabs, Tab } from "@mui/material";
import TabPanel from "./TabPanel";

function a11yProps(index) {
  return {
    id: `tab-${index}`,
    "aria-controls": `tabpanel-${index}`,
  };
}

function ScrollableTabs() {
  const [tabValue, setTabValue] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <div>
      <Tabs
        value={tabValue}
        onChange={handleTabChange}
        aria-label="scrollable tabs example"
        variant="scrollable"
        scrollButtons="auto"
      >
        <Tab label="Item One" {...a11yProps(0)} />
        <Tab label="Item Two" {...a11yProps(1)} />
        <Tab label="Item Three" {...a11yProps(2)} />
        <Tab label="Item Four" {...a11yProps(3)} />
        <Tab label="Item Five" {...a11yProps(4)} />
        <Tab label="Item Six" {...a11yProps(5)} />
        <Tab label="Item Seven" {...a11yProps(6)} />
      </Tabs>
      <TabPanel value={tabValue} index={0}>
        Content One
      </TabPanel>
      <TabPanel value={tabValue} index={1}>
        Content Two
      </TabPanel>
      <TabPanel value={tabValue} index={2}>
        Content Three
      </TabPanel>
      <TabPanel value={tabValue} index={3}>
        Content Four
      </TabPanel>
      <TabPanel value={tabValue} index={4}>
        Content Five
      </TabPanel>
      <TabPanel value={tabValue} index={5}>
        Content Six
      </TabPanel>
      <TabPanel value={tabValue} index={6}>
        Content Seven
      </TabPanel>
    </div>
  );
}

export default ScrollableTabs;
