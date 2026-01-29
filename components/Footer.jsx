'use client'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer style={{
      background: '#000000',
      borderTop: '1px solid rgba(0, 255, 255, 0.2)',
      padding: '60px 40px 30px',
      position: 'relative'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        {/* Main Footer Content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '50px',
          marginBottom: '50px'
        }}>
          {/* Brand Column */}
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '20px'
            }}>
              <div style={{
                width: '40px',
                height: '40px',
                background: 'linear-gradient(135deg, #00ffff, #ff00ff)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1rem',
                color: '#000',
                fontWeight: 'bold'
              }}>
                ▶
              </div>
              <span style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                fontFamily: 'Orbitron, sans-serif'
              }}>
                Conect<span className="gradient-text">Play</span>
              </span>
            </div>
            <p style={{
              fontSize: '0.95rem',
              color: 'rgba(255, 255, 255, 0.6)',
              lineHeight: '1.6',
              marginBottom: '20px'
            }}>
              Seu Mundo, Sem Limites.<br/>
              Entretenimento de qualidade para toda família.
            </p>
            {/* Social Icons (placeholder) */}
            <div style={{
              display: 'flex',
              gap: '15px'
            }}>
              {['📱', '📧', '💬'].map((icon, index) => (
                <div
                  key={index}
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.2rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#00ffff'
                    e.currentTarget.style.background = 'rgba(0, 255, 255, 0.1)'
                    e.currentTarget.style.transform = 'translateY(-3px)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}>
                  {icon}
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{
              fontSize: '1.1rem',
              fontWeight: '700',
              marginBottom: '20px',
              color: '#ffffff'
            }}>
              Links Rápidos
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}>
              {[
                { text: 'Lançamentos', id: 'lancamentos' },
                { text: 'Conteúdos', id: 'conteudos' },
                { text: 'Planos', id: 'planos' },
                { text: 'FAQ', id: 'faq' }
              ].map((link, index) => (
                <li key={index}>
                  <a
                    onClick={() => {
                      const element = document.getElementById(link.id)
                      if (element) element.scrollIntoView({ behavior: 'smooth' })
                    }}
                    style={{
                      color: 'rgba(255, 255, 255, 0.6)',
                      textDecoration: 'none',
                      fontSize: '0.95rem',
                      cursor: 'pointer',
                      transition: 'color 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.target.style.color = '#00ffff'}
                    onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.6)'}>
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 style={{
              fontSize: '1.1rem',
              fontWeight: '700',
              marginBottom: '20px',
              color: '#ffffff'
            }}>
              Suporte
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}>
              <li style={{
                color: 'rgba(255, 255, 255, 0.6)',
                fontSize: '0.95rem'
              }}>
                📞 WhatsApp 24/7
              </li>
              <li style={{
                color: 'rgba(255, 255, 255, 0.6)',
                fontSize: '0.95rem'
              }}>
                ⚡ Ativação Imediata
              </li>
              <li style={{
                color: 'rgba(255, 255, 255, 0.6)',
                fontSize: '0.95rem'
              }}>
                🔒 Pagamento Seguro
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{
              fontSize: '1.1rem',
              fontWeight: '700',
              marginBottom: '20px',
              color: '#ffffff'
            }}>
              Entre em Contato
            </h4>
            <button
              onClick={() => {
                window.open('https://wa.me/5524999984401?text=Olá! Quero saber mais sobre o ConectPlay', '_blank')
              }}
              style={{
                width: '100%',
                background: 'linear-gradient(135deg, #00ffff, #ff00ff)',
                border: 'none',
                padding: '15px 25px',
                borderRadius: '50px',
                color: '#000',
                fontSize: '0.95rem',
                fontWeight: '700',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                marginBottom: '15px'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.05)'
                e.target.style.boxShadow = '0 10px 30px rgba(0, 255, 255, 0.4)'
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)'
                e.target.style.boxShadow = 'none'
              }}>
              <span style={{fontSize: '1.2rem'}}>💬</span>
              Fale Conosco
            </button>
            <p style={{
              fontSize: '0.85rem',
              color: 'rgba(255, 255, 255, 0.5)',
              textAlign: 'center'
            }}>
              Atendimento 24 horas por dia
            </p>
          </div>
        </div>

        {/* Divider */}
        <div style={{
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(0, 255, 255, 0.3), transparent)',
          marginBottom: '30px'
        }} />

        {/* Bottom Footer */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px',
          fontSize: '0.9rem',
          color: 'rgba(255, 255, 255, 0.5)'
        }}>
          <p style={{margin: 0}}>
            © {currentYear} ConectPlay. Todos os direitos reservados.
          </p>
          <div style={{
            display: 'flex',
            gap: '25px',
            flexWrap: 'wrap'
          }}>
            <a href="#" style={{
              color: 'rgba(255, 255, 255, 0.5)',
              textDecoration: 'none',
              transition: 'color 0.3s ease'
            }}
            onMouseEnter={(e) => e.target.style.color = '#00ffff'}
            onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.5)'}>
              Termos de Uso
            </a>
            <a href="#" style={{
              color: 'rgba(255, 255, 255, 0.5)',
              textDecoration: 'none',
              transition: 'color 0.3s ease'
            }}
            onMouseEnter={(e) => e.target.style.color = '#00ffff'}
            onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.5)'}>
              Política de Privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
