"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const scrollElements = document.querySelectorAll(".reveal-on-scroll");

    const elementInView = (el) => {
      const elementTop = el.getBoundingClientRect().top;
      return elementTop <= (window.innerHeight || document.documentElement.clientHeight) - 50;
    };

    const displayScrollElement = (element) => {
      element.classList.add("is-visible");
    };

    const handleScrollAnimation = () => {
      scrollElements.forEach((el) => {
        if (elementInView(el)) {
          displayScrollElement(el);
        }
      });
    };

    handleScrollAnimation();
    window.addEventListener("scroll", handleScrollAnimation);

    return () => {
      window.removeEventListener("scroll", handleScrollAnimation);
    };
  }, []);

  return (
    <main>
      <section className="hero-section">
        <div className="hero-glow"></div>
        <div className="relative z-10 flex flex-col items-center">
          <h1 className="h1-hero reveal-on-scroll">Crafting Innovative Digital Solutions</h1>
          <p className="body-large text-secondary reveal-on-scroll max-w-[712px] mt-8" style={{ transitionDelay: '150ms' }}>
            I&apos;m a passionate software developer specializing in efficient project management and creative problem-solving, turning ideas into reality.
          </p>
          <div className="reveal-on-scroll mt-12" style={{ transitionDelay: '300ms' }}>
            <a href="#projects" className="btn btn-primary body-large">View My Work</a>
          </div>
          <div className="reveal-on-scroll flex flex-col items-center gap-4 mt-24" style={{ transitionDelay: '450ms' }}>
            <p className="body-small text-secondary">Trusted by startups & enterprises</p>
            <div className="flex items-center gap-6 text-primary">
              <svg className="h-6 w-6 opacity-60" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M14.615 1.585a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.962-7.313H4.39a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z" clipRule="evenodd" /></svg>
              <svg className="h-6 w-6 opacity-60" fill="currentColor" viewBox="0 0 24 24"><path d="M12.378 1.602a.75.75 0 00-.756 0L3 7.252v10.344a.75.75 0 00.22.53l8.25 8.25a.75.75 0 001.06 0l8.25-8.25a.75.75 0 00.22-.53V7.252L12.378 1.602zM12 7.5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0112 7.5zM12 15a1 1 0 100-2 1 1 0 000 2z" /></svg>
              <svg className="h-6 w-6 opacity-60" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm11.378-3.917c-.882 0-1.473.823-1.473 1.838 0 1.014.591 1.837 1.473 1.837.882 0 1.473-.823 1.473-1.837 0-1.015-.591-1.838-1.473-1.838zm-2.822 5.433v5.105h2.179v-4.827c0-.63.45-1.132 1.012-1.132.562 0 .898.396.898 1.107v4.852h2.179v-5.105c0-2.032-1.25-2.863-2.523-2.863-1.42 0-2.016 1.014-2.222 1.385v-1.19h-2.18v5.626z" clipRule="evenodd" /></svg>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
