
"use client";

import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ChevronDown,
  Menu,
  Sparkles,
  Waves,
  X
} from "lucide-react";

const apartments = [
  {
    name: "Apartamentos Bellamar",
    type: "DESCANSO MEDITERRÁNEO",
    description:
      "Espacios luminosos para disfrutar de la costa a tu ritmo.",
    image:
      "https://aquaapartments.group/site/wp-content/uploads/2022/04/SON04479.jpg"
  },
  {
    name: "Escapadas junto al mar",
    type: "TIEMPO PARA TI",
    description:
      "Desconecta de la rutina y deja que el Mediterráneo marque el ritmo.",
    image:
      "https://aquaapartments.group/site/wp-content/uploads/2022/03/HotelSanCristobal-8361-scaled.jpg"
  },
  {
    name: "Experiencias locales",
    type: "DESCUBRE EL ENTORNO",
    description:
      "Saborea el destino, explora sus rincones y vive cada momento.",
    image:
      "https://aquaapartments.group/site/wp-content/uploads/2022/03/la-canada.jpg"
  }
];

const faqs = [
  {
    question: "¿Cómo puedo consultar la disponibilidad?",
    answer:
      "Puedes contactar directamente con el equipo de AQUA Apartments Bellamar para consultar las fechas disponibles y las condiciones de tu estancia."
  },
  {
    question: "¿Cómo puedo realizar una reserva?",
    answer:
      "El equipo de AQUA podrá indicarte el procedimiento de reserva y ayudarte con los siguientes pasos."
  },
  {
    question: "¿Puedo resolver mis dudas antes de viajar?",
    answer:
      "Sí. Puedes contactar con el equipo de AQUA Apartments Bellamar para resolver tus dudas antes de viajar."
  }
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <main>
      <div className="announcement">
        <span className="announcement-dot" />
        UNA NUEVA FORMA DE VIVIR EL MEDITERRÁNEO
      </div>

      <header className="header">
        <a className="brand" href="#inicio" onClick={closeMenu}>
          <span className="brand-symbol">
            <Waves size={27} strokeWidth={1.4} />
          </span>
          <span className="brand-text">
            <strong>AQUA</strong>
            <small>APARTMENTS BELLAMAR</small>
          </span>
        </a>

        <button
          className="mobile-menu-button"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav className={menuOpen ? "nav nav-open" : "nav"}>
          <a href="#experiencia" onClick={closeMenu}>
            La experiencia
          </a>
          <a href="#apartamentos" onClick={closeMenu}>
            Apartamentos
          </a>
          <a href="#preguntas" onClick={closeMenu}>
            Preguntas frecuentes
          </a>
          <a
            className="nav-cta"
            href="#preguntas"
            onClick={closeMenu}
          >
            Más información <ArrowRight size={16} />
          </a>
        </nav>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-image" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="eyebrow hero-eyebrow">
            <span />
            TU REFUGIO MEDITERRÁNEO
          </div>

          <h1>
            Hay lugares
            <br />
            que te hacen
            <br />
            <em>desconectar.</em>
          </h1>

          <p className="hero-description">
            Respira. Baja el ritmo. Disfruta del Mediterráneo.
            Tu próxima escapada empieza aquí.
          </p>

          <div className="hero-actions">
            <a className="button-light" href="#apartamentos">
              Descubrir AQUA <ArrowRight size={17} />
            </a>
            <a className="button-outline" href="#preguntas">
              Resolver mis dudas <ArrowRight size={17} />
            </a>
          </div>

          <a className="scroll-indicator" href="#experiencia">
            <span>DESLIZA PARA DESCUBRIR</span>
            <ArrowDown size={15} />
          </a>
        </div>

        <div className="hero-side-label">
          MEDITERRANEAN LIVING · AQUA
        </div>
      </section>

      <section className="intro section-pad" id="experiencia">
        <div className="intro-topline">
          <span className="eyebrow">MÁS QUE UNA ESTANCIA</span>
          <span className="intro-number">01 / LA EXPERIENCIA</span>
        </div>

        <div className="intro-grid">
          <h2>
            Tu tiempo.
            <br />
            Tu espacio.
            <br />
            <em>Tu Mediterráneo.</em>
          </h2>

          <div className="intro-copy">
            <p>
              Hay viajes que sirven para descubrir lugares y otros que
              sirven para volver a encontrarte contigo mismo. AQUA nace
              para esos momentos en los que lo importante es disfrutar
              sin mirar el reloj.
            </p>
            <a href="#apartamentos" className="text-link">
              Descubre nuestros espacios <ArrowRight size={17} />
            </a>
          </div>
        </div>

        <div className="values-row">
          <div className="value">
            <span className="value-index">01</span>
            <div>
              <h3>Calma</h3>
              <p>Un respiro para salir de la rutina.</p>
            </div>
          </div>
          <div className="value">
            <span className="value-index">02</span>
            <div>
              <h3>Libertad</h3>
              <p>Tu estancia, a tu manera.</p>
            </div>
          </div>
          <div className="value">
            <span className="value-index">03</span>
            <div>
              <h3>Cercanía</h3>
              <p>Una atención pensada para ti.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="apartments section-pad" id="apartamentos">
        <div className="section-heading">
          <div>
            <span className="eyebrow">DESCUBRE AQUA</span>
            <h2>
              Tu próxima historia <em>empieza aquí.</em>
            </h2>
          </div>
          <p>
            Inspírate, descubre nuevas experiencias y empieza a imaginar
            tu próxima escapada.
          </p>
        </div>

        <div className="apartment-grid">
          {apartments.map((apartment, index) => (
            <article className="apartment-card" key={apartment.name}>
              <div className="apartment-image-wrap">
                <img
                  src={apartment.image}
                  alt={apartment.name}
                  className="apartment-image"
                  loading="lazy"
                />
                <span className="apartment-number">
                  0{index + 1}
                </span>
              </div>
              <div className="apartment-card-content">
                <span className="eyebrow">{apartment.type}</span>
                <h3>{apartment.name}</h3>
                <p>{apartment.description}</p>
                <a className="card-link" href="#preguntas">
                  Más información <ArrowRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>

        <p className="image-disclaimer">
          Imágenes ilustrativas. Consulta con AQUA los alojamientos,
          servicios y características disponibles.
        </p>
      </section>

      <section className="quote-section">
        <div className="quote-image" />
        <div className="quote-overlay" />
        <div className="quote-content">
          <span className="eyebrow">EL ARTE DE PARAR</span>
          <h2>
            A veces, el mejor plan
            <br />
            es <em>no tener prisa.</em>
          </h2>
          <p>Deja espacio para lo inesperado.</p>
          <a className="button-light" href="#apartamentos">
            Descubre AQUA <ArrowRight size={17} />
          </a>
        </div>
      </section>

      <section className="faq-section section-pad" id="preguntas">
        <div className="faq-intro">
          <span className="eyebrow">ESTAMOS AQUÍ PARA AYUDARTE</span>
          <h2>
            ¿Tienes alguna
            <br />
            <em>pregunta?</em>
          </h2>
          <p>
            Encuentra información sobre tu estancia y descubre cómo
            disfrutar de una experiencia más sencilla.
          </p>
          <a className="text-link" href="#apartamentos">
            Descubre nuestros espacios <ArrowRight size={17} />
          </a>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div className="faq-item" key={faq.question}>
              <button
                className="faq-question"
                aria-expanded={openFaq === index}
                onClick={() =>
                  setOpenFaq(openFaq === index ? null : index)
                }
              >
                <span>{faq.question}</span>
                <ChevronDown
                  size={19}
                  className={
                    openFaq === index
                      ? "faq-chevron rotated"
                      : "faq-chevron"
                  }
                />
              </button>
              {openFaq === index && (
                <p className="faq-answer">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="closing-section">
        <div className="closing-content">
          <Sparkles size={23} strokeWidth={1.4} />
          <span className="eyebrow">TU SIGUIENTE ESCAPADA</span>
          <h2>
            El Mediterráneo
            <br />
            <em>te está esperando.</em>
          </h2>
          <p>
            Descubre cómo una atención más cercana puede acompañarte
            desde la primera pregunta.
          </p>
          <a className="button-dark" href="#preguntas">
            Consultar información <ArrowRight size={17} />
          </a>
        </div>
      </section>

      <footer className="footer">
        <a className="brand footer-brand" href="#inicio">
          <span className="brand-symbol">
            <Waves size={25} strokeWidth={1.4} />
          </span>
          <span className="brand-text">
            <strong>AQUA</strong>
            <small>APARTMENTS BELLAMAR</small>
          </span>
        </a>
        <p>Una demo conceptual de experiencia digital.</p>
        <a href="#inicio" className="footer-top">
          VOLVER ARRIBA ↑
        </a>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} AQUA · DEMOSTRACIÓN
          </span>
          <span>DISEÑADO PARA DISFRUTAR SIN PRISA</span>
        </div>
      </footer>
    </main>
  );
}
