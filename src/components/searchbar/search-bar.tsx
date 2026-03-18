import React, { FunctionComponent } from "react";
import { Box } from "@mui/material";
import "./search-bar.css";

import searchIcon from "assets/search.svg";

type Props = {
  placeholder?: string;
};

const SearchBar: FunctionComponent<Props> = ({ placeholder = "Search" }) => {
  return (
    <Box className="search-bar">
      <Box className="search-placeholder">{placeholder}</Box>
      <img className="search-icon" alt="Search" src={searchIcon} />
    </Box>
  );
};

export default SearchBar;
