import { useState } from "react";
import { Box, Paper, TextField, Typography } from "@mui/material";
import ProjectCard from "./ProjectCard";

function ProjectList({ projects }) {
  const [searchTerm, setSearchTerm] = useState(``);

  const filteredProjects = projects.filter((project) => {
    const search = searchTerm.toLocaleLowerCase();

    return (
      project.title.toLocaleLowerCase().includes(search) ||
      project.description.toLocaleLowerCase().includes(search)
    );
  });

  return (
    <Paper
      component="section"
      variant="outlined"
      sx={{
        borderColor: "rgb(44, 0, 222)",
        borderRadius: 2,
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          p: { xs: 2, md: 3 },
          borderBottom: "1px solid hsl(237, 79%, 49%)",
        }}
      >
        <TextField
          placeholder="Search projects"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          fullWidth
        />
      </Box>
      <Box
        sx={{
          p: { xs: 3, md: 4 },
        }}
      >
    {filteredProjects.length > 0 ? (
        filteredProjects.map((project) => (
        <ProjectCard key={project.id} project={project} />
          ))
        ) : (
          <Typography
            sx={{
              textAlign: "center",
              py: 3,
            }}
          >
                No projects found
          </Typography>
        )}
      </Box>
    </Paper>
  );
}

export default ProjectList;