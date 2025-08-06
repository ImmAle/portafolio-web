// src/components/PortfolioWeb.jsx
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FaMoon, FaSun } from "react-icons/fa";
import "../styles/PortfolioWeb.css";

const PortfolioWeb = () => {
  return (
    <div className="portfolio-container">
      <header className="header">
        <h1 className="logo">Immanol Alvarado</h1>
        <nav className="nav">
          <a href="#about">Sobre mí</a>
          <a href="#projects">Documentos</a>
          <a href="#contact">Contacto</a>
          <button className="theme-toggle" onClick={() => document.body.classList.toggle('light-mode')}>
            Cambiar tema
            </button>
        </nav>
      </header>

      

  
      <section className="hero">
        <h2>Hola, soy Immanol</h2>
        <p>Estudiante y Futuro Desarrollador Web Frontend</p>
        <a href="#projects" className="btn">Ver Documentos</a>
      </section>

      <section id="about" className="about">
        <h3>Sobre mí</h3>
        <p>
            Soy un estudiante en proceso de formación académica, comprometido con mi desarrollo profesional y con un fuerte interés en adquirir experiencia práctica en el campo. Me caracterizo por mi responsabilidad, disposición para aprender y capacidad de adaptación a nuevos entornos. Actualmente busco oportunidades que me permitan aplicar mis conocimientos, fortalecer mis habilidades y contribuir activamente en proyectos reales, mientras continúo mi crecimiento como futuro profesional.
        </p>
      </section>

  <section className="gallery" id="gallery">      
      <h3>Galería</h3>
      <div className="gallery-grid">
        <div className="gallery-item">
          <img src="/portafolio-web//images/p1.png" alt="Proyecto 1" />
        </div>
        <div className="gallery-item">
          <img src="/portafolio-web//images/p2.jpg" alt="Proyecto 2" />
        </div>
        <div className="gallery-item">
          <img src="/portafolio-web//images/p3.jpg" alt="Proyecto 3" />
        </div>
      </div>
  </section>


<section id="projects" className="projects">
<div className="project-card">
  <div
    className="project-image"
    style={{ backgroundImage: `url('${import.meta.env.BASE_URL}files/vista-previa-proyecto1.jpg')`}}
  ></div>
  <div className="project-content">
    <h4>Certificado de Ingles</h4>
    <p>British House International 2021-2022.</p>
    <a href="/portafolio-web/files/ingles.pdf" target="_blank" rel="noopener noreferrer">Ver</a>


  </div>
</div>


<div className="project-card">
  <div
    className="project-image"
    style={{ backgroundImage: `url('${import.meta.env.BASE_URL}files/vista-previa-proyecto2.jpg')` }}
  ></div>
  <div className="project-content">
    <h4>Certificado IoT</h4>
    <p>Cisco Networking Academy® Introduction to IoT.</p>
    <a href="/portafolio-web/files/iot.pdf" target="_blank" rel="noopener noreferrer">Ver</a>


  </div>
</div>


<div className="project-card">
  <div
    className="project-image"
    style={{ backgroundImage: `url('${import.meta.env.BASE_URL}files/vista-previa-proyecto3.jpg')` }}
  ></div>
  <div className="project-content">
    <h4>Curriculum Vitae</h4>
    <p>Sobre mi.</p>
    <a href="/portafolio-web/files/CV.pdf" target="_blank" rel="noopener noreferrer">Ver</a>


  </div>
</div>
</section>

      

      <section id="contact" className="contact">
        <h3>Contacto</h3>
        <p>¿Quieres trabajar conmigo? ¡Hablemos!</p>
        <div className="social-icons">
          <a href="https://github.com" aria-label="GitHub"><FaGithub /></a>
          <a href="https://linkedin.com" aria-label="LinkedIn"><FaLinkedin /></a>
          <a href="mailto:correo@ejemplo.com" aria-label="Email"><FaEnvelope /></a>
        </div>
      </section>

      <footer className="footer">
        © {new Date().getFullYear()} Immanol Alvarado. Todos los derechos reservados.
      </footer>
    </div>
    
  );
};


export default PortfolioWeb;

