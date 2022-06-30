import React from "react";
import "./pagebanner.css";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

const Pagebanner = () => {
  const ColorButton = styled(Button)(() => ({
    color: "white",
    borderColor: "#82b1ff",
    "&:hover": {
      backgroundColor: "#82b1ff",
      borderColor: "#82b1ff",
    },
  }));
  return (
    <div>
      <div className="banner">
        <div className="banner-content">
          <h1>Votre solution de marketing d'influence</h1>
          <p>
            {" "}
            Find the influencers you need, increase your awareness, optimize
            your campaigns and generate sales!
          </p>
          <Stack spacing={2} direction="row" justifyContent="center">
            <Button variant="contained" size="large">
              JOIN US
            </Button>
            <ColorButton variant="outlined">OUR SOLUTIONS</ColorButton>
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default Pagebanner;
