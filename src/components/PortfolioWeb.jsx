// src/components/PortfolioWeb.jsx
import React, { useState, useEffect } from "react";
import {
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaBars,
  FaTimes,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import "../styles/PortfolioWeb.css";
import ParticlesBackground from "./ParticlesBackground";

const PortfolioWeb = () => {
  const [theme, setTheme] = useState("dark");
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleTheme = () => {
    document.body.classList.toggle("light-mode");
    setTheme(theme === "light" ? "dark" : "light");
  };

  // Bloquear scroll cuando el menú está abierto
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [menuOpen]);

  return (
    <div className="portfolio-container">
      <ParticlesBackground />

      <header className="header">
        <h1 className="logo">Immanol Alvarado</h1>

        {/* Botón hamburguesa */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* 🔹 Menú hamburguesa fullscreen negro */}
        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            Sobre mí
          </a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>
            Documentos
          </a>
          <a href="#gallery" onClick={() => setMenuOpen(false)}>
            Galería
          </a>
          <a href="#my-projects" onClick={() => setMenuOpen(false)}>
            Proyectos
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contacto
          </a>

          {/* Botón cambio tema */}
          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === "light" ? <FaMoon /> : <FaSun />}
          </button>
        </nav>
      </header>

      {/* Hero */}
      <section className="hero">
        <h2>Hola, soy Immanol</h2>
        <p>Estudiante y Futuro Desarrollador Web Frontend</p>
        <a href="#my-projects" className="btn">
          Ver Proyectos
        </a>
      </section>

      {/* Sobre mí */}
      <section id="about" className="about">
        <h3>Sobre mí</h3>
        <p>
          Soy un estudiante en proceso de formación académica, comprometido con
          mi desarrollo profesional y con un fuerte interés en adquirir
          experiencia práctica en el campo. Me caracterizo por mi
          responsabilidad, disposición para aprender y capacidad de adaptación a
          nuevos entornos. Actualmente busco oportunidades que me permitan
          aplicar mis conocimientos, fortalecer mis habilidades y contribuir
          activamente en proyectos reales, mientras continúo mi crecimiento como
          futuro profesional.
        </p>
      </section>

      {/* Galería */}
      <section className="gallery" id="gallery">
        <h3>Galería</h3>
        <div className="gallery-grid">
          <div className="gallery-item">
            <img src="images/p1.png" alt="Proyecto 1" />
          </div>
          <div className="gallery-item">
            <img src="/files/lfxj.jpg" alt="Proyecto 2" />
          </div>
          <div className="gallery-item">
            <img src="images/p3.jpg" alt="Proyecto 3" />
          </div>
        </div>
      </section>

      {/* Proyectos en Vercel */}
      <section id="my-projects" className="my-projects">
        <h3>Mis Proyectos</h3>
        <div className="projects-grid">
          <div className="project-card">
            <img
              src="/files/lfxj.jpg"
              alt="Vista previa Proyecto 1"
              className="project-preview"
            />
            <div className="project-overlay">
              <h3>Proyecto 1</h3>
              <a
                href="https://luisfabioxammarjurado.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                Ver Proyecto
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Documentos */}
      <section id="projects" className="projects">
        <h3>Mis Documentos</h3>

        <div className="project-card">
          <div
            className="project-image"
            style={{
              backgroundImage: `url('${import.meta.env.BASE_URL}files/vista-previa-proyecto1.jpg')`,
            }}
          ></div>
          <div className="project-content">
            <h4>Certificado de Ingles</h4>
            <p>British House International 2021-2022.</p>
            <a
              href={`${import.meta.env.BASE_URL}files/ingles.pdf`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver
            </a>
          </div>
        </div>

        <div className="project-card">
          <div
            className="project-image"
            style={{
              backgroundImage: `url('${import.meta.env.BASE_URL}files/vista-previa-proyecto2.jpg')`,
            }}
          ></div>
          <div className="project-content">
            <h4>Certificado IoT</h4>
            <p>Cisco Networking Academy® Introduction to IoT.</p>
            <a
              href={`${import.meta.env.BASE_URL}files/iot.pdf`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver
            </a>
          </div>
        </div>

        <div className="project-card">
          <div
            className="project-image"
            style={{
              backgroundImage: `url('${import.meta.env.BASE_URL}files/vista-previa-proyecto3.jpg')`,
            }}
          ></div>
          <div className="project-content">
            <h4>Curriculum Vitae</h4>
            <p>Sobre mi.</p>
            <a
              href={`${import.meta.env.BASE_URL}files/CV.pdf`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver
            </a>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contact" className="contact">
        <h3>Contacto</h3>
        <p>¿Quieres trabajar conmigo? ¡Hablemos!</p>
        <div className="social-icons">
          <a
            href="https://github.com/ImmAle"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/immanol-alvarado-grados-6a399534b/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:immanolalvarado22@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://instagram.com/rijii22"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>
      </section>

      <footer className="footer">
        © {new Date().getFullYear()} Immanol Alvarado. Todos los derechos
        reservados.
      </footer>
    </div>
  );
};

export default PortfolioWeb;
