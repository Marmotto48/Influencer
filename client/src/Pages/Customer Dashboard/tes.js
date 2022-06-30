import { Input, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
const Test = () => {
  const theme = useTheme();

  const [countries, setCountries] = useState([]);
  //   const fetch = () => {
  //     fetch("https://restcountries.com/v3.1/all")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setCountries(data); //new
  //       });
  //     console.log(countries);
  //   };

  //   useEffect(() => {
  //     fetch("https://restcountries.com/v3.1/all", {
  //       headers: {
  //         "Content-Type": "application/json",
  //         Accept: "application/json",
  //       },
  //     })
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setCountries(data);
  //       });
  //   }, []);

  const getData = async () =>
    await fetch(`https://countriesnow.space/api/v0.1/countries/states`)
      .then((res) => res.json())
      .then((data) => setCountries(data));

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const c = countries.data;
  const [personName, setPersonName] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  return (
    <div>
      COUNTRIES
      <div className="container grid grid-cols-4 gap-16 mx-auto">
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={age}
            label="Age"
            onChange={handleChange}
          >
            {c &&
              c.map((country) => (
                <MenuItem
                  key={country.iso3}
                  value={country.iso3}
                  // style={getStyles(name, personName, theme)}
                >
                  {country.name}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
        {c &&
          c.map((country) => (
            <>
              <p>{country.name}</p>
              <p>
                {country.states.map((s) => (
                  <>
                    <p style={{ color: "red" }}>{s.name}</p>
                  </>
                ))}
              </p>
            </>
          ))}
        {/* {countries.map((country, index) => (
          <div key={country.altSpellings[0]}>
            {country.name.common}
            <p style={{ color: "red" }}>{country.capital}</p>
            <img src={country.flags.png} alt="" />
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default Test;
