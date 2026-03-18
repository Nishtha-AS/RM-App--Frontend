import React, { useState } from "react";
import {
  Box,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Header from "components/header/header";
import FooterMenuSet from "components/footermenu/footer-menu-set";
import HeadingType2WithBackIcon from "components/heading2/heading-type2-with-back-icon";
import "./TasksList.css";

interface Task {
  role: string;
  workflow: string;
  mine: number;
  unassigned: number;
}

const data: Task[] = [
  { role: "Credit Manager", workflow: "BANK Full CAM for AgriSME BU", mine: 2, unassigned: 4 },
  { role: "Credit Editor", workflow: "Credit Customer Edit", mine: 4, unassigned: 0 },
  { role: "Credit Manager", workflow: "Retail Loan CAM for Urban MSME", mine: 1, unassigned: 3 },
  { role: "Underwriting Analyst", workflow: "Risk Score Review – Pre Sanction", mine: 3, unassigned: 2 },
];

export default function TasksList() {
  const navigate = useNavigate();
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  const myTasks = data.filter((t) => t.mine > 0);
  const unassignedTasks = data.filter((t) => t.unassigned > 0);

  return (
    <Box className="tasks-page">
      <Header />
      <Box className="tasks-content">
        <HeadingType2WithBackIcon title="My Tasks" />

        <Typography sx={{ fontSize: "12px", fontWeight: 600, fontFamily: "Poppins, sans-serif", mt: 2 }}>
          Assigned to Me
        </Typography>
        <Box className="tasks-list">
          {myTasks.map((t, i) => (
            <Box key={i} className="task-card" onClick={() => setSelectedTask(t)}>
              <Box className="card-avatar">{t.role.split(" ").map((w) => w[0]).join("").slice(0, 2)}</Box>
              <Box className="card-info">
                <Typography className="info-role" sx={{ fontSize: "12px", fontWeight: 500, fontFamily: "Poppins, sans-serif" }}>{t.role}</Typography>
                <Typography className="info-workflow" sx={{ fontSize: "12px", fontWeight: 500, fontFamily: "Poppins, sans-serif" }}>{t.workflow}</Typography>
              </Box>
              <Box className="card-meta">
                <Box className="badge green">{t.mine} My Tasks</Box>
              </Box>
            </Box>
          ))}
        </Box>

        <Typography sx={{ fontSize: "12px", fontWeight: 600, fontFamily: "Poppins, sans-serif", mt: 4 }}>
          Unassigned Tasks
        </Typography>
        <Box className="tasks-list">
          {unassignedTasks.map((t, i) => (
            <Box key={i} className="task-card" onClick={() => setSelectedTask(t)}>
              <Box className="card-avatar">{t.role.split(" ").map((w) => w[0]).join("").slice(0, 2)}</Box>
              <Box className="card-info">
                <Typography className="info-role" sx={{ fontSize: "12px", fontWeight: 500, fontFamily: "Poppins, sans-serif" }}>{t.role}</Typography>
                <Typography className="info-workflow" sx={{ fontSize: "12px", fontWeight: 500, fontFamily: "Poppins, sans-serif" }}>{t.workflow}</Typography>
              </Box>
              <Box className="card-meta">
                <Box className="badge orange">{t.unassigned} Unassigned</Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      <FooterMenuSet />

      {/* Task Details Dialog */}
      <Dialog open={!!selectedTask} onClose={() => setSelectedTask(null)} fullWidth maxWidth="xs">
        <DialogTitle sx={{ fontSize: "16px", fontWeight: 600, fontFamily: "Poppins, sans-serif", color: "#2d5497" }}>
          Task Details
        </DialogTitle>
        <DialogContent dividers>
          {selectedTask && (
            <>
              <Typography sx={{ fontSize: "13px", fontWeight: 500, mb: 1 }}>
                <strong>Role:</strong> {selectedTask.role}
              </Typography>
              <Typography sx={{ fontSize: "13px", fontWeight: 500, mb: 1 }}>
                <strong>Workflow:</strong> {selectedTask.workflow}
              </Typography>
              <Typography sx={{ fontSize: "13px", fontWeight: 500, mb: 1 }}>
                <strong>My Tasks:</strong> {selectedTask.mine}
              </Typography>
              <Typography sx={{ fontSize: "13px", fontWeight: 500 }}>
                <strong>Unassigned:</strong> {selectedTask.unassigned}
              </Typography>
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={() => setSelectedTask(null)}>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
