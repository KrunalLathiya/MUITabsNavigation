import React from "react";
import { Tabs, Tab } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import TabPanel from "./TabPanel";

function a11yProps(index) {
  return {
    id: `tab-${index}`,
    "aria-controls": `tabpanel-${index}`,
  };
}

function IconTabs() {
  const [tabValue, setTabValue] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <div>
      <Tabs
        value={tabValue}
        onChange={handleTabChange}
        aria-label="icon tabs example"
      >
        <Tab icon={<HomeIcon />} aria-label="home" {...a11yProps(0)} />
        <Tab icon={<FavoriteIcon />} aria-label="favorite" {...a11yProps(1)} />
        <Tab icon={<PersonIcon />} aria-label="person" {...a11yProps(2)} />
      </Tabs>
      <TabPanel value={tabValue} index={0}>
        Home Content
      </TabPanel>
      <TabPanel value={tabValue} index={1}>
        Favorite Content
      </TabPanel>
      <TabPanel value={tabValue} index={2}>
        Person Content
      </TabPanel>
    </div>
  );
}

export default IconTabs;
