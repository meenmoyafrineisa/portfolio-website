import React, { useState, useEffect } from 'react';
import './Projects.css';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const RENDER_URL = 'https://portfolio-website-v91p.onrender.com';
    const LOCAL_URL = 'http://localhost:5001';

    // Auto-detect if we are local or live
    const finalUrl = window.location.hostname === 'localhost' ? LOCAL_URL : RENDER_URL;

    fetch(`${finalUrl}/projects`)
      .then(res => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then(data => {
        setProjects(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Fetch error:', err);
        setError('Could not load projects from the backend.');
        setLoading(false);
      });
  }, []);

  return (
    <section id="projects">
      <p className="section-label">Projects</p>
      <h2 className="section-title">Selected Work</h2>

      {loading && <div className="projects__state"><p>Loading...</p></div>}

      {error && (
        <div className="projects__state projects__state--error">
          <p>❌ {error}</p>
          <p className="projects__hint">Ensure the Render backend is live.</p>
        </div>
      )}

      {!loading && !error && (
        <ul className="projects__grid">
          {projects.map((project, i) => (
            <li key={project.id} className="project-card">
              <div className="project-card__index">{String(i + 1).padStart(2, '0')}</div>
              <div className="project-card__body">
                <h3 className="project-card__name">{project.name}</h3>
                <p className="project-card__desc">{project.description}</p>
                <ul className="project-card__tech">
                  {project.tech.map(t => <li key={t}>{t}</li>)}
                </ul>
              </div>
              <div className="project-card__links">
                <a href={project.github} target="_blank" rel="noreferrer" className="project-card__link">GitHub ↗</a>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
