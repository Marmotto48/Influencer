import React, { useEffect, useState } from "react";
import "./style.css";
import { MdFilterList } from "react-icons/md";
import Chip from "@mui/material/Chip";
import TemporaryDrawer from "../../components/Drawer/Drawer";
import FadeMenu from "./Sort";
import SearchCard from "../../components/Search card/SearchCard";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

import { useDispatch, useSelector } from "react-redux";
import { getCustomers } from "../../../../Redux/customers";

const Search = () => {
  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  /********************************/

  /**************************/
  const dispatch = useDispatch();
  const customer = useSelector((state) => state.customer);
  useEffect(() => {
    dispatch(getCustomers());
  }, [dispatch]);

  return (
    <div className="search-page">
      <div
        className="header shadow"
        component="form"
        sx={{
          p: "2px 10px",
          display: "flex",
          alignItems: "center",
          width: "100%",
          mb: 5,
        }}
      >
        <div className="search-logo-container">
          {/* <p>SEARCH</p> */}
          <InputBase
            sx={{ ml: 1, width: "90%" }}
            placeholder="Search Here"
            inputProps={{ "aria-label": "search google maps" }}
          />
          <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </div>
        <Divider
          sx={{ height: 28, m: 0.5 }}
          orientation="vertical"
          className="devi"
        />
        <div className="search-options">
          <Chip
            icon={<MdFilterList fontSize="large" />}
            label="Filter"
            variant="outlined"
            onClick={toggleDrawer("right", true)}
            sx={{ mt: 1, width: "90px" }}
          />
          <FadeMenu />
          <TemporaryDrawer
            state={state}
            setState={setState}
            toggleDrawer={toggleDrawer}
          />
        </div>
      </div>
      <div className="body shadow">
        {customer.customers &&
          customer.customers.map((customer) => {
            return (
              <>
                <SearchCard
                  firstName={customer.firstName}
                  lastName={customer.lastName}
                  avatar={customer.customerAvatar.imageURL}
                />
              </>
            );
          })}
      </div>
      {/* <Test /> */}
    </div>
  );
};

export default Search;
