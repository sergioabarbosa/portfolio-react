interface Repository {
  id: number;
  name: string;
  description: string;
  // Adicione outras propriedades conforme necessário
}

const url: string = 'https://api.github.com/user/repos';
const token: string = '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';

async function getRepos(): Promise<Repository[] | null> {
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': `token ${token}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error('Não foi possível obter os repositórios.');
    }

    const data: Repository[] = await response.json();
    return data;
  } catch (error) {
    console.error('Erro:', error);
    return null;
  }
}

export default getRepos;
