'use client'
import { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMenuOpen(false)
    }
  }

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      background: 'rgba(10, 14, 39, 0.95)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(0, 217, 255, 0.2)',
      padding: '15px 40px',
      boxShadow: '0 5px 30px rgba(0, 0, 0, 0.5)'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        {/* Logo */}
        <div 
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '15px',
            cursor: 'pointer'
          }}
          onClick={() => scrollToSection('hero')}>
          
          {/* Logo Image */}
          <img 
            src="/logo.png" 
            alt="ConectPlay Logo" 
            style={{
              width: '50px',
              height: '50px',
              objectFit: 'contain',
              filter: 'drop-shadow(0 0 10px rgba(0, 217, 255, 0.5))'
            }}
          />

          <span style={{
            fontSize: '1.6rem',
            fontWeight: '700',
            fontFamily: 'Orbitron, sans-serif',
            color: '#ffffff'
          }}>
            Conect<span style={{
              background: 'linear-gradient(135deg, #00d9ff 0%, #ff006e 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>Play</span>
          </span>
        </div>

        {/* Menu Desktop */}
        <nav style={{
          display: 'flex',
          gap: '35px',
          alignItems: 'center'
        }}
        className="desktop-menu">
          {[
            { label: 'Lançamentos', id: 'lancamentos' },
            { label: 'Conteúdos', id: 'conteudos' },
            { label: 'Planos', id: 'planos' },
            { label: 'FAQ', id: 'faq' }
          ].map((item, index) => (
            <a 
              key={index}
              onClick={() => scrollToSection(item.id)} 
              style={{
                color: 'rgba(255, 255, 255, 0.8)',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '0.95rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                position: 'relative',
                padding: '5px 0'
              }}
              onMouseEnter={(e) => {
                e.target.style.color = '#00d9ff'
                e.target.style.textShadow = '0 0 10px rgba(0, 217, 255, 0.5)'
              }}
              onMouseLeave={(e) => {
                e.target.style.color = 'rgba(255, 255, 255, 0.8)'
                e.target.style.textShadow = 'none'
              }}>
              {item.label}
            </a>
          ))}

          {/* Botão CTA */}
          <button style={{
            background: 'linear-gradient(135deg, #00d9ff, #ff006e)',
            border: 'none',
            padding: '12px 30px',
            borderRadius: '25px',
            color: '#000',
            fontWeight: '700',
            fontSize: '0.9rem',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            boxShadow: '0 5px 15px rgba(0, 217, 255, 0.3)'
          }}
          onClick={() => scrollToSection('planos')}
          onMouseEnter={(e) => {
            e.target.style.transform = 'scale(1.05) translateY(-2px)'
            e.target.style.boxShadow = '0 8px 25px rgba(0, 217, 255, 0.5)'
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'scale(1) translateY(0)'
            e.target.style.boxShadow = '0 5px 15px rgba(0, 217, 255, 0.3)'
          }}>
            Assinar Agora
          </button>
        </nav>

        {/* Menu Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: 'none',
            background: 'transparent',
            border: '2px solid rgba(0, 217, 255, 0.5)',
            color: '#00d9ff',
            fontSize: '1.5rem',
            cursor: 'pointer',
            padding: '8px 12px',
            borderRadius: '8px',
            transition: 'all 0.3s ease'
          }}
          className="mobile-menu-toggle"
          onMouseEnter={(e) => {
            e.target.style.background = 'rgba(0, 217, 255, 0.1)'
            e.target.style.borderColor = '#00d9ff'
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'transparent'
            e.target.style.borderColor = 'rgba(0, 217, 255, 0.5)'
          }}>
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Menu Mobile */}
      {menuOpen && (
        <nav style={{
          display: 'none',
          flexDirection: 'column',
          gap: '20px',
          padding: '25px',
          marginTop: '20px',
          background: 'rgba(26, 31, 58, 0.95)',
          backdropFilter: 'blur(20px)',
          borderRadius: '15px',
          border: '1px solid rgba(0, 217, 255, 0.3)',
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.5)',
          animation: 'fadeIn 0.3s ease-out'
        }}
        className="mobile-menu">
          {[
            { label: 'Lançamentos', id: 'lancamentos' },
            { label: 'Conteúdos', id: 'conteudos' },
            { label: 'Planos', id: 'planos' },
            { label: 'FAQ', id: 'faq' }
          ].map((item, index) => (
            <a 
              key={index}
              onClick={() => scrollToSection(item.id)} 
              style={{
                color: '#fff',
                textDecoration: 'none',
                fontWeight: '600',
                cursor: 'pointer',
                padding: '10px',
                borderRadius: '8px',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(0, 217, 255, 0.1)'
                e.target.style.color = '#00d9ff'
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'transparent'
                e.target.style.color = '#fff'
              }}>
              {item.label}
            </a>
          ))}
        </nav>
      )}

      <style jsx>{`
        @media (max-width: 768px) {
          .desktop-menu {
            display: none !important;
          }
          .mobile-menu-toggle {
            display: block !important;
          }
          .mobile-menu {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  )
}
