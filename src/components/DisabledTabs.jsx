import React from "react";
import { Tabs, Tab } from "@mui/material";
import TabPanel from "./TabPanel";

function a11yProps(index) {
  return {
    id: `tab-${index}`,
    "aria-controls": `tabpanel-${index}`,
  };
}

function DisabledTabs() {
  const [tabValue, setTabValue] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <div>
      <Tabs
        value={tabValue}
        onChange={handleTabChange}
        aria-label="disabled tabs example"
      >
        <Tab label="Active Tab" {...a11yProps(0)} />
        <Tab label="Disabled Tab" disabled {...a11yProps(1)} />
        <Tab label="Another Active Tab" {...a11yProps(2)} />
      </Tabs>
      <TabPanel value={tabValue} index={0}>
        Content One
      </TabPanel>
      <TabPanel value={tabValue} index={1}>
        Disabled Content
      </TabPanel>
      <TabPanel value={tabValue} index={2}>
        Content Three
      </TabPanel>
    </div>
  );
}

export default DisabledTabs;
