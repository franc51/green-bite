// components/Loader.js
import React from "react";
import { CircularProgress, Box } from "@mui/material";

export default function Loader({ size = 24, fullScreen = false }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        ...(fullScreen && {
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundColor: "rgba(0,0,0,0.2)",
          zIndex: 9999,
        }),
      }}
    >
      <CircularProgress size={size} />
    </Box>
  );
}
