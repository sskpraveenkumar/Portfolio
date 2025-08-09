import { useEffect, useState } from 'react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    const sections = document.querySelectorAll('section[id]');

    const handleScroll = () => {
      const scrollPos = window.scrollY + 75;
      let current = '';

      sections.forEach((section) => {
        if (
          scrollPos >= section.offsetTop &&
          scrollPos < section.offsetTop + section.offsetHeight
        ) {
          current = section.getAttribute('id');
        }
      });

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 70;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav>
      <a
        href="#home"
        className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
        onClick={(e) => handleClick(e, '#home')}
      >
        Home
      </a>
      <a
        href="#about"
        className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
        onClick={(e) => handleClick(e, '#about')}
      >
        About
      </a>
      <a
        href="#projects"
        className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
        onClick={(e) => handleClick(e, '#projects')}
      >
        Projects
      </a>
      <a
        href="#contact"
        className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
        onClick={(e) => handleClick(e, '#contact')}
      >
        Contact
      </a>
    </nav>
  );
};

export default Navbar;
