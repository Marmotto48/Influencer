import React, { useState, useEffect } from "react";
import { styled, useTheme } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {
  MdOutlineSpaceDashboard,
  MdSearch,
  MdOutlineAnalytics,
  MdEmail,
} from "react-icons/md";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import {
  BsFillFileEarmarkPostFill,
  BsChatDots,
  BsQuestionCircle,
  BsNewspaper,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import Appbar from "../Appbar/Appbar";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 0),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));
const style_23 = {
  fontSize: "23px",
  color: "white",
};
const style_20 = {
  fontSize: "23px",
  color: "white",
};
export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [pageTitle, setPageTitle] = useState("Dashboard");
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (pageTitle) {
      // console.log(pageTitle);
    }
  }, [pageTitle]);
  return (
    <>
      <CssBaseline />
      <Appbar
        handleDrawerOpen={handleDrawerOpen}
        handleDrawerClose={handleDrawerClose}
        open={open}
        pageTitle={pageTitle}
      />
      <Drawer
        variant="permanent"
        open={open}
        PaperProps={{
          sx: {
            backgroundColor: "rgb(9 4 42)",
            color: "white",
            zIndex: "1000",
          },
        }}
      >
        {/* <DrawerHeader></DrawerHeader> */}
        <Divider />
        <List>
          {/* item 1 */}
          <Link to="/dashboard" onClick={() => setPageTitle("Dashboard")}>
            <ListItem button>
              <ListItemIcon>
                <MdOutlineSpaceDashboard style={style_23} />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>
          </Link>
          {/* item 2 */}
          <Link to="/news" onClick={() => setPageTitle("News Feed")}>
            <ListItem button>
              <ListItemIcon>
                <BsNewspaper style={style_20} />
              </ListItemIcon>
              <ListItemText primary="News Feed" />
            </ListItem>
          </Link>
          {/* item 3 */}
          <Link to="/chat" onClick={() => setPageTitle("Chatroom")}>
            <ListItem button>
              <ListItemIcon>
                <BsChatDots style={style_20} />
              </ListItemIcon>
              <ListItemText primary="Chat" />
            </ListItem>
          </Link>
          {/* item 2 */}
          <Link to="/search" onClick={() => setPageTitle("Search")}>
            <ListItem button>
              <ListItemIcon>
                <MdSearch style={style_23} />
              </ListItemIcon>
              <ListItemText primary="Search" />
            </ListItem>
            <Divider />
          </Link>
          {/* item 3 */}
          <ListItem button>
            <ListItemIcon>
              <BsFillFileEarmarkPostFill style={style_20} />
            </ListItemIcon>
            <ListItemText primary="Posts" />
          </ListItem>
          {/* item 3 */}
          <ListItem button>
            <ListItemIcon>
              <MdEmail style={style_20} />
            </ListItemIcon>
            <ListItemText primary="Email" />
          </ListItem>
          {/* item 4 */}
          <ListItem button>
            <ListItemIcon>
              <MdOutlineAnalytics style={style_23} />
            </ListItemIcon>
            <ListItemText primary="Interactions" />
          </ListItem>
          {/* item 6 */}
          <ListItem button>
            <ListItemIcon>
              <BsQuestionCircle style={style_20} />
            </ListItemIcon>
            <ListItemText primary="Informations" />
          </ListItem>
        </List>
      </Drawer>
      {/* <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
         <DrawerHeader /> 
      </Box> */}
    </>
    // </Box>
  );
}
