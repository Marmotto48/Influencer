import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { Button, ListItemButton, Pagination, Paper } from "@mui/material";
import "./style.css";
const style = {
  width: "100%",
  maxWidth: 500,
  bgcolor: "background.paper",
  boShadow: "3px 2px 10px -6px rgba(0, 0, 0, 0.7)",
  WebkitBoxShadow: "3px 2px 10px -6px rgba(0, 0, 0, 0.7)",
  MozBoxShadow: "3px 2px 10px -6px rgba(0, 0, 0, 0.7)",
  padding: "15px",
  borderRadius: "15px",
};

function CustomersList() {
  return (
    <List dense sx={style}>
      <h5>FOLLOWERS</h5>
      <ListItem secondaryAction={<Button> Follwing</Button>} disablePadding>
        <ListItemButton>
          <ListItemAvatar>
            <Avatar alt={`Avatar`} src={`/static/images/avatar/.jpg`} />
          </ListItemAvatar>
          <ListItemText primary={`Customer name`} secondary="Customer" />
        </ListItemButton>
      </ListItem>
      <ListItem secondaryAction={<Button> Follwing</Button>} disablePadding>
        <ListItemButton>
          <ListItemAvatar>
            <Avatar alt={`Avatar`} src={`/static/images/avatar/.jpg`} />
          </ListItemAvatar>
          <ListItemText primary={`Customer name`} secondary="Customer" />
        </ListItemButton>
      </ListItem>
      <ListItem secondaryAction={<Button> Follwing</Button>} disablePadding>
        <ListItemButton>
          <ListItemAvatar>
            <Avatar alt={`Avatar`} src={`/static/images/avatar/.jpg`} />
          </ListItemAvatar>
          <ListItemText primary={`Customer name`} secondary="Customer" />
        </ListItemButton>
      </ListItem>
      <ListItem secondaryAction={<Button> Follwing</Button>} disablePadding>
        <ListItemButton>
          <ListItemAvatar>
            <Avatar alt={`Avatar`} src={`/static/images/avatar/.jpg`} />
          </ListItemAvatar>
          <ListItemText primary={`Customer name`} secondary="Customer" />
        </ListItemButton>
      </ListItem>
    </List>
  );
}

function InfluencersList() {
  return (
    <List dense sx={style}>
      <h5>FOLLOWING</h5>
      <ListItem secondaryAction={<Button> Follwing</Button>} disablePadding>
        <ListItemButton>
          <ListItemAvatar>
            <Avatar alt={`Avatar`} src={`/static/images/avatar/.jpg`} />
          </ListItemAvatar>
          <ListItemText primary={`Customer name`} secondary="Customer" />
        </ListItemButton>
      </ListItem>
      <ListItem secondaryAction={<Button> Follwing</Button>} disablePadding>
        <ListItemButton>
          <ListItemAvatar>
            <Avatar alt={`Avatar`} src={`/static/images/avatar/.jpg`} />
          </ListItemAvatar>
          <ListItemText primary={`Customer name`} secondary="Customer" />
        </ListItemButton>
      </ListItem>
      <ListItem secondaryAction={<Button> Follwing</Button>} disablePadding>
        <ListItemButton>
          <ListItemAvatar>
            <Avatar alt={`Avatar`} src={`/static/images/avatar/.jpg`} />
          </ListItemAvatar>
          <ListItemText primary={`Customer name`} secondary="Customer" />
        </ListItemButton>
      </ListItem>
      <ListItem secondaryAction={<Button> Follwing</Button>} disablePadding>
        <ListItemButton>
          <ListItemAvatar>
            <Avatar alt={`Avatar`} src={`/static/images/avatar/.jpg`} />
          </ListItemAvatar>
          <ListItemText primary={`Customer name`} secondary="Customer" />
        </ListItemButton>
      </ListItem>
    </List>
  );
}
function UsersList({ title }) {
  return (
    <Paper elevation={3} sx={{ mb: 2 }}>
      <List dense>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemAvatar>
              <Avatar alt={`Avatar`} src={`/static/images/avatar/.jpg`} />
            </ListItemAvatar>
            <ListItemText primary={`Customer name`} secondary="Customer" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemAvatar>
              <Avatar alt={`Avatar`} src={`/static/images/avatar/.jpg`} />
            </ListItemAvatar>
            <ListItemText primary={`Customer name`} secondary="Customer" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemAvatar>
              <Avatar alt={`Avatar`} src={`/static/images/avatar/.jpg`} />
            </ListItemAvatar>
            <ListItemText primary={`Customer name`} secondary="Customer" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemAvatar>
              <Avatar alt={`Avatar`} src={`/static/images/avatar/.jpg`} />
            </ListItemAvatar>
            <ListItemText primary={`Customer name`} secondary="Customer" />
          </ListItemButton>
        </ListItem>
        <Pagination count={3} />
      </List>
    </Paper>
  );
}
function OnlineList({ title }) {
  return (
    <Paper elevation={3} sx={{ mb: 2 }}>
      <List dense>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemAvatar>
              <Avatar alt={`Avatar`} src={`/static/images/avatar/.jpg`} />
            </ListItemAvatar>
            <ListItemText primary={`Customer name`} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemAvatar>
              <Avatar alt={`Avatar`} src={`/static/images/avatar/.jpg`} />
            </ListItemAvatar>
            <ListItemText primary={`Customer name`} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemAvatar>
              <Avatar alt={`Avatar`} src={`/static/images/avatar/.jpg`} />
            </ListItemAvatar>
            <ListItemText primary={`Customer name`} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemAvatar>
              <Avatar alt={`Avatar`} src={`/static/images/avatar/.jpg`} />
            </ListItemAvatar>
            <ListItemText primary={`Customer name`} />
          </ListItemButton>
        </ListItem>
      </List>
    </Paper>
  );
}
export { CustomersList, InfluencersList, UsersList, OnlineList };
