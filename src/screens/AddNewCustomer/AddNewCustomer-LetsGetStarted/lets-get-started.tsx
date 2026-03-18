import { FunctionComponent } from "react";
import { Box, Typography } from "@mui/material";
import "./lets-get-started.css";

import vector from "assets/vector.svg";
import vector1 from "assets/vector1.svg";
import vector2 from "assets/vector2.svg";
import vector3 from "assets/vector3.svg";
import vector4 from "assets/vector4.svg";
import vector5 from "assets/vector5.svg";
import capIcon from "assets/cap.svg";
import wifiIcon from "assets/wifi.svg";
import cellularIcon from "assets/cellular-connection.svg";
import logo from "assets/as-logo@2x.png";
import notificationBg from "assets/notification-bg.svg";
import bellIcon from "assets/bell.svg";
import editIcon from "assets/edit3.svg";
import imageIcon from "assets/image@2x.png";
import group2806 from "assets/group-2806.svg";
import groupIcon from "assets/group.svg";
import group123 from "assets/group-123.svg";
import formIcon from "assets/form-svgrepocom.svg";
import logoutIcon from "assets/logout3-svgrepocom.svg";
import group2808 from "assets/group-2808.svg";
import group2809 from "assets/group-2809.svg";
import frame36206 from "assets/frame-36206.svg";
import plusCircle from "assets/pluscircle.svg";
import fileText from "assets/filetext.svg";
import progressBar from "assets/progress-bar.svg";
import line109 from "assets/line-109.svg";

