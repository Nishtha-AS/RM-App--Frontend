import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  Paper,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DeleteIcon from "@mui/icons-material/Delete";
import UploadFileIcon from "@mui/icons-material/UploadFile";

import Header from "components/header/header";
import FooterMenuSet from "components/footermenu/footer-menu-set";
import "./MyNotes.css";

export default function MyNotesDetail() {
  const navigate = useNavigate();
  const location = useLocation();
  const { note } = location.state || {};

  const [title, setTitle] = useState(note?.title || "");
  const [description, setDescription] = useState(note?.description || "");
  const [files, setFiles] = useState<File[]>(note?.files || []);

  const handleSave = () => {
    const updatedNote = {
      ...note,
      title,
      description,
      files,
      createdAt: note?.createdAt || new Date().toISOString(),
    };

    const storedNotes = JSON.parse(localStorage.getItem("notes") || "[]");
    const updatedNotes = storedNotes.map((n: any) =>
      n.createdAt === note?.createdAt ? updatedNote : n
    );

    localStorage.setItem("notes", JSON.stringify(updatedNotes));
    navigate("/my-notes");
  };

  const handleBack = () => {
    navigate("/my-notes");
  };

  const handleAddFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFiles((prev) => [...prev, ...newFiles]);
    }
  };

  const handleRemoveFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <Box className="notes-page">
      <Header />
      <Box className="notes-header-row">
        <IconButton onClick={handleBack}>
          <ArrowBackIcon sx={{ color: "#2d5497" }} />
        </IconButton>
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: 600,
            color: "#2d5497",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          Note Details
        </Typography>
      </Box>

      <Box className="note-form">
        <TextField
          label="Title"
          variant="outlined"
          fullWidth
          size="small"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          label="Description"
          variant="outlined"
          fullWidth
          size="small"
          multiline
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: 500,
            mt: 1.5,
            mb: 0.5,
            fontFamily: "Poppins, sans-serif",
          }}
        >
          Attachments
        </Typography>

        <label htmlFor="upload-input">
          <input
            type="file"
            id="upload-input"
            multiple
            hidden
            onChange={handleAddFiles}
          />
          <Button
            component="span"
            startIcon={<UploadFileIcon />}
            variant="outlined"
            sx={{
              fontSize: "12px",
              textTransform: "none",
              mb: 1,
              fontFamily: "Poppins, sans-serif",
            }}
          >
            Upload Files
          </Button>
        </label>

        {files.length > 0 ? (
          files.map((file, index) => (
            <Paper
              key={index}
              elevation={1}
              sx={{
                p: 1,
                mb: 1,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              <Typography
                sx={{
                  fontSize: "12px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {file.name}
              </Typography>
              <IconButton onClick={() => handleRemoveFile(index)} size="small">
                <DeleteIcon sx={{ fontSize: "18px", color: "#d32f2f" }} />
              </IconButton>
            </Paper>
          ))
        ) : (
          <Typography
            sx={{
              fontSize: "12px",
              fontStyle: "italic",
              color: "#6b7a99",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            No attachments uploaded.
          </Typography>
        )}
      </Box>

      <Box className="note-buttons-row">
        <Button
          variant="outlined"
          fullWidth
          onClick={handleBack}
          sx={{
            fontSize: "14px",
            fontWeight: 600,
            fontFamily: "Poppins, sans-serif",
            textTransform: "none",
            borderColor: "#2d5497",
            color: "#2d5497",
          }}
        >
          Back
        </Button>
        <Button
          variant="contained"
          fullWidth
          onClick={handleSave}
          sx={{
            fontSize: "14px",
            fontWeight: 600,
            fontFamily: "Poppins, sans-serif",
            backgroundColor: "#2d5497",
            textTransform: "none",
            ":hover": {
              backgroundColor: "#1a3d80",
            },
          }}
        >
          Save
        </Button>
      </Box>

      <FooterMenuSet />
    </Box>
  );
}
