import React, { useState, useEffect } from "react";

function Projects() {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
		fetch("https://api.github.com/users/BKWes/starred?per_page=6")
			.then((response) => response.json())
			.then((data) => setRepos(data));
	}, []);

    if(!repos) return <div>Loading...</div> 
    
    return(
        <section id="my-projects">
            <h2 className="section-title">My Projects</h2>
            <ul className="projectListItem">
                {repos.map((repo, id) => (
                    <a href={repo.html_url}>
                        <div className="m-3 border border-dark" key={id}>
                            <div className="project">
                                <img src={`https://raw.githubusercontent.com/BKWes/${repo.name}/main/preview/screenshot.jpg`} alt={`${repo.name} preview`} />
                                <div className="project-title">
                                    <h4>{repo.name}</h4>
                                    <p>{repo.description}</p>
                                </div>
                            </div>
                        </div>
                    </a>
                ))}
            </ul>
        </section>
    )
}

export default Projects;