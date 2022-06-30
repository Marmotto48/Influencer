import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import "./style.css";
import {
  DiscreteSliderSteps,
  RadioButton,
  AutoCom,
  AutoCountries,
} from "./Select";
import { AiOutlineClose } from "react-icons/ai";
const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

export default function TemporaryDrawer({ state, toggleDrawer }) {
  const list = () => (
    <Box
      sx={{
        width: 700,
        pl: 2,
        display: "flex",
        fontFamily: "math",

        "@media  (max-width: 648px)": {
          flexDirection: "column",
          width: 400,
          // backgroundColor: "blue",
          zIndex: "9999",
          paddingBottom: 5,
        },
      }}
      role="presentation"
      //   onClick={toggleDrawer("right", false)}
      // onKeyDown={toggleDrawer("right", false)}
    >
      <div className="search-left" style={{ flex: 1, paddingRight: "20px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h4>INFLUENCER</h4>

          <AiOutlineClose
            onClick={toggleDrawer("right", false)}
            className="close-icon"
          />
        </div>

        <div className="container">
          <AutoCom
            names={names}
            title="Search in Biography (#)"
            label="Biography "
          />
          <AutoCom
            names={names}
            title="Search in posts and stories (#)"
            label="Posts"
          />
          <AutoCom
            names={names}
            title="Search by themes and categories"
            label="Categories"
          />
          <AutoCountries title="Country" label="(#)" />
          <DiscreteSliderSteps
            title="Age"
            label="Age"
            min={15}
            max={90}
            start={10}
            step={10}
          />
          <RadioButton title="Gender" />
        </div>
      </div>
      <div
        className="search-right"
        style={{ flex: 1, paddingLeft: "15px", paddingRight: "10px" }}
      >
        <h4>COMMUNITY</h4>

        <DiscreteSliderSteps
          title="Size"
          label="Size"
          min={0}
          max={5000}
          start={0}
          step={200}
        />
        <AutoCom names={names} title="Search by interests" label="Interests" />
        <AutoCom names={names} title="Search by interests" label="Interests" />
        <AutoCom names={names} title="Search by location" label="Location" />
      </div>
    </Box>
  );

  return (
    <div>
      <React.Fragment>
        <Drawer
          sx={{ zIndex: "1000" }}
          anchor="right"
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
        >
          {list("right")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
