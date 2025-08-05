'use client';
import { useEffect } from 'react';

export default function BackToTop() {
  useEffect(() => {
    const handleScroll = () => {
      const button = document.querySelector('.xb-backtotop');
      if (!button) return;

      if (window.scrollY > 500) {
        button.classList.add('active');
      } else {
        button.classList.remove('active');
      }
    };

    const scrollToTop = (e: Event) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const scrollLink = document.querySelector('.scroll');
    scrollLink?.addEventListener('click', scrollToTop);
    window.addEventListener('scroll', handleScroll);

    return () => {
      scrollLink?.removeEventListener('click', scrollToTop);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="xb-backtotop style-two">
      <a href="#" className="scroll">
        <i className="far fa-arrow-up"></i>
      </a>
    </div>
  );
}
