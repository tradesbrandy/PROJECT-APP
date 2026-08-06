import { useState } from "react";

const initialProjects = [
  { id: 1, title: `Project1`, description: `Description of the project` },
  { id: 2, title: `Project2`, description: `Description of the project` },
  { id: 3, title: `Project3`, description: `Description of the project` },
];

function useProjects() {
  const [projects, setProjects] = useState(initialProjects);

  function addProject(title, description) {
    const newProject = {
      id: Date.now(),
      title,
      description,
    };
    setProjects((currentProjects) => [...currentProjects, newProject]);
  }

  return { projects, addProject };
}

export default useProjects;