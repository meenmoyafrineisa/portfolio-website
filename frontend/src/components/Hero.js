import React from 'react';
import './Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__noise" aria-hidden="true" />
      <div className="hero__content">
        <p className="hero__greeting">
          <span className="hero__dot" />
          Available for research collaboration
        </p>
        <h1 className="hero__title">
          Meenmoya<br />
          <span>Frineisa</span>
        </h1>
        <p className="hero__sub">
          NLP Researcher &amp; Data Scientist — building language technology
          for low-resource South Asian languages.
        </p>
        <div className="hero__cta">
          <a href="#projects" className="btn btn--primary">See Projects</a>
          <a href="#contact" className="btn btn--ghost">Get in Touch</a>
        </div>
      </div>
      <div className="hero__grid" aria-hidden="true">
        {Array.from({ length: 64 }).map((_, i) => (
          <div key={i} className="hero__cell" />
        ))}
      </div>
    </section>
  );
}
