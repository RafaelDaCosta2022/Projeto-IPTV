'use client'

export default function Devices() {
  const devices = [
    { 
      name: 'Smartphone', 
      description: 'Android & iOS',
      svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 18H7V5h10v14z"/></svg>`
    },
    { 
      name: 'Smart TV', 
      description: 'Todas as marcas',
      svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z"/></svg>`
    },
    { 
      name: 'Notebook', 
      description: 'Windows & Mac',
      svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"/></svg>`
    },
    { 
      name: 'Tablet', 
      description: 'iPad & Android',
      svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 0H6C4.34 0 3 1.34 3 3v18c0 1.66 1.34 3 3 3h12c1.66 0 3-1.34 3-3V3c0-1.66-1.34-3-3-3zm-4 22h-4v-1h4v1zm5.25-3H4.75V3h14.5v16z"/></svg>`
    },
    { 
      name: 'TV Box', 
      description: 'Qualquer modelo',
      svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4V6zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7z"/></svg>`
    },
    { 
      name: 'Console', 
      description: 'Xbox & PlayStation',
      svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M21.58 16.09l-1.09-7.66C20.21 6.46 18.52 5 16.53 5H7.47C5.48 5 3.79 6.46 3.51 8.43l-1.09 7.66C2.2 17.63 3.39 19 4.94 19c.68 0 1.32-.27 1.8-.75L9 16h6l2.25 2.25c.48.48 1.13.75 1.8.75 1.56 0 2.75-1.37 2.53-2.91zM11 11H9v2H8v-2H6v-1h2V8h1v2h2v1zm4-1c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm2 3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/></svg>`
    }
  ]

  return (
    <section style={{
      padding: '100px 40px',
      background: 'linear-gradient(180deg, rgba(10, 14, 39, 0.8) 0%, rgba(26, 31, 58, 0.5) 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Efeitos de fundo */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '-10%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(0, 217, 255, 0.1) 0%, transparent 70%)',
        filter: 'blur(60px)',
        animation: 'float 8s ease-in-out infinite'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '10%',
        right: '-10%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(255, 0, 110, 0.1) 0%, transparent 70%)',
        filter: 'blur(80px)',
        animation: 'float 10s ease-in-out infinite reverse'
      }} />

      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        textAlign: 'center',
        position: 'relative',
        zIndex: 1
      }}>
        {/* Header */}
        <div style={{
          marginBottom: '70px'
        }}>
          <div style={{
            display: 'inline-block',
            padding: '8px 20px',
            background: 'rgba(0, 217, 255, 0.1)',
            border: '1px solid rgba(0, 217, 255, 0.3)',
            borderRadius: '20px',
            marginBottom: '20px',
            fontSize: '0.85rem',
            color: '#00d9ff',
            fontWeight: '600',
            textTransform: 'uppercase',
            letterSpacing: '2px'
          }}>
            Compatibilidade Total
          </div>
          <h2 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: '700',
            marginBottom: '20px',
            letterSpacing: '-1px',
            color: '#ffffff'
          }}>
            Assista em <span style={{
              background: 'linear-gradient(135deg, #00d9ff 0%, #ff006e 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>Qualquer Dispositivo</span>
          </h2>
          <p style={{
            fontSize: '1.2rem',
            color: 'rgba(255, 255, 255, 0.7)',
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            Compatível com todos os seus aparelhos. Uma conta, múltiplas telas.
          </p>
        </div>

        {/* Devices Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '30px',
          marginBottom: '60px'
        }}>
          {devices.map((device, index) => (
            <div
              key={index}
              style={{
                background: 'rgba(26, 31, 58, 0.3)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '20px',
                padding: '40px 20px',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'pointer',
                animation: `fadeIn 0.8s ease-out ${index * 0.1}s both`,
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)'
                e.currentTarget.style.background = 'rgba(0, 217, 255, 0.05)'
                e.currentTarget.style.borderColor = 'rgba(0, 217, 255, 0.5)'
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 217, 255, 0.2)'
                e.currentTarget.querySelector('.device-icon').style.color = '#00d9ff'
                e.currentTarget.querySelector('.device-icon').style.filter = 'drop-shadow(0 0 10px rgba(0, 217, 255, 0.5))'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.background = 'rgba(26, 31, 58, 0.3)'
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'
                e.currentTarget.style.boxShadow = 'none'
                e.currentTarget.querySelector('.device-icon').style.color = 'rgba(255, 255, 255, 0.6)'
                e.currentTarget.querySelector('.device-icon').style.filter = 'none'
              }}>
              
              {/* Corner accent */}
              <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '60px',
                height: '60px',
                background: 'radial-gradient(circle at top right, rgba(0, 217, 255, 0.1), transparent)',
                borderRadius: '0 20px 0 100%'
              }} />

              {/* SVG Icon */}
              <div 
                className="device-icon"
                style={{
                  width: '70px',
                  height: '70px',
                  margin: '0 auto 25px',
                  color: 'rgba(255, 255, 255, 0.6)',
                  transition: 'all 0.3s ease'
                }}
                dangerouslySetInnerHTML={{ __html: device.svg }}
              />

              <h3 style={{
                fontSize: '1.3rem',
                fontWeight: '700',
                marginBottom: '10px',
                color: '#ffffff'
              }}>
                {device.name}
              </h3>
              <p style={{
                fontSize: '0.9rem',
                color: 'rgba(255, 255, 255, 0.6)'
              }}>
                {device.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <div style={{
          padding: '40px',
          background: 'linear-gradient(135deg, rgba(0, 217, 255, 0.05), rgba(255, 0, 110, 0.05))',
          border: '1px solid rgba(0, 217, 255, 0.2)',
          borderRadius: '20px',
          maxWidth: '800px',
          margin: '0 auto',
          backdropFilter: 'blur(10px)'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '15px',
            marginBottom: '10px'
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #00d9ff, #ff006e)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.2rem'
            }}>✓</div>
            <p style={{
              fontSize: '1.1rem',
              color: 'rgba(255, 255, 255, 0.9)',
              fontWeight: '600'
            }}>
              Sem instalação complicada
            </p>
          </div>
          <p style={{
            fontSize: '0.95rem',
            color: 'rgba(255, 255, 255, 0.7)'
          }}>
            Basta fazer login e começar a assistir. Simples assim!
          </p>
        </div>
      </div>
    </section>
  )
}
