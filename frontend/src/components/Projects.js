import React, { useState, useEffect } from 'react';
import './Projects.css';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Replace with your actual Render service URL found in your Render Dashboard
    const RENDER_URL = 'https://portfolio-website-v91p.onrender.com';
    const LOCAL_URL = 'http://localhost:5001';

    // Logic: If we are on our own computer, use Local URL. If on GitHub, use Render URL.
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
        console.error('Failed to load projects:', err);
        setError('Could not load projects from the backend.');
        setLoading(false);
      });
  }, []);

  return (
    <section id="projects">
      <p className="section-label">Projects</p>
      <h2 className="section-title">Selected Work</h2>

      {loading && (
        <div className="projects__state">
          <span className="projects__spinner" />
          <p>Loading projects from backend…</p>
        </div>
      )}

      {error && (
        <div className="projects__state projects__state--error">
          <p>❌ {error}</p>
          <p className="projects__hint">
            The Render server might be "sleeping." Please refresh the page in 1 minute.
          </p>
        </div>
      )}

      {!loading && !error && (
        <ul className="projects__grid">
          {projects.map((project, i) => (
            <li
              key={project.id}
              className="project-card"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="project-card__index">
                {String(i + 1).padStart(2, '0')}
              </div>
              <div className="project-card__body">
                <h3 className="project-card__name">{project.name}</h3>
                <p className="project-card__desc">{project.description}</p>
                <ul className="project-card__tech">
                  {project.tech.map(t => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
              <div className="project-card__links">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer" className="project-card__link">
                    GitHub ↗
                  </a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noreferrer" className="project-card__link project-card__link--live">
                    Live ↗
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
