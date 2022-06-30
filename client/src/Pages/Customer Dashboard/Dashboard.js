import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Chat from "./Pages/Chat/Chat";
import Home from "./Pages/Home/Home";
import Box from "@mui/material/Box";
import News from "./Pages/News Feed/News";
import Search from "./Pages/Search/Search";
import Sidebar from "./components/Sidebar/sidebartwo";
import { styled } from "@mui/material/styles";
import CustomerRoute from "../../components/Routes/customerRoute";

const drawerWidth = 75;
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));
const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);
const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const isAuth = localStorage.getItem("token");

  return (
    <div className="Cdashboard">
      {isAuth ? (
        <Box sx={{ display: "flex" }}>
          <Sidebar setOpen={setOpen} open={open} />
          <Main open={open}>
            <DrawerHeader />
            <Routes>
              <Route
                exact
                path="/dashboard"
                element={<CustomerRoute Component={Home} />}
              />
              <Route
                path="/chat"
                element={<CustomerRoute Component={Chat} />}
              />
              <Route
                path="/news"
                element={<CustomerRoute Component={News} />}
              />
              <Route
                path="/search"
                element={<CustomerRoute Component={Search} />}
              />
            </Routes>
          </Main>
        </Box>
      ) : (
        <>NOT ALLOWED</>
      )}
    </div>
  );
};

export { Dashboard, DrawerHeader, Main };
