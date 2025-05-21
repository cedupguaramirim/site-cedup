import React from 'react';
import { Link } from 'react-router-dom';

import '../../App.css';

const Home = () => {
  return (
    <>
      
      {/* Main Content */}
      <main>
        {/* Hero Slider */}
        <section className="slider">
          <div className="slides">
            <div className="slide">
              <Link to="/novos-cursos">
                <img src="/imagens/slider/10.png" alt="Novos Cursos" />
              </Link>
            </div>
            {/* Add other slides here */}
          </div>
          
          <div className="slide-controls">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className={`slide-btn ${i === 1 ? 'active' : ''}`}></div>
            ))}
          </div>
        </section>

        {/* Highlights Section */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">Destaques</h2>
            <div className="grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem'}}>
              <div className="card">
                <div className="card-body">
                  <Link to="/novos-cursos" className="clicavel-destaque">
                    <h4>Intenção de matrícula cursos 2025/02</h4>
                  </Link>
                </div>
              </div>
              
              <div className="card">
                <div className="card-body">
                  <Link to="/pronatec" className="clicavel-destaque">
                    <h4>Eleições Grêmio Estudantil 2025</h4>
                  </Link>
                </div>
              </div>
              
              <div className="card">
                <div className="card-body">
                  <Link to="/feira-ciencias" className="clicavel-destaque">
                    <h4>IV Feira de Ciência e Tecnologia e Mostra de Trabalhos</h4>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Agenda Section */}
        <section className="section" style={{backgroundColor: '#f5f7fa'}}>
          <div className="container">
            <h2 className="section-title">Agenda</h2>
            <div className="agenda">
              <ul>
                {[
                  { date: '28 JUN', title: 'Sabado Letivo' },
                  { date: '30 JUN', title: 'IV Feira de Ciência e Tecnologia', link: '/feira-ciencias' },
                  { date: '11 JUL', title: 'Festa Junina' },
                  { date: '21 JUL', title: 'Inicio do Recesso dos Alunos' },
                  { date: '04 AGO', title: 'Inicio do Segundo Semestre' },
                  { date: '08 AGO', title: 'Formatura Técnica Subsequente' },
                  { date: '20 AGO', title: 'XVI FECITEC Regional' },
                  { date: '28 AGO', title: 'Desfile Aniversário de Guaramirim' },
                  { date: '22-26 SET', title: 'Semana de Ética e Cidadania' },
                  { date: '20 DEZ', title: 'Formatura Cursos Técnicos' }
                ].map((item, index) => (
                  <li key={index} className="agenda-item">
                    <div className="agenda-date">{item.date}</div>
                    {item.link ? (
                      <Link to={item.link}>{item.title}</Link>
                    ) : (
                      <span>{item.title}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">Localização</h2>
            <div style={{textAlign: 'center', marginBottom: '2rem'}}>
            </div>
            <div className="map-container">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.4584596838235!2d-48.976726724584665!3d-26.473179674982624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94debf3702d65c51%3A0x71e9a78dd2546030!2sCedup%20Guaramirim!5e0!3m2!1spt-BR!2sbr!4v1701125408041!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen 
                loading="lazy" 
                title="Localização CEDUP Guaramirim"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;