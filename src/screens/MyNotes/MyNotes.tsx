import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

import Header from "components/header/header";
import HeadingType2WithBackIcon from "components/heading2/heading-type2-with-back-icon";
import FooterMenuSet from "components/footermenu/footer-menu-set";
import "./MyNotes.css";

interface Note {
  id: string;
  title: string;
  createdAt: string;
  description?: string;
  files?: File[];
}

const dummyNotes: Note[] = [
  {
    id: "note1",
    title: "Note Regarding New Customer Meeting in Kota",
    createdAt: "13 Jun 2025, 10:45 AM",
    description: "Note details about the new customer's verification",
  },
  {
    id: "note2",
    title: "GST Document collection due for M/S Pashupatinath Enterprises",
    createdAt: "11 Jun 2025, 03:30 PM",
    description: "This note contains GST error references",
  },
];

const MyNotesList: React.FC = () => {
  const navigate = useNavigate();

  const handleCreateNote = () => {
    navigate("/my-notes-create");
  };

  const handleViewNote = (note: Note) => {
    navigate("/my-notes-detail", { state: { note } });
  };

  return (
    <Box className="notes-page">
      <Header />

      <Box className="notes-content">
        <HeadingType2WithBackIcon title="My Notes" />

        <Box className="notes-header-top">
             <Typography sx={{ fontSize: "13px", fontWeight: 600, fontFamily: "Poppins, sans-serif" }}>
                Saved Notes
             </Typography>
            <Box sx={{ flex: 1 }} />
              <Button
                variant="contained"
                sx={{
                  fontSize: "11px",
                  textTransform: "none",
                  fontFamily: "Poppins, sans-serif",
                  padding: "4px 12px",
                  minWidth: "auto",
                 }}
                 onClick={() => navigate("/my-notes-create")}
             >
                + New Note
               </Button>
            </Box>

        <Box className="notes-list">
          {dummyNotes.map((note) => (
            <Box
              key={note.id}
              className="note-card"
              onClick={() => handleViewNote(note)}
            >
              <Typography
                className="note-title"
                sx={{
                  fontSize: "13px",
                  fontWeight: 600,
                  fontFamily: "Poppins, sans-serif",
                  color: "#2d5497",
                }}
              >
                {note.title}
              </Typography>
              <Typography
                className="note-timestamp"
                sx={{
                  fontSize: "11px",
                  fontWeight: 400,
                  fontFamily: "Poppins, sans-serif",
                  color: "#7d7d7d",
                  mt: 0.5,
                }}
              >
                Created on: {note.createdAt}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      <FooterMenuSet />
    </Box>
  );
};

export default MyNotesList;
