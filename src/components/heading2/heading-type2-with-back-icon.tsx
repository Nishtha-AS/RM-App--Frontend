import React, { useState, MouseEvent } from "react";
import {
  Box,
  Typography,
  IconButton,
  TextField,
  InputAdornment,
  Menu,
  MenuItem,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import ArrowLeftCircle from "assets/arrowleftcircle.svg";
import DividerBar from "assets/group-2.svg";
import SortSvg from "assets/sort.svg";
import SearchOutlined from "@mui/icons-material/SearchOutlined";
import "./heading-type2-with-back-icon.css";

type Props = { title: string };

const HeadingType2WithBackIcon: React.FC<Props> = ({ title }) => {
  const navigate = useNavigate();

  const [sortAnchor, setSortAnchor] = useState<HTMLElement | null>(null);
  const openSort = Boolean(sortAnchor);
  const handleSortClick = (e: MouseEvent<HTMLElement>) => setSortAnchor(e.currentTarget);
  const handleSortClose = () => setSortAnchor(null);
  const handleSortSelect = (opt: string) => {
    console.log("Sort by", opt);
    handleSortClose();
  };

  return (
    <Box className="heading2-container">
      {/* Back + Title */}
      <Box className="heading2-top">
        <IconButton size="small" onClick={() => navigate(-1)} className="heading2-back">
          <img src={ArrowLeftCircle} alt="Back" />
        </IconButton>
        <Box className="heading2-title">
          <img src={DividerBar} alt="" className="heading2-divider" />
          <Typography className="heading2-text">{title}</Typography>
        </Box>
      </Box>

      {/* Search + Sort as true input adornments */}
      <TextField
        placeholder="Search..."
        variant="outlined"
        size="small"
        fullWidth
        className="heading2-textfield"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchOutlined fontSize="small" className="heading2-icon" />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                size="small"
                onClick={handleSortClick}
                className="heading2-sort-btn"
              >
                <img src={SortSvg} alt="Sort" />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <Menu
        anchorEl={sortAnchor}
        open={openSort}
        onClose={handleSortClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        {["Date Added", "Name", "CTPT ID"].map((opt) => (
          <MenuItem key={opt} onClick={() => handleSortSelect(opt)}>
            {opt}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default HeadingType2WithBackIcon;
