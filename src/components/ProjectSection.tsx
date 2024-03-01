import React, { useEffect, useState } from 'react';
import getRepos from '../api/data';

interface Repository {
  id: number;
  name: string;
  html_url: string; // Certifique-se de que a propriedade html_url esteja incluída
  description: string;
}

const ProjectSection: React.FC = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const reposData = await getRepos(); // Obter os dados dos repositórios
        if (reposData) {
          setRepositories(reposData as Repository[]); // Atualizar o estado com os dados dos repositórios
        }
      } catch (error) {
        console.error('Erro ao buscar repositórios do GitHub:', error);
      }
    };

    fetchRepositories();
  }, []);

  return (
    <section>
      <h2>Meus Projetos no GitHub</h2>
      <ul>
        {repositories.map(repo => (
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.name}</a>
            <p>{repo.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectSection;
