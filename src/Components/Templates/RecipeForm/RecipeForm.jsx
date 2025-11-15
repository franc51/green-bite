import React, { useState } from "react";
import AppSnackbar from "../../Molecules/SnackBar/snackBar";
import Loader from "../../Molecules/Loader/Loader";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Chip,
  Stack,
  Typography,
  Slider,
  ToggleButton,
  ToggleButtonGroup,
  TextField,
  IconButton,
  MenuItem,
  Stepper,
  Step,
  StepLabel,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export default function RecipeForm() {
  const [activeStep, setActiveStep] = useState(0);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const steps = [
    "Detalii rețetă",
    "Ingrediente",
    "Instrucțiuni",
    "Finalizează",
  ];

  const [form, setForm] = useState({
    title: "",
    category: "",
    picture: "",
    cooktime: 30,
    servings: 1,
    difficulty: "easy",
    ingredients: [],
    instructions: [],
    vegan: false,
    keto: false,
    author: "",
  });

  const [ingredientInput, setIngredientInput] = useState("");
  const [instructionInput, setInstructionInput] = useState("");

  const categories = [
    "Fel principal",
    "Supă/Ciorbă",
    "Antreu",
    "Paste",
    "Pește",
    "Desert",
  ];
  const vitalIngredients = [
    "sare",
    "piper",
    "boia",
    "zahăr",
    "pătrunjel",
    "mărar",
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const addItem = (field, value, setter) => {
    if (value.trim()) {
      setForm((prev) => ({ ...prev, [field]: [...prev[field], value.trim()] }));
      setter("");
    }
  };

  const removeItem = (field, index) =>
    setForm((prev) => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index),
    }));

  const handleDifficultyChange = (previusDifficulty, nextDifficulty) =>
    nextDifficulty &&
    setForm((prev) => ({ ...prev, difficulty: nextDifficulty }));

  const handleNext = () => {
    if (validateStep(activeStep)) {
      setActiveStep((prev) => prev + 1);
    }
  };

  const handleBack = () => setActiveStep((prev) => prev - 1);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateStep(activeStep)) {
      setSnackbar({
        open: true,
        message: "Trebuie să completezi toate câmpurile obligatorii!",
        severity: "error",
      });
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/recipes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) throw new Error("Network response was not ok");

      const data = await response.json();
      console.log("Recipe saved:", data);
      setSnackbar({
        open: true,
        message: "Rețeta a fost adăugată!",
        severity: "success",
      });

      // Reset form
      setForm({
        title: "",
        category: "",
        picture: "",
        cooktime: 30,
        servings: 1,
        difficulty: "easy",
        ingredients: [],
        instructions: [],
        vegan: false,
        keto: false,
        author: "",
      });
      setActiveStep(0);
    } catch (error) {
      console.error("Error saving recipe:", error);
      setSnackbar({
        open: true,
        message: "A apărut o eroare la salvarea rețetei.",
        severity: "error",
      });
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  const validateStep = (step) => {
    const newErrors = {};

    if (step === 0) {
      if (!form.title.trim()) newErrors.title = "Titlul este obligatoriu";
      if (!form.category.trim())
        newErrors.category = "Categoria este obligatorie";
    }

    if (step === 1 && form.ingredients.length === 0) {
      newErrors.ingredients = "Trebuie să adaugi cel puțin un ingredient";
    }

    if (step === 2 && form.instructions.length === 0) {
      newErrors.instructions = "Trebuie să adaugi cel puțin o instrucțiune";
    }

    if (step === 3 && form.author.length === 0) {
      newErrors.author = "Trebuie să introduci numele tău";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // true if no errors
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Stack spacing={2}>
            <TextField
              label="Titlu"
              name="title"
              value={form.title}
              onChange={handleChange}
              error={!!errors.title}
              helperText={errors.title}
              required
            />
            <TextField
              select
              label="Categorie"
              name="category"
              value={form.category}
              onChange={handleChange}
              error={!!errors.category}
              helperText={errors.category}
              required
            >
              {categories.map((cat) => (
                <MenuItem key={cat} value={cat}>
                  {cat}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              label="Link imagine"
              name="picture"
              value={form.picture}
              onChange={handleChange}
            />

            <Typography>
              Timp de gătire:{" "}
              {form.cooktime >= 60
                ? `${Math.floor(form.cooktime / 60)}h ${form.cooktime % 60}m`
                : `${form.cooktime} min`}
            </Typography>
            <Slider
              value={form.cooktime}
              min={5}
              max={240}
              step={5}
              valueLabelDisplay="auto"
              onChange={(_, val) =>
                setForm((prev) => ({ ...prev, cooktime: val }))
              }
            />

            <Typography>Porții: {form.servings}</Typography>
            <Slider
              value={form.servings}
              min={1}
              max={20}
              step={1}
              valueLabelDisplay="auto"
              onChange={(_, val) =>
                setForm((prev) => ({ ...prev, servings: val }))
              }
            />
            <Typography>Dificultate:</Typography>
            <ToggleButtonGroup
              value={form.difficulty}
              exclusive
              onChange={handleDifficultyChange}
            >
              {["easy", "medium", "hard"].map((lvl) => (
                <ToggleButton
                  key={lvl}
                  value={lvl}
                  color={
                    lvl === "easy"
                      ? "success"
                      : lvl === "medium"
                      ? "warning"
                      : "error"
                  }
                >
                  {lvl === "easy"
                    ? "Ușor"
                    : lvl === "medium"
                    ? "Mediu"
                    : "Dificil"}
                </ToggleButton>
              ))}
            </ToggleButtonGroup>
          </Stack>
        );
      case 1:
        return (
          <Stack spacing={2}>
            <Typography>Ingrediente</Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap">
              {form.ingredients.map((ing, i) => (
                <Chip
                  key={i}
                  label={ing}
                  onDelete={() => removeItem("ingredients", i)}
                />
              ))}
              {errors.ingredients && (
                <Typography color="error" variant="body2">
                  {errors.ingredients}
                </Typography>
              )}
            </Stack>
            <Stack direction="row" spacing={1}>
              <TextField
                label="Adaugă ingredient"
                value={ingredientInput}
                onChange={(e) => setIngredientInput(e.target.value)}
                fullWidth
              />
              <IconButton
                color="primary"
                onClick={() =>
                  addItem("ingredients", ingredientInput, setIngredientInput)
                }
              >
                <AddIcon />
              </IconButton>
            </Stack>
            <Typography>Sugestii:</Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap">
              {vitalIngredients.map((ing) => (
                <Chip
                  key={ing}
                  label={ing}
                  variant="outlined"
                  color="secondary"
                  onClick={() =>
                    !form.ingredients.includes(ing) &&
                    setForm((prev) => ({
                      ...prev,
                      ingredients: [...prev.ingredients, ing],
                    }))
                  }
                />
              ))}
            </Stack>
          </Stack>
        );
      case 2:
        return (
          <Stack spacing={2}>
            <Typography>Instrucțiuni</Typography>
            <Stack direction="column" spacing={1}>
              {form.instructions.map((ins, i) => (
                <Chip
                  key={i}
                  label={ins}
                  onDelete={() => removeItem("instructions", i)}
                  variant="outlined"
                />
              ))}
              {errors.instructions && (
                <Typography color="error" variant="body2">
                  {errors.instructions}
                </Typography>
              )}
            </Stack>
            <Stack direction="row" spacing={1}>
              <TextField
                label="Adaugă instrucțiune"
                value={instructionInput}
                onChange={(e) => setInstructionInput(e.target.value)}
                fullWidth
              />
              <IconButton
                color="primary"
                onClick={() =>
                  addItem("instructions", instructionInput, setInstructionInput)
                }
              >
                <AddIcon />
              </IconButton>
            </Stack>
          </Stack>
        );
      case 3:
        return (
          <Stack spacing={2}>
            <FormControlLabel
              control={
                <Checkbox
                  name="vegan"
                  checked={form.vegan}
                  onChange={handleChange}
                />
              }
              label="Rețetă Vegană"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="keto"
                  checked={form.keto}
                  onChange={handleChange}
                />
              }
              label="Rețetă Keto"
            />
            <TextField
              label="Numele tău"
              name="author"
              value={form.author}
              onChange={handleChange}
              error={!!errors.author}
              helperText={errors.author}
            />
          </Stack>
        );
      default:
        return "Unknown step";
    }
  };

  return (
    <Box sx={{ width: "60%", margin: "auto", mt: 5 }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Box sx={{ mt: 3 }}>
        <form onSubmit={handleSubmit}>
          {renderStepContent(activeStep)}
          <Stack
            direction="row"
            spacing={2}
            justifyContent="space-between"
            mt={3}
          >
            <Button disabled={activeStep === 0} onClick={handleBack}>
              Înapoi
            </Button>
            {activeStep < steps.length - 1 ? (
              <Button variant="contained" onClick={handleNext}>
                Următorul pas
              </Button>
            ) : (
              <Button variant="contained" type="submit" disabled={loading}>
                {loading ? <Loader size={20} /> : "Adaugă rețeta"}
              </Button>
            )}
          </Stack>
        </form>
      </Box>
      <AppSnackbar
        open={snackbar.open}
        onClose={() => setSnackbar((prev) => ({ ...prev, open: false }))}
        message={snackbar.message}
        severity={snackbar.severity}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      />
    </Box>
  );
}
