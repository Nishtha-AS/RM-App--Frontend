import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import "./sort-by-filter-drop-down-set.css";

import sortIcon from "assets/sortbysquare-svgrepocom.svg";

type Props = {
  label?: string;
};

const SortByFilterDropdown: FunctionComponent<Props> = ({ label = "Sort By" }) => {
  return (
    <Box className="sort-by-filter-dropdown">
      <Box className="sort-text">{label}</Box>
      <img className="sort-icon" alt="Sort Icon" src={sortIcon} />
    </Box>
  );
};

export default SortByFilterDropdown;
