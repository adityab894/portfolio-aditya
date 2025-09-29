"use client";

import { useEffect } from "react";

export default function Navbar() {
  useEffect(() => {
    const hamburger = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    const toggleMenu = () => {
      if (!navLinks) return;
      const isVisible = navLinks.style.display === 'flex';
      navLinks.style.display = isVisible ? 'none' : 'flex';
    };

    if (hamburger && navLinks) {
      hamburger.addEventListener('click', toggleMenu);
      const linkNodes = document.querySelectorAll('.nav-link');
      const linkCleanup = [];
      linkNodes.forEach((link) => {
        const handler = () => {
          if (window.innerWidth <= 809 && navLinks) {
            navLinks.style.display = 'none';
          }
        };
        link.addEventListener('click', handler);
        linkCleanup.push(() => link.removeEventListener('click', handler));
      });

      return () => {
        hamburger.removeEventListener('click', toggleMenu);
        linkCleanup.forEach((off) => off());
      };
    }
  }, []);

  return (
    <header className="header-sticky">
      <div className="nav-container">
        <nav className="nav-glass">
          <a href="/" className="nav-brand">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.2501 23.25L13.7501 9.75L3.00006 14.25L10.2501 23.25Z" stroke="#00FFB2" strokeWidth="2" strokeLinejoin="round"/>
              <path d="M13.75 0.75L10.25 14.25L21 9.75L13.75 0.75Z" stroke="#00FFB2" strokeWidth="2" strokeLinejoin="round"/>
            </svg>
            <span>Innovator</span>
          </a>
          <div className="nav-links">
            <a href="/aboutus" className="nav-link">About Me</a>
            <a href="/skills" className="nav-link">Skills</a>
            <a href="/projects" className="nav-link">Projects</a>
            <a href="/contact" className="nav-link">Contact</a>
          </div>
          <a href="/contact" className="btn btn-secondary body-large">Hire Me</a>
          <button className="hamburger-menu" aria-label="Open menu">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          </button>
        </nav>
      </div>
    </header>
  );
}
