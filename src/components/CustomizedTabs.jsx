import React from "react";
import { Tabs, Tab } from "@mui/material";
import { styled } from "@mui/system";
import TabPanel from "./TabPanel";

function a11yProps(index) {
  return {
    id: `tab-${index}`,
    "aria-controls": `tabpanel-${index}`,
  };
}

const CustomTabs = styled(Tabs)({
  "& .MuiTabs-indicator": {
    backgroundColor: "#FF0000",
  },
});

const CustomTab = styled((props) => <Tab {...props} />)(({ theme }) => ({
  "&:hover": {
    backgroundColor: "#FFFFFF",
    color: "#000000",
  },
}));

function CustomizedTabs() {
  const [tabValue, setTabValue] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <div>
      <CustomTabs
        value={tabValue}
        onChange={handleTabChange}
        aria-label="customized tabs example"
      >
        <CustomTab label="Custom Tab One" {...a11yProps(0)} />
        <CustomTab label="Custom Tab Two" {...a11yProps(1)} />
        <CustomTab label="Custom Tab Three" {...a11yProps(2)} />
      </CustomTabs>
      <TabPanel value={tabValue} index={0}>
        Custom Content One
      </TabPanel>
      <TabPanel value={tabValue} index={1}>
        Custom Content Two
      </TabPanel>
      <TabPanel value={tabValue} index={2}>
        Custom Content Three
      </TabPanel>
    </div>
  );
}

export default CustomizedTabs;
