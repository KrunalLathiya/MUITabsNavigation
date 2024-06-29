import React from "react";
import { Tabs, Tab } from "@mui/material";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function a11yProps(index) {
  return {
    id: `tab-${index}`,
    "aria-controls": `tabpanel-${index}`,
  };
}

function NavTabs() {
  const [tabValue, setTabValue] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Router>
      <Tabs
        value={tabValue}
        onChange={handleTabChange}
        aria-label="nav tabs example"
      >
        <Tab label="Nav One" component={Link} to="/nav-one" {...a11yProps(0)} />
        <Tab label="Nav Two" component={Link} to="/nav-two" {...a11yProps(1)} />
        <Tab
          label="Nav Three"
          component={Link}
          to="/nav-three"
          {...a11yProps(2)}
        />
      </Tabs>
      <Routes>
        <Route path="/nav-one" element={<div>Nav One Content</div>} />
        <Route path="/nav-two" element={<div>Nav Two Content</div>} />
        <Route path="/nav-three" element={<div>Nav Three Content</div>} />
      </Routes>
    </Router>
  );
}

export default NavTabs;
