import React from "react";
import { Box } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import "./footer-menu-set.css";

import homeIcon from "assets/group-2806.svg";
import myCustomersIcon from "assets/mycustomers.svg";
import myTasksIcon from "assets/group.svg";
import messagesIcon from "assets/messages.svg";
import helpIcon from "assets/help.svg";

const tabs = [
  { label: "My Customers", icon: myCustomersIcon, path: "/customers" },
  { label: "My Tasks",     icon: myTasksIcon,     path: "/tasks"     },
  { label: "Home",         icon: homeIcon,        path: "/home"      },
  { label: "Messages",     icon: messagesIcon,    path: "/messages"  },
  { label: "Help",         icon: helpIcon,        path: "/help"      },
] as const;

const FooterMenuSet: React.FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <Box className="footer-container">
      <Box className="footer-tabbar">
        {tabs.map(({ label, icon, path }) => {
          const active = pathname === path;
          return (
            <Box
              key={label}
              className={`footer-tab ${active ? "active" : ""}`}
              onClick={() => navigate(path)}
            >
              <img src={icon} alt={label} className="tab-icon" />
              <Box className="tab-label">{label}</Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default FooterMenuSet;
