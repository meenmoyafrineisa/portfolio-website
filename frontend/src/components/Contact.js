import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <p className="section-label">Contact</p>
      <div className="contact__inner">
        <h2 className="section-title contact__title">
          Let's Work<br />
          <span>Together</span>
        </h2>
        <p className="contact__sub">
          Open to research collaborations, NLP projects, and data science
          opportunities. Feel free to reach out.
        </p>
        <div className="contact__links">
          <a
            href="mailto:meenmoyafrineisa@example.com"
            className="btn btn--primary"
          >
            Send an Email
          </a>
          <a
            href="https://github.com/meenmoyafrineisa"
            target="_blank"
            rel="noreferrer"
            className="btn btn--ghost"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
