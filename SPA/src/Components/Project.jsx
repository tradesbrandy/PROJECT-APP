import { useState } from "react";
import { Box, Button, Paper, Stack, TextField, Typography } from "@mui/material";

function Project({ onProject }) {
  const [title, setTitle] = useState(``);
  const [description, setDescription] = useState(``);

  function handleSubmit(evt) {
    evt.preventDefault();
    if (!title.trim() || !description.trim()) {
      return;
    }
    onProject(title.trim(), description.trim());
    setTitle(``);
    setDescription(``);
  }

  return (
    <Paper
      component="section"
      variant="outlined"
      sx={{
        p: { xs: 3, md: 4 },
        mb: 5,
        borderColor: "rgb(14, 11, 197)",
        borderRadius: 2,
      }}
    >
      <Typography
        component="h2"
        sx={{
          fontSize: { xs: "2rem", md: "2.8rem" },
          fontWeight: 600,
          mb: 3,
        }}
      >
        Add a Project
      </Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField
            label="Title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            fullWidth
          />
          <TextField
            label="Description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            multiline
            rows={4}
            fullWidth
          />
          <Button
            type="submit"
            variant="outlined"
            sx={{
              alignSelf: "flex-start",
              minWidth: 150,
              height: 55,
              color: "rgb(7, 25, 189)",
              borderColor: "rgb(4, 29, 194)",
              fontSize: "1.25rem",
              textTransform: "none",
              borderRadius: 2,
              "&:hover": {
              borderColor: "rgb(5, 21, 240)",
                backgroundColor: "rgb(15, 230, 101)",
              },
            }}
          >
            Add
          </Button>
        </Stack>
      </Box>
    </Paper>
  );
}

export default Project;