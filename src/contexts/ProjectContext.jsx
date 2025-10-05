import { createContext, useContext, useState, useEffect } from 'react';
import projectsData from '../data/projects.json';

const ProjectContext = createContext();

export const useProjects = () => {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error('useProjects must be used within ProjectProvider');
  }
  return context;
};

export const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simüle edilmiş API çağrısı - sonra gerçek API'ye değişecek
    setTimeout(() => {
      setProjects(projectsData.projects);
      setLoading(false);
    }, 500);
  }, []);

  const addProject = (project) => {
    const newProject = {
      ...project,
      id: projects.length + 1,
    };
    setProjects([...projects, newProject]);
  };

  const updateProject = (id, updatedProject) => {
    setProjects(projects.map(p => p.id === id ? { ...p, ...updatedProject } : p));
  };

  const deleteProject = (id) => {
    setProjects(projects.filter(p => p.id !== id));
  };

  const getProjectById = (id) => {
    return projects.find(p => p.id === parseInt(id));
  };

  return (
    <ProjectContext.Provider value={{
      projects,
      loading,
      addProject,
      updateProject,
      deleteProject,
      getProjectById
    }}>
      {children}
    </ProjectContext.Provider>
  );
};