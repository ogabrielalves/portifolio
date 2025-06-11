export async function fetchPublicRepos(username: string) {
    const res = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);

    if (!res.ok) {
        throw new Error("Erro ao buscar repositórios do GitHub.");
    }

    const data = await res.json();

    // Filtro para repositórios apenas com Java, C# ou TypeScript
    const filteredRepos = data.filter((repo: any) =>
        ["Java", "C#", "TypeScript"].includes(repo.language)
    );

    return filteredRepos.map((repo: any) => ({
        name: repo.name,
        description: repo.description,
        language: repo.language,
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        color: getLanguageColor(repo.language),
        html_url: repo.html_url, 
    }));
}

function getLanguageColor(language: string) {
    switch (language) {
        case "TypeScript":
            return "blue";
        case "Java":
            return "purple";
        case "C#":
            return "green";
        default:
            return "blue";
    }
}