const LetsGetStarted: FunctionComponent = () => {
  return (
    <Box className="lets-get-started">
      <Box className="lets-get-started-child" />
      <Box className="lets-start-messge">
        <Box className="lets-start-messge-inner">
          <Box className="frame-parent">
            <Box className="vector-parent">
              <img className="vector-icon" alt="" src={vector} />
              <img className="vector-icon1" alt="" src={vector1} />
            </Box>
            <Box className="lets-get-you">Let’s Get You Started!</Box>
          </Box>
        </Box>
        <Box className="lets-start-messge-child">
          <Box className="we-did-not-find-any-matches-li-parent">
            <Box className="we-did-not-container">
              <Typography className="we-did-not" variant="inherit">
                We did not find any matches linked to the input PAN in our
                database.
              </Typography>
              <Typography className="we-did-not" variant="inherit">
                &nbsp;
              </Typography>
            </Box>
            <Box className="create-ntb-customer-wrapper">
              <Box className="create-ntb-customer">Create NTB Customer</Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className="home-screen">
        <Box className="home-screen-child" />
        <Box className="frame-group">
          <Box className="header-parent">
            <Box className="header">
              <Box className="ios-status-bar">
                <Box className="time">
                  <Box className="time1">9:41</Box>
                </Box>
                <Box className="time">
                  <Box className="battery">
                    <Box className="border" />
                    <img className="cap-icon" alt="" src={capIcon} />
                    <Box className="capacity" />
                  </Box>
                  <img className="wifi-icon" alt="" src={wifiIcon} />
                  <img
                    className="cellular-connection-icon"
                    alt=""
                    src={cellularIcon}
                  />
                </Box>
              </Box>
              <Box className="header-contents">
                <Box className="logos">
                  <img className="as-logo-icon" alt="" src={logo} />
                  <Box className="partner-bank-logo">
                    <Box className="partner-bank-logo-child" />
                    <Box className="bank-logo">Bank Logo</Box>
                  </Box>
                </Box>
                <Box className="header-items">
                  <Box className="notification">
                    <img
                      className="notification-bg-icon"
                      alt=""
                      src={notificationBg}
                    />
                    <img className="bell-icon" alt="" src={bellIcon} />
                  </Box>
                  <Box className="menu">
                    <Box className="align-right">
                      <img className="vector-icon2" alt="" src={vector2} />
                      <img className="vector-icon3" alt="" src={vector3} />
                      <img className="vector-icon2" alt="" src={vector4} />
                      <img className="vector-icon3" alt="" src={vector5} />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className="profile-section-parent">
              <Box className="profile-section">
                <Box className="profile-info">
                  <img className="image-icon" alt="" src={imageIcon} />
                  <Box className="ashley-simpson-parent">
                    <Box className="ashley-simpson">Ashley Simpson</Box>
                    <Box className="relationship-manager">
                      Relationship Manager
                    </Box>
                  </Box>
                </Box>
                <Box className="edit-profile">
                  <img className="edit-3-icon" alt="" src={editIcon} />
                  <Box className="bank-logo">Edit Profile</Box>
                </Box>
              </Box>
              <Box className="frame-container">
                <Box className="button-2-parent">
                  <Box className="button-2">
                    <Box className="user-plus">
                      <img className="user-plus-child" alt="" src={group2808} />
                    </Box>
                    <Box className="button-info">
                      <Box className="my-applications">
                        <Typography className="we-did-not" variant="inherit">
                          My
                        </Typography>
                        <Typography className="we-did-not" variant="inherit">
                          Applications
                        </Typography>
                      </Box>
                      <Box className="active">59 Active</Box>
                    </Box>
                  </Box>
                  <Box className="button-2">
                    <Box className="mic">
                      <img className="mic-child" alt="" src={group2809} />
                    </Box>
                    <Box className="button-info">
                      <Box className="my-applications">
                        <Typography className="we-did-not" variant="inherit">
                          Meeting
                        </Typography>
                        <Typography className="we-did-not" variant="inherit">
                          Recordings
                        </Typography>
                      </Box>
                      <Box className="active">20 Records</Box>
                    </Box>
                  </Box>
                  <Box className="button-2">
                    <Box className="grid">
                      <img className="grid-child" alt="" src={frame36206} />
                    </Box>
                    <Box className="button-info">
                      <Box className="my-applications">
                        <Typography className="we-did-not" variant="inherit">
                          Other
                        </Typography>
                        <Typography className="we-did-not" variant="inherit">
                          Resources
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box className="button-3-parent">
                  <Box className="button-3">
                    <Box className="button-info3">
                      <img
                        className="plus-circle-icon"
                        alt=""
                        src={plusCircle}
                      />
                      <Box className="new-customer">New Customer</Box>
                    </Box>
                  </Box>
                  <Box className="button-3">
                    <Box className="button-info4">
                      <img className="plus-circle-icon" alt="" src={fileText} />
                      <Box className="new-applications">New Applications</Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box className="my-tasks-section-home">
                <Box className="buttons">
                  <Box className="active-button">
                    <Box className="active-tasks">Active Tasks</Box>
                  </Box>
                  <Box className="inactive-button">
                    <Box className="completed-tasks">Completed Tasks</Box>
                  </Box>
                  <img className="buttons-child" alt="" src={line109} />
                </Box>
                <Box className="information-tabs">
                  <Box className="full-details">
                    <Box className="details-and-status">
                      <Box className="details">
                        <Box className="profile-icon">
                          <Box className="rk">RK</Box>
                        </Box>
                        <Box className="counterparty-name">
                          <Box className="counterparty-name1">
                            Counterparty Name
                          </Box>
                          <Box className="full-name">Full Name</Box>
                        </Box>
                        <Box className="ctpt-id">
                          <Box className="ctpt-id-ctpt-2344-container">
                            <Typography
                              className="we-did-not"
                              variant="inherit"
                            >
                              CTPT-ID:
                            </Typography>
                            <Typography
                              className="delhi"
                              variant="inherit"
                              sx={{ fontWeight: "600", fontSize: "var(--font-size-3xs)" }}
                            >
                              CTPT- 2344
                            </Typography>
                          </Box>
                        </Box>
                        <Box className="ctpt-id">
                          <Box className="ctpt-id-ctpt-2344-container">
                            <Typography className="we-did-not" variant="inherit">
                              Region
                            </Typography>
                            <Typography
                              className="delhi"
                              variant="inherit"
                              sx={{ fontWeight: "600", fontSize: "var(--font-size-3xs)" }}
                            >
                              Delhi
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                      <Box className="status">
                        <Box className="fresh">Fresh</Box>
                      </Box>
                    </Box>
                    <Box className="date-and-progress">
                      <Box className="date">
                        <Typography variant="inherit" component="span">
                          Date modified:
                        </Typography>
                        <Typography variant="inherit" component="span" sx={{ fontWeight: "500" }}>
                          19 Feb 2025
                        </Typography>
                      </Box>
                      <Box className="progress-indicatir">
                        <Box className="progress-percentage">50% done</Box>
                        <img className="progress-bar-icon" alt="" src={progressBar} />
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className="footer-menu">
            <Box className="footer-bg-home-active">
              <Box className="footer-bg">
                <Box className="footer-bg-child" />
                <Box className="footer-bg-item" />
                <Box className="footer-bg-inner" />
              </Box>
              <Box className="footer-bg-home-active-child" />
            </Box>
            <Box className="footer-menu-items">
              <Box className="home">
                <Box className="home1">Home</Box>
                <img className="home-child" alt="" src={group2806} />
              </Box>
              <Box className="my-tasks">
                <Box className="my-tasks1">My Tasks</Box>
                <img className="group-icon" alt="" src={groupIcon} />
              </Box>
              <Box className="recordings1">
                <Box className="recordings2">Recordings</Box>
                <img className="recordings-child" alt="" src={group123} />
              </Box>
              <Box className="applications1">
                <Box className="recordings2">Applications</Box>
                <img className="form-svgrepocom-icon" alt="" src={formIcon} />
              </Box>
              <Box className="log-out">
                <Box className="logout">Logout</Box>
                <img className="logout-3-svgrepocom-icon" alt="" src={logoutIcon} />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LetsGetStarted;
