import React from 'react';
import './About.css';

const skills = [
  'Python', 'PyTorch', 'HuggingFace', 'Whisper',
  'XLM-RoBERTa', 'React', 'Node.js', 'Express',
  'NLP', 'Speech Processing', 'Kaggle', 'Git',
];

export default function About() {
  return (
    <section id="about" className="about">
      <p className="section-label">About Me</p>
      <div className="about__grid">
        <div className="about__text">
          <h2 className="section-title">
            Researcher &amp;<br />Builder
          </h2>
          <p>
            I'm a data scientist and NLP researcher focused on low-resource
            language technology — particularly Bengali/Bangla dialects. My work
            spans building datasets, training multimodal deep-learning models,
            and publishing reproducible pipelines on Kaggle.
          </p>
          <p>
            Currently developing a multimodal system for classifying 13 Bengali
            regional dialects using audio (Whisper) and text (XLM-RoBERTa)
            fusion architectures. Early Fusion has delivered the best results
            so far.
          </p>
        </div>
        <div className="about__skills">
          <p className="about__skills-label">Tech Stack</p>
          <ul className="about__chips">
            {skills.map(s => (
              <li key={s} className="chip">{s}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
