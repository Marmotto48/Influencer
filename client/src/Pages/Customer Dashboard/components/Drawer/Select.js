import React, { useState, useEffect } from "react";
import "./style.css";
import FormControl from "@mui/material/FormControl";
import { Slider } from "@mui/material";
import { Box } from "@mui/system";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

const AutoCom = ({ names, title, label }) => {
  return (
    <div className="container">
      <h6>{title}</h6>
      <Autocomplete
        size="small"
        multiple
        id="tags-standard"
        options={names}
        // getOptionLabel={(option) => option.title}
        getOptionLabel={(option) => option}
        // defaultValue={[top100Films[13]]}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label={label}
            placeholder="Favorites"
          />
        )}
      />
    </div>
  );
};

const AutoCountries = ({ title, label }) => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
      });
  }, []);
  return (
    <div className="container">
      <h6>{title}</h6>
      <Autocomplete
        size="small"
        options={countries}
        getOptionLabel={(option) => option.name.common}
        id="auto-select"
        clearOnEscape
        renderInput={(params) => (
          <TextField {...params} label="select" variant="standard" />
        )}
      />
    </div>
  );
};
const AutoCountriesProfile = ({ title, label }) => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
      });
  }, []);
  return (
    <div className="container">
      <Autocomplete
        disabled
        size="small"
        options={countries}
        getOptionLabel={(option) => option.name.common}
        id="auto-select"
        clearOnEscape
        renderInput={(params) => (
          <TextField {...params} label={label} variant="standard" />
        )}
      />
    </div>
  );
};
const DiscreteSliderSteps = ({ title, min, max, start, step }) => {
  return (
    <Box sx={{ width: 250 }}>
      <h6>{title}</h6>
      <Slider
        aria-label="Small steps"
        defaultValue={start}
        step={step}
        marks
        min={min}
        max={max}
        valueLabelDisplay="auto"
      />
    </Box>
  );
};

const RadioButton = ({ title }) => {
  const [value, setValue] = useState("female");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="container">
      <h6>{title}</h6>
      <FormControl component="fieldset">
        <RadioGroup
          row
          aria-label="gender"
          name="controlled-radio-buttons-group"
          value={value}
          onChange={handleChange}
          size="small"
        >
          <FormControlLabel
            value="female"
            control={<Radio size="small" />}
            label="Female"
          />
          <FormControlLabel
            value="male"
            control={<Radio size="small" />}
            label="Male"
          />
          <FormControlLabel
            value="all"
            control={<Radio size="small" />}
            label="All"
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
};
export {
  DiscreteSliderSteps,
  RadioButton,
  AutoCom,
  AutoCountries,
  AutoCountriesProfile,
};
