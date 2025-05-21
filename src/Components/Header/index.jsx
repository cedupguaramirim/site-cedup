import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

const Header = () => {
  // Mobile menu toggle functionality
  const toggleMenu = () => {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
  };

  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <Link to="/" className="logo"></Link>
          
          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={toggleMenu}>
                <span className="material-symbols-outlined"></span>
                <span>Início</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/sobre" className="nav-link" onClick={toggleMenu}>
                <span className="material-symbols-outlined"></span>
                <span>Sobre</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/cursos" className="nav-link" onClick={toggleMenu}>
                <span className="material-symbols-outlined"></span>
                <span>Cursos</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/aluno" className="nav-link" onClick={toggleMenu}>
                <span className="material-symbols-outlined"></span>
                <span>Área do Aluno</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contato" className="nav-link" onClick={toggleMenu}>
                <span className="material-symbols-outlined"></span>
                <span>Contato</span>
              </Link>
            </li>
          </ul>
          
          <div className="menu-toggle" onClick={toggleMenu}>
            <span className="material-symbols-outlined"></span>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;