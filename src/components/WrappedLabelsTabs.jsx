import React from "react";
import { Tabs, Tab } from "@mui/material";
import TabPanel from "./TabPanel";

function a11yProps(index) {
  return {
    id: `tab-${index}`,
    "aria-controls": `tabpanel-${index}`,
  };
}

function WrappedLabelsTabs() {
  const [tabValue, setTabValue] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <div>
      <Tabs
        value={tabValue}
        onChange={handleTabChange}
        aria-label="wrapped label tabs"
      >
        <Tab label="Short Label" {...a11yProps(0)} />
        <Tab label="Very Long Label That Will Wrap" {...a11yProps(1)} />
        <Tab label="Another Short Label" {...a11yProps(2)} />
      </Tabs>
      <TabPanel value={tabValue} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={tabValue} index={1}>
        Item two
      </TabPanel>
      <TabPanel value={tabValue} index={2}>
        Item three
      </TabPanel>
    </div>
  );
}

export default WrappedLabelsTabs;
