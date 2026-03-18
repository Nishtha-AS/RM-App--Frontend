import { Box, Typography, IconButton, Button } from "@mui/material";
import Header from "components/header/header";
import FooterMenuSet from "components/footermenu/footer-menu-set";
import SectionHeaderWithActions from "components/sectionheading/section-header-with-actions";
import micIcon from "assets/microphone.svg";
import notesIcon from "assets/notes.svg";
import playIcon from "assets/play.svg";
import pauseIcon from "assets/pause.svg";
import deleteIcon from "assets/delete.svg";
import shareIcon from "assets/share-nodes.svg";
import { useNavigate } from "react-router-dom";
import "./saved-recordings.css";

const recordings = [
  {
    title: "RK Enterprises Meeting",
    ctptId: "CTPT-XXXX",
    bankRep: "Akash Shinde",
    date: "19 Feb 2025",
  },
  {
    title: "Sagarmantha Co. Meeting",
    ctptId: "CTPT-XXXX",
    bankRep: "Akash Shinde",
    date: "19 Feb 2025",
  },
  {
    title: "MT Retails Meeting",
    ctptId: "CTPT-XXXX",
    bankRep: "Akash Shinde",
    date: "19 Feb 2025",
  },
];

const SavedRecordings = () => {
  const navigate = useNavigate();

  return (
    <Box className="saved-recordings-screen">
      <Header />

      <Box className="saved-recordings-content">
        <SectionHeaderWithActions headingText="Meeting Recordings" />

        <Typography
          className="saved-title"
          sx={{
            fontSize: "14px",
            fontWeight: 500,
            fontFamily: "Poppins, sans-serif",
          }}
        >
          Saved Recordings
        </Typography>

        <Box className="recording-list">
          {recordings.map((item, index) => (
            <Box key={index} className="recording-card">
              <Box className="recording-header-row">
                <Box className="mic-icon-circle">
                  <img src={micIcon} alt="mic" className="recording-icon" />
                </Box>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "#2d5497",
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  {item.title}
                </Typography>
              </Box>

              <Typography
                sx={{
                  fontSize: "12px",
                  fontWeight: 400,
                  fontFamily: "Poppins, sans-serif",
                  color: "#444",
                  mt: 1,
                }}
              >
                CTPT ID: {item.ctptId} &nbsp; Bank Rep:{" "}
                <span style={{ fontWeight: 600, color: "#2d5497" }}>
                  {item.bankRep}
                </span>
              </Typography>

              <Typography
                sx={{
                  fontSize: "11px",
                  fontWeight: 400,
                  color: "#999",
                  fontFamily: "Poppins, sans-serif",
                  mt: "2px",
                }}
              >
                Date added: {item.date}
              </Typography>

              <Box className="recording-actions">
                <IconButton onClick={() => console.log(`Viewing notes for ${item.title}`)}>
                  <img src={notesIcon} alt="notes" />
                </IconButton>
                <IconButton onClick={() => console.log(`Sharing ${item.title}`)}>
                  <img src={shareIcon} alt="share" />
                </IconButton>
                <IconButton onClick={() => console.log(`Playing ${item.title}`)}>
                  <img src={playIcon} alt="play" />
                </IconButton>
                <IconButton onClick={() => console.log(`Pausing ${item.title}`)}>
                  <img src={pauseIcon} alt="pause" />
                </IconButton>
                <IconButton onClick={() => console.log(`Deleting ${item.title}`)}>
                  <img src={deleteIcon} alt="delete" />
                </IconButton>
              </Box>
            </Box>
          ))}
        </Box>

        <Box className="add-new-button-wrapper">
          <Button className="add-new-button" onClick={() => navigate("/meeting-recordings/new")}>
            + Add New
          </Button>
        </Box>
      </Box>

      <FooterMenuSet />
    </Box>
  );
};

export default SavedRecordings;
