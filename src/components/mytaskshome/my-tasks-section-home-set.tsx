import React from "react";
import { Box, Typography } from "@mui/material";
import "./my-tasks-section-home-set.css";

type TaskItem = {
  code: string;
  role: string;
  workflow: string;
  myTasks: number;
  unassigned: number;
};

type Props = {
  taskData: TaskItem[];
};

const MyTasksSectionHomeSet: React.FC<Props> = ({ taskData }) => {
  const myTaskList = taskData.filter((task) => task.myTasks > 0);
  const unassignedList = taskData.filter((task) => task.unassigned > 0);

  return (
    <Box className="task-table-wrapper">
      <Typography
        sx={{
          fontSize: "10px",
          fontWeight: 600,
          color: "#2d5497",
          fontFamily: "Poppins, sans-serif",
          mb: 1,
        }}
      >
        Assigned to Me
      </Typography>

      {myTaskList.map((task, index) => (
        <Box key={index} className="task-row">
          <Box className="cell circle-cell">
            <div className="circle">{task.code}</div>
          </Box>
          <Box className="cell">
            <Typography className="label" sx={{ fontSize: "7px", fontWeight: 300, fontFamily: "Poppins, sans-serif" }}>
              Role
            </Typography>
            <Typography className="value" sx={{ fontSize: "10px", fontWeight: 500, fontFamily: "Poppins, sans-serif" }}>
              {task.role}
            </Typography>
          </Box>
          <Box className="cell">
            <Typography className="label" sx={{ fontSize: "7px", fontWeight: 300, fontFamily: "Poppins, sans-serif" }}>
              Workflow
            </Typography>
            <Typography className="value" sx={{ fontSize: "10px", fontWeight: 500, fontFamily: "Poppins, sans-serif" }}>
              {task.workflow}
            </Typography>
          </Box>
          <Box className="cell pill-cell">
            <div className="pill green">
              <div className="number">{task.myTasks}</div>
              <div className="text">My Tasks</div>
            </div>
          </Box>
        </Box>
      ))}

      <Typography
        sx={{
          fontSize: "10px",
          fontWeight: 600,
          color: "#2d5497",
          fontFamily: "Poppins, sans-serif",
          mt: 2,
          mb: 1,
        }}
      >
        Unassigned Tasks
      </Typography>

      {unassignedList.map((task, index) => (
        <Box key={`unassigned-${index}`} className="task-row">
          <Box className="cell circle-cell">
            <div className="circle">{task.code}</div>
          </Box>
          <Box className="cell">
            <Typography className="label" sx={{ fontSize: "7px", fontWeight: 300, fontFamily: "Poppins, sans-serif" }}>
              Role
            </Typography>
            <Typography className="value" sx={{ fontSize: "10px", fontWeight: 500, fontFamily: "Poppins, sans-serif" }}>
              {task.role}
            </Typography>
          </Box>
          <Box className="cell">
            <Typography className="label" sx={{ fontSize: "7px", fontWeight: 300, fontFamily: "Poppins, sans-serif" }}>
              Workflow
            </Typography>
            <Typography className="value" sx={{ fontSize: "10px", fontWeight: 500, fontFamily: "Poppins, sans-serif" }}>
              {task.workflow}
            </Typography>
          </Box>
          <Box className="cell pill-cell">
            <div className="pill orange">
              <div className="number">{task.unassigned}</div>
              <div className="text">Unassigned</div>
            </div>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default MyTasksSectionHomeSet;
