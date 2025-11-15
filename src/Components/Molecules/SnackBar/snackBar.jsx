import { Snackbar, Alert } from "@mui/material";

export default function AppSnackbar({
  open,
  onClose,
  message,
  severity,
  anchorOrigin,
}) {
  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={onClose}
      anchorOrigin={
        anchorOrigin || { vertical: "bottom", horizontal: "center" }
      }
    >
      <Alert onClose={onClose} severity={severity} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
}
