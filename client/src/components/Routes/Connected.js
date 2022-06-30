import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import Sidebar from "../../Pages/Customer Dashboard/components/Sidebar/sidebartwo";
import { Main } from "../../Pages/Customer Dashboard/Dashboard";
import { DrawerHeader } from "../../Pages/Customer Dashboard/Dashboard";
import { Box } from "@mui/system";

function ConnectedRoute({ Component }) {
  const isAuth = localStorage.getItem("token");
  const [open, setOpen] = useState(false);
  // If authorized, return an outlet that will render child elements
  // If not, return element that will navigate to login page
  //   return isAuth ? <Outlet /> : <Navigate to="/customer/login" />;
  return isAuth ? (
    <Box sx={{ display: "flex" }}>
      <Sidebar setOpen={setOpen} open={open} />
      <Main open={open}>
        <DrawerHeader />
        <Component />
      </Main>
    </Box>
  ) : (
    <Navigate to="/customer/login" />
  );
}

export default ConnectedRoute;
