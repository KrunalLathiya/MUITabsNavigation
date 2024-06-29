import React from "react";
import { Tabs, Tab } from "@mui/material";
import TabPanel from "./TabPanel";

function a11yProps(index) {
  return {
    id: `tab-${index}`,
    "aria-controls": `tabpanel-${index}`,
  };
}

function FixedTabs() {
  const [tabValue, setTabValue] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <div>
      <Tabs
        value={tabValue}
        onChange={handleTabChange}
        aria-label="fixed tabs example"
        variant="fullWidth"
      >
        <Tab label="Fixed Tab One" {...a11yProps(0)} />
        <Tab label="Fixed Tab Two" {...a11yProps(1)} />
        <Tab label="Fixed Tab Three" {...a11yProps(2)} />
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
    </div>
  );
}

export default FixedTabs;
