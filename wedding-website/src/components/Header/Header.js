// src/components/Header.js
import React, {useEffect} from 'react';

import '../../App.css'; // If you have specific styles
import './Header.css'; // If you have specific styles

import logoimg from '../../assets/sticky-logo2.avif'
function Header() {

  useEffect(() => {
    // Smooth Scroll for Navigation
    document.querySelectorAll('nav a').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          const targetId = this.getAttribute('href').substring(1);
          const targetSection = document.getElementById(targetId);
          let offsetTop = targetId === "faq" ? targetSection.offsetTop - targetSection.offsetHeight : targetSection.offsetTop;

          window.scrollTo({
              top: offsetTop,
              behavior: 'smooth'
          });
      });
    });
    // STICKY MENU
    window.addEventListener('scroll', function() {
      const sections = document.querySelectorAll('section');
      const navLinks = document.querySelectorAll('nav ul li a');

      sections.forEach(function(section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          const navHeight = document.querySelector('header').clientHeight;
          const id = section.getAttribute('id');

          if (window.scrollY >= sectionTop - navHeight && window.scrollY < sectionTop + sectionHeight - navHeight) {
              navLinks.forEach(function(link) {
                  link.classList.remove('active');
              });
              const targetLink = document.querySelector(`nav ul li a[href="#${id}"]`);
              if (targetLink) {
                  targetLink.classList.add('active');
              }
          }
      });
  });

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


}, []);

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
        </ul>
      </nav>
    </header>
    
  );
}

export default Header;