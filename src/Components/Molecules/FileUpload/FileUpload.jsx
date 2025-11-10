import { Button, Box, Typography } from "@mui/material";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import "./FileUpload.css";

export default function FileUploadComponent({ file, setFile }) {
  const handleChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <Box className="file_upload_component_main">
      <Button
        variant="contained"
        component="label"
        startIcon={<AddPhotoAlternateIcon />}
      >
        Încarcă imagine
        <input type="file" accept="image/*" hidden onChange={handleChange} />
      </Button>

      {file && (
        <Box mt={2} className="file_upload_component_preview">
          <Typography>Previzualizare</Typography>
          <Box
            component="img"
            src={URL.createObjectURL(file)}
            alt="Preview"
            sx={{ maxWidth: 300, borderRadius: 1 }}
          />
        </Box>
      )}
    </Box>
  );
}
