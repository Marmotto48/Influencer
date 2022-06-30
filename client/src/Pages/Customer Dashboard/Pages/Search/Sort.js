import * as React from "react";
import List from "@mui/material/List";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { BsSortDown } from "react-icons/bs";
import Chip from "@mui/material/Chip";

const options = ["", "Followers", "Alphabet", "Newest", "Grade"];

export default function FadeMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <List
        component="nav"
        aria-label="Device settings"
        sx={{ bgcolor: "background.paper" }}
      >
        <Chip
          icon={<BsSortDown fontSize="large" />}
          label={`Sort by ${options[selectedIndex]}`}
          variant="outlined"
          onClick={handleClickListItem}
          sx={{backgroundColor:"transparent"}}
        />
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "lock-button",
          role: "listbox",
        }}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            disabled={index === 0}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
