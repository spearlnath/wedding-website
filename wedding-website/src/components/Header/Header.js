// src/components/Header.js
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import '../../App.css'; // If you have specific styles
import './Header.css'; // If you have specific styles

import logoimg from '../../assets/logo.png';

function Header() {
  const navigate = useNavigate();

  useEffect(() => {
    // Smooth Scroll for Navigation
    const handleNavigation = (e) => {
      const href = e.currentTarget.href;
      const isExternalLink = /^https?:\/\//.test(href); // Check if the href starts with http:// or https://

      if (isExternalLink) {
        return; // Allow the default behavior for external links
      }
      e.preventDefault();
      const targetId = new URL(e.currentTarget.href).hash.substring(1);
      navigate('/', { state: { scrollTo: targetId } });
    };

    const anchors = document.querySelectorAll('nav a');
    anchors.forEach(anchor => {
      anchor.addEventListener('click', handleNavigation);
    });

    // STICKY MENU
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const navLinks = document.querySelectorAll('nav ul li a');

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const navHeight = document.querySelector('header').clientHeight;
        const id = section.getAttribute('id');

        if (window.scrollY >= sectionTop - navHeight && window.scrollY < sectionTop + sectionHeight - navHeight) {
          navLinks.forEach(link => {
            link.classList.remove('active');
          });
          const targetLink = document.querySelector(`nav ul li a[href="#${id}"]`);
          if (targetLink) {
            targetLink.classList.add('active');
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    // Sticky Menu Show/Hide
    let timeout;
    const header = document.getElementById('header');
    const menu = document.getElementById('menu');

    function showMenu() {
      header.classList.remove('hidden');
      clearTimeout(timeout);
      header.classList.add('fadeIn');
      header.classList.remove('fadeOut');
    }

    function hideMenu() {
      header.classList.remove('hidden');
      timeout = setTimeout(() => {
        header.classList.remove('fadeIn');
        header.classList.add('fadeOut');
      }, 600);
    }

    function updateHeaderPosition() {
      showMenu();
      hideMenu();
    }

    menu.addEventListener('mouseover', showMenu);
    menu.addEventListener('mouseleave', hideMenu);
    window.addEventListener('scroll', updateHeaderPosition);

    return () => {
      anchors.forEach(anchor => {
        anchor.removeEventListener('click', handleNavigation);
      });
      window.removeEventListener('scroll', handleScroll);
      menu.removeEventListener('mouseover', showMenu);
      menu.removeEventListener('mouseleave', hideMenu);
      window.removeEventListener('scroll', updateHeaderPosition);
    };
  }, [navigate]);

  return (
    <header id="header" className="fixed-header">
      <img src={logoimg} className="sticky-logo" alt="Our Wedding Logo" />
      <nav id="menu" className="sticky-menu">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#rsvp">RSVP</a></li>
          <li><a href="#big-day">The Big Day</a></li>
          <li><a href="#travel">Travel</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li><a href="https://www.zola.com/registry/sharonandbrandon2025">Registry</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
