import { FunctionComponent, useState } from "react";
import { Box, Typography, Menu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./section-header-with-actions.css";

import backIcon from "assets/arrowleftcircle.svg";
import divider from "assets/group-2.svg";
import searchIcon from "assets/search.svg";
import sortIcon from "assets/sortbysquare-svgrepocom.svg";

interface Props {
  headingText: string;
  hideBackIcon?: boolean;
}

const SectionHeaderWithActions: FunctionComponent<Props> = ({ headingText, hideBackIcon }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSortClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleSortClose = () => {
    setAnchorEl(null);
  };

  const handleBack = () => {
    navigate("/home");
  };

  return (
    <Box className="section-header-container">
      {/* Top Heading */}
      <Box className="section-heading-row">
        {!hideBackIcon && <img className="back-icon" src={backIcon} alt="Back" onClick={() => navigate(-1)}/>}
        <img className="divider-icon" src={divider} alt="|" />
        <Typography
          className="section-heading"
          sx={{
            fontSize: "14px",
            fontWeight: 800,
            fontFamily: "Poppins, sans-serif",
          }}
        >
          {headingText}
        </Typography>
      </Box>

      {/* Action Row */}
      <Box className="section-actions-row">
        <Box className="search-bar">
          <input
            className="search-input"
            type="text" 
             placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <img className="search-icon" src={searchIcon} alt="Search" />
        </Box>

        <img
          className="sort-icon"
          src={sortIcon}
          alt="Sort By"
          onClick={handleSortClick}
        />

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleSortClose}
        >
          <MenuItem onClick={handleSortClose}>Date Added</MenuItem>
          <MenuItem onClick={handleSortClose}>Name</MenuItem>
          <MenuItem onClick={handleSortClose}>CTPT ID</MenuItem>
        </Menu>
      </Box>
    </Box>
  );
};

export default SectionHeaderWithActions;
