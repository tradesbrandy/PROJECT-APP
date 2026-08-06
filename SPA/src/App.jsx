import {AppBar,Box,Container,ThemeProvider,Toolbar,Typography,}from "@mui/material";
import useProjects from "./hooks/Projects";
import AddProject from "./Components/Project";
import ProjectList from "./Components/ProjectList";
import theme from "./styles/theme";

function App() {
  const { projects, addProject } = useProjects();

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          minHeight: "100vh",
          backgroundColor: "rgba(227, 234, 238, 0.99)",
        }}
      >
        <AppBar
          position="static"
          elevation={0}
          sx={{
            backgroundColor: "#fff",
            color: "#111",
            borderBottom: "1px solid rgb(9, 15, 205)",
          }}
        >
          <Toolbar
            sx={{
              justifyContent: "center",
              py: 3,
            }}
          >
            <Typography
              component="h1"
              sx={{
                fontSize: {
                  xs: "2rem",
                  sm: "2rem",
                  md: "3rem",
                },
                fontWeight: 700,
                textAlign: "center",
              }}
            >
              PROJECT APP
            </Typography>
          </Toolbar>
        </AppBar>

        <Container
          maxWidth="md"
          sx={{
            py: { xs: 3, md: 6 },
          }}
        >
          <AddProject onProject={addProject} />
          <ProjectList projects={projects} />
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;