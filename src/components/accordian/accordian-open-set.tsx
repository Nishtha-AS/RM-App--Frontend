import React, { FC, ReactNode, useState } from "react";
import { Box, Typography } from "@mui/material";
import minusCircleIcon from "assets/minuscircle.svg";
import plusCircleIcon from "assets/plus-circle.svg";
import "./accordian-open-set.css";

interface Props {
  /** The header text shown when collapsed, e.g. “4. Meeting Recording” */
  title: string;
  /** Anything you nest inside will display in the expanded panel */
  children?: ReactNode;
}

const AccordianOpenSet: FC<Props> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box className="accordian-wrapper">
      <Box
        className="accordian-heading"
        onClick={() => setIsOpen(open => !open)}
      >
        <Typography className="accordian-title">{title}</Typography>
        <img
          className="toggle-icon"
          src={isOpen ? minusCircleIcon : plusCircleIcon}
          alt={isOpen ? "Collapse" : "Expand"}
        />
      </Box>

      {isOpen && (
        <Box className="accordian-content">
          {children && React.isValidElement(children) ? (
            children
          ) : (
            <Box className="no-data-found-wrapper">
              <Typography className="no-data-found">
                No Data Found
              </Typography>
            </Box>
          )}
        </Box>
      )}
    </Box>
  );
};

export default AccordianOpenSet;
