import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <div className="footer-logo">CEDUP Guaramirim</div>
              <p>Centro de Educação Profissional Perfeito Manoel de Aguiar</p>
            </div>
            
            <div className="footer-links">
              <h3>Contato</h3>
              <ul>
                <li>Telefone: (47) 3276-9270 | (47) 3276-9271</li>
                <li>E-mail: cedupguaramirim@sed.sc.gov.br</li>
              </ul>
            </div>
            
            <div className="footer-links">
              <h3>Endereço</h3>
              <ul>
                <li>BR 280, Km 53, n° 10161</li>
                <li>Avaí, Guaramirim/SC</li>
                <li>CEP: 89.270-000</li>
              </ul>
            </div>
            
            <div className="footer-links">
              <h3>Siga-nos</h3>
              <div className="social-links">
                <a href="https://www.facebook.com/cedup.guaramirim" target="_blank" rel="noopener noreferrer">
                  <span className="material-symbols-outlined">facebook</span>
                </a>
                <a href="https://www.instagram.com/cedupguaramirim/" target="_blank" rel="noopener noreferrer">
                  <span className="material-symbols-outlined">instagram</span>
                </a>
                <a href="https://www.linkedin.com/company/cedup-perfeito-manoel-de-aguiar/" target="_blank" rel="noopener noreferrer">
                  <span className="material-symbols-outlined">linkedin</span>
                </a>
              </div>
            </div>
          </div>
          
          <div className="copyright">
            <p>© {new Date().getFullYear()} CEDUP Guaramirim. Todos os direitos reservados.</p>
            <p>Desenvolvido por José Vitor Mader da turma de Desenvolvimento de Sistemas 2025/01</p>
          </div>
        </div>
      </footer>
  );
};

export default Footer;