import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import UploadFileIcon from "@mui/icons-material/UploadFile";

import Header from "components/header/header";
import FooterMenuSet from "components/footermenu/footer-menu-set";

import "./MyNotes.css";

const MyNotesCreate = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [attachment, setAttachment] = useState<File | null>(null);

  const handleSave = () => {
    const existingNotes = JSON.parse(localStorage.getItem("myNotes") || "[]");

    const newNote = {
      id: Date.now().toString(),
      title,
      description,
      filename: attachment?.name || null,
      timestamp: new Date().toISOString(),
    };

    localStorage.setItem(
      "myNotes",
      JSON.stringify([newNote, ...existingNotes])
    );

    navigate("/my-notes");
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setAttachment(e.target.files[0]);
    }
  };

  return (
    <Box className="notes-page">
      <Header />

      <Box className="notes-header-row">
        <IconButton onClick={() => navigate(-1)}>
          <ArrowBackIcon style={{ color: "#2d5497" }} />
        </IconButton>
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: 600,
            fontFamily: "Poppins, sans-serif",
            color: "#2d5497",
          }}
        >
          My Notes – New Entry
        </Typography>
      </Box>

      <Box className="note-form">
        <TextField
          fullWidth
          label="Note Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <TextField
          fullWidth
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          multiline
          rows={4}
        />

        <Button
          component="label"
          variant="outlined"
          startIcon={<UploadFileIcon />}
        >
          Upload File
          <input type="file" hidden onChange={handleFileUpload} />
        </Button>

        {attachment && (
          <Typography className="note-file-preview">
            📎 {attachment.name}
          </Typography>
        )}
      </Box>

      <Box className="note-buttons-row">
        <Button
          variant="outlined"
          fullWidth
          onClick={() => navigate("/my-notes")}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          fullWidth
          onClick={handleSave}
          disabled={!title}
        >
          Save Note
        </Button>
      </Box>

      <FooterMenuSet />
    </Box>
  );
};

export default MyNotesCreate;
