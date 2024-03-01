// Call ProjectSection component and renderiza
import React from 'react';
import ProjectSection from '../components/ProjectSection';

const Projects: React.FC = () => {
  return (
    <section className="portfolio dark">
      <h2>Portfólio de Projetos</h2>
      {/* Adicione aqui as capturas de tela dos projetos e descrições */}
      <ProjectSection />
    </section>
  );
};

export default Projects;