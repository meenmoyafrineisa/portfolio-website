import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // 1. Add state to hold your projects
  const [projects, setProjects] = useState([])

  // 2. Add useEffect to fetch data from the backend when the app loads
  useEffect(() => {
    // Notice we use the relative path '/projects' here!
    fetch('/projects')
      .then(response => response.json())
      .then(data => setProjects(data))
      .catch(error => console.error("Error fetching projects:", error));
  }, []);

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>My Portfolio</h1>
          <p>
            Connected to Express Backend!
          </p>
        </div>
        <button
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      {/* 3. Display the projects fetched from the backend */}
      <section id="next-steps">
        <div id="docs">
          <h2>My Projects</h2>
          {projects.length > 0 ? (
            <ul>
              {projects.map(project => (
                <li key={project.id} style={{ marginBottom: '1rem', listStyle: 'none' }}>
                  <h3>🚀 {project.name}</h3>
                  <p>{project.description}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>Loading projects from backend...</p>
          )}
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
