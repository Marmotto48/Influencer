import React, { useState, useEffect } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Appbar from "../Appbar/Appbar";
import {
  BsFillFileEarmarkPostFill,
  BsChatDots,
  BsQuestionCircle,
  BsNewspaper,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import {
  MdOutlineSpaceDashboard,
  MdSearch,
  MdOutlineAnalytics,
  MdEmail,
} from "react-icons/md";
const drawerWidth = 75;
const style_23 = {
  fontSize: "23px",
  color: "white",
};
const style_20 = {
  fontSize: "23px",
  color: "white",
};

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function Sidebar({ setOpen, open }) {
  const theme = useTheme();
  //   const [open, setOpen] = React.useState(false);
  const [pageTitle, setPageTitle] = useState("Dashboard");

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    if (pageTitle) {
    }
  }, [pageTitle]);
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Appbar
        handleDrawerOpen={handleDrawerOpen}
        handleDrawerClose={handleDrawerClose}
        open={open}
        pageTitle={pageTitle}
      />

      <Drawer
        PaperProps={{
          sx: {
            backgroundColor: "rgb(9 4 42)",
            color: "red",
          },
        }}
        sx={{
          width: drawerWidth,
          //   color: "white",
          zIndex: "1000",
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {/* item 1 */}
          <Link to="/dashboard" onClick={() => setPageTitle("Dashboard")}>
            <ListItem button>
              <ListItemIcon>
                <MdOutlineSpaceDashboard style={style_23} />
              </ListItemIcon>
            </ListItem>
          </Link>
          {/* item 2 */}
          <Link to="/news" onClick={() => setPageTitle("News Feed")}>
            <ListItem button>
              <ListItemIcon>
                <BsNewspaper style={style_20} />
              </ListItemIcon>
            </ListItem>
          </Link>
          {/* item 3 */}
          <Link to="/chat" onClick={() => setPageTitle("Chatroom")}>
            <ListItem button>
              <ListItemIcon>
                <BsChatDots style={style_20} />
              </ListItemIcon>
            </ListItem>
          </Link>
          {/* item 2 */}
          <Link to="/search" onClick={() => setPageTitle("Search")}>
            <ListItem button>
              <ListItemIcon>
                <MdSearch style={style_23} />
              </ListItemIcon>
            </ListItem>
            <Divider />
          </Link>
          {/* item 3 */}
          <ListItem button>
            <ListItemIcon>
              <BsFillFileEarmarkPostFill style={style_20} />
            </ListItemIcon>
          </ListItem>
          {/* item 3 */}
          <ListItem button>
            <ListItemIcon>
              <MdEmail style={style_20} />
            </ListItemIcon>
          </ListItem>
          {/* item 4 */}
          <ListItem button>
            <ListItemIcon>
              <MdOutlineAnalytics style={style_23} />
            </ListItemIcon>
          </ListItem>
          {/* item 6 */}
          <ListItem button>
            <ListItemIcon>
              <BsQuestionCircle style={style_20} />
            </ListItemIcon>
          </ListItem>
        </List>
      </Drawer>
      {/* <Main open={open}>
        <DrawerHeader />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          dolor purus non enim praesent elementum facilisis leo vel. Risus at
          ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
          quisque non tellus. Convallis convallis tellus id interdum velit
          laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
          adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
          integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
          eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
          quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
          vivamus at augue. At augue eget arcu dictum varius duis at consectetur
          lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
          faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
          ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
          elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse
          sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
          mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
          risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas
          purus viverra accumsan in. In hendrerit gravida rutrum quisque non
          tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
          morbi tristique senectus et. Adipiscing elit duis tristique
          sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </Main> */}
    </Box>
  );
}
