import { FunctionComponent, useState } from "react";
import {
  Box,
  Typography,
  Button,
  Select,
  MenuItem,
  TextField,
  Checkbox,
  FormControlLabel,
  Chip,
  Menu,
} from "@mui/material";

import Header from "components/header/header";
import FooterMenuSet from "components/footermenu/footer-menu-set";
import SectionHeaderWithActions from "components/sectionheading/section-header-with-actions";

import pinIcon from "assets/paperclip.svg"; // ✅ Ensure this path is correct
import "./new-recording.css";

const NewRecording: FunctionComponent = () => {
  const [typeOfPD, setTypeOfPD] = useState("");
  const [camIncluded, setCamIncluded] = useState<string | null>(null);
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");
  const [emailList, setEmailList] = useState<string[]>([]);
  const [meetingList, setMeetingList] = useState<{ name: string; designation: string; contact: string }[]>([]);

  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [contact, setContact] = useState("");
  const [comments, setComments] = useState("");

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleAddEmail = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && email.trim()) {
      setEmailList([...emailList, email.trim()]);
      setEmail("");
      e.preventDefault();
    }
  };

  const handleDeleteEmail = (value: string) => {
    setEmailList(emailList.filter((e) => e !== value));
  };

  const handleAddMeeting = () => {
    if (name.trim() && designation.trim() && contact.trim()) {
      setMeetingList([...meetingList, { name, designation, contact }]);
      setName("");
      setDesignation("");
      setContact("");
    }
  };

  const handleAttachClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleAttachOption = (type: string) => {
    setAnchorEl(null);
    alert(`You chose to attach a ${type}`);
  };

  return (
    <Box className="new-recording-screen">
      <Header />

      <Box className="new-recording-content">
        <SectionHeaderWithActions headingText="Meeting Recordings" />

        <Typography className="form-title">
          <span className="highlight">New</span> Recording
        </Typography>

        <Box className="form-grid">
          <Typography className="label">Type of PD</Typography>
          <Select
            fullWidth
            value={typeOfPD}
            onChange={(e) => setTypeOfPD(e.target.value)}
            displayEmpty
          >
            <MenuItem value="">-select-</MenuItem>
            <MenuItem value="Online PD">Online PD</MenuItem>
            <MenuItem value="Offline PD">Offline PD</MenuItem>
          </Select>

          <Typography className="label">Add in CAM?</Typography>
          <Box className="checkbox-row">
            <FormControlLabel
              control={<Checkbox checked={camIncluded === "Yes"} onChange={() => setCamIncluded("Yes")} />}
              label="Yes"
            />
            <FormControlLabel
              control={<Checkbox checked={camIncluded === "No"} onChange={() => setCamIncluded("No")} />}
              label="No"
            />
          </Box>
        </Box>

        <Typography className="label">Location</Typography>
        <Box className="location-buttons">
          <button className="outlined-btn">AUTO DETECT</button>
          <button className="outlined-btn">MANUAL</button>
        </Box>

        <Typography className="label">Bank Representatives:</Typography>
        <Box className="email-chip-container">
          {emailList.map((item) => (
            <Chip
              key={item}
              label={item}
              onDelete={() => handleDeleteEmail(item)}
              className="email-chip"
            />
          ))}
          <input
            className="email-input"
            placeholder="Enter Email Address..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={handleAddEmail}
          />
        </Box>

        <Typography className="label">Meeting With:</Typography>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Customer Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Designation"
          value={designation}
          onChange={(e) => setDesignation(e.target.value)}
        />
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Contact Number"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />
        <Button variant="contained" className="add-btn" onClick={handleAddMeeting}>
          ADD
        </Button>

        {meetingList.length > 0 && (
          <Box className="meeting-table">
            <Box className="meeting-row header">
              <Box>Name</Box>
              <Box>Designation</Box>
              <Box>Contact</Box>
            </Box>
            {meetingList.map((item, index) => (
              <Box className="meeting-row" key={index}>
                <Box>{item.name}</Box>
                <Box>{item.designation}</Box>
                <Box>{item.contact}</Box>
              </Box>
            ))}
          </Box>
        )}

        <Typography className="label">Add Notes:</Typography>
        <Box className="comments-wrapper" sx={{ position: "relative" }}>
          <textarea
            className="comments-box"
            placeholder="Comments/ Notes"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
          />
          <img
            src={pinIcon}
            alt="Attach"
            className="pin-icon"
            onClick={handleAttachClick}
          />
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={() => setAnchorEl(null)}
            PaperProps={{ style: { borderRadius: 8 } }}
          >
            <MenuItem onClick={() => handleAttachOption("Image")}>Attach Image</MenuItem>
            <MenuItem onClick={() => handleAttachOption("Document")}>Attach Document</MenuItem>
            <MenuItem onClick={() => handleAttachOption("Audio")}>Attach Audio</MenuItem>
          </Menu>
        </Box>

        <Box className="btn-group">
          <Button variant="outlined">Back</Button>
          <Button variant="contained">Save</Button>
          <Button variant="contained">Next</Button>
        </Box>
      </Box>

      <FooterMenuSet />
    </Box>
  );
};

export default NewRecording;
