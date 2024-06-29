import React from "react";
import { Tabs, Tab, Box, Typography } from "@mui/material";

function a11yProps(index) {
  return {
    id: `tab-${index}`,
    "aria-controls": `tabpanel-${index}`,
  };
}

function VerticalTabs() {
  const [tabValue, setTabValue] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box display="flex">
      <Tabs
        orientation="vertical"
        value={tabValue}
        onChange={handleTabChange}
        aria-label="vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        <Tab label="Vertical Tab One" {...a11yProps(0)} />
        <Tab label="Vertical Tab Two" {...a11yProps(1)} />
        <Tab label="Vertical Tab Three" {...a11yProps(2)} />
      </Tabs>
      <Box p={3}>
        {tabValue === 0 && <Typography>Vertical Content One</Typography>}
        {tabValue === 1 && <Typography>Vertical Content Two</Typography>}
        {tabValue === 2 && <Typography>Vertical Content Three</Typography>}
      </Box>
    </Box>
  );
}

export default VerticalTabs;
