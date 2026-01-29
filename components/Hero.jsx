'use client'

export default function Hero() {
  const scrollToPlanos = () => {
    const element = document.getElementById('planos')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: '80px',
      padding: '120px 40px 80px'
    }}>
      {/* Background Effects */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(circle at 30% 50%, rgba(0, 217, 255, 0.15) 0%, transparent 50%), radial-gradient(circle at 70% 50%, rgba(255, 0, 110, 0.15) 0%, transparent 50%)',
        zIndex: 0
      }} />

      {/* Animated Grid */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `
          linear-gradient(rgba(0, 217, 255, 0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 217, 255, 0.05) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
        animation: 'grid-move 20s linear infinite',
        zIndex: 0
      }} />

      {/* Floating Elements */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '10%',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(0, 217, 255, 0.2), transparent)',
        borderRadius: '50%',
        filter: 'blur(60px)',
        animation: 'float 6s ease-in-out infinite',
        zIndex: 0
      }} />

      <div style={{
        position: 'absolute',
        bottom: '20%',
        right: '10%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(255, 0, 110, 0.2), transparent)',
        borderRadius: '50%',
        filter: 'blur(80px)',
        animation: 'float 8s ease-in-out infinite reverse',
        zIndex: 0
      }} />

      {/* Content Container */}
      <div style={{
        position: 'relative',
        zIndex: 1,
        maxWidth: '1400px',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '80px',
        alignItems: 'center',
        animation: 'fadeIn 1s ease-out'
      }}
      className="hero-container">
        
        {/* LADO ESQUERDO - Texto */}
        <div style={{
          textAlign: 'left'
        }}>
          {/* Title */}
          <h1 style={{
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            fontWeight: '900',
            marginBottom: '25px',
            lineHeight: '1.1',
            fontFamily: 'Orbitron, sans-serif',
            letterSpacing: '-2px'
          }}>
            Conect<span style={{
              background: 'linear-gradient(135deg, #00d9ff 0%, #0099ff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>Play</span>
          </h1>

          {/* Slogan */}
          <p style={{
            fontSize: 'clamp(1.3rem, 2.5vw, 2rem)',
            fontWeight: '300',
            marginBottom: '25px',
            color: 'rgba(255, 255, 255, 0.9)',
            letterSpacing: '1px'
          }}>
            Seu Mundo, Sem Limites.
          </p>

          {/* Description */}
          <p style={{
            fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
            color: 'rgba(255, 255, 255, 0.7)',
            marginBottom: '40px',
            lineHeight: '1.8',
            maxWidth: '550px'
          }}>
            Assista IPTV em <span style={{color: '#00d9ff', fontWeight: '600'}}>todos os dispositivos</span>.
            Mais de <span style={{color: '#0099ff', fontWeight: '600'}}>18 mil filmes</span>, 
            todos os canais e streaming ilimitado.
          </p>

          {/* CTA Buttons */}
          <div style={{
            display: 'flex',
            gap: '20px',
            flexWrap: 'wrap',
            marginBottom: '50px'
          }}>
            <button
              onClick={scrollToPlanos}
              style={{
                background: 'linear-gradient(135deg, #00d9ff, #0099ff)',
                border: 'none',
                padding: '18px 40px',
                borderRadius: '50px',
                color: '#000',
                fontSize: '1.1rem',
                fontWeight: '700',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                boxShadow: '0 10px 30px rgba(0, 217, 255, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-5px) scale(1.05)'
                e.target.style.boxShadow = '0 15px 40px rgba(0, 217, 255, 0.5)'
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0) scale(1)'
                e.target.style.boxShadow = '0 10px 30px rgba(0, 217, 255, 0.3)'
              }}>
              Assinar por R$ 30/mês
            </button>

            <button
              onClick={scrollToPlanos}
              style={{
                background: 'transparent',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                padding: '18px 40px',
                borderRadius: '50px',
                color: '#fff',
                fontSize: '1.1rem',
                fontWeight: '700',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.1)'
                e.target.style.borderColor = '#fff'
                e.target.style.transform = 'translateY(-5px)'
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'transparent'
                e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)'
                e.target.style.transform = 'translateY(0)'
              }}>
              Saiba Mais
            </button>
          </div>

          {/* Trust Indicators */}
          <div style={{
            display: 'flex',
            gap: '40px',
            flexWrap: 'wrap'
          }}>
            <div>
              <div style={{
                fontSize: '2rem',
                fontWeight: '700',
                color: '#00d9ff',
                marginBottom: '5px'
              }}>+18 mil</div>
              <div style={{
                fontSize: '0.85rem',
                color: 'rgba(255, 255, 255, 0.6)',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>Filmes e Séries</div>
            </div>

            <div>
              <div style={{
                fontSize: '2rem',
                fontWeight: '700',
                color: '#0099ff',
                marginBottom: '5px'
              }}>Todos</div>
              <div style={{
                fontSize: '0.85rem',
                color: 'rgba(255, 255, 255, 0.6)',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>Canais de TV</div>
            </div>

            <div>
              <div style={{
                fontSize: '2rem',
                fontWeight: '700',
                color: '#00d9ff',
                marginBottom: '5px'
              }}>24/7</div>
              <div style={{
                fontSize: '0.85rem',
                color: 'rgba(255, 255, 255, 0.6)',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>Suporte</div>
            </div>
          </div>
        </div>

        {/* LADO DIREITO - Logo Grande */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative'
        }}>
          {/* Círculo de fundo com glow */}
          <div style={{
            position: 'absolute',
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(0, 217, 255, 0.15), transparent)',
            borderRadius: '50%',
            filter: 'blur(60px)',
            animation: 'pulse 3s ease-in-out infinite'
          }} />

          {/* Logo Grande */}
          <img 
            src="/logo.png" 
            alt="ConectPlay Logo" 
            style={{
              width: '100%',
              maxWidth: '500px',
              height: 'auto',
              objectFit: 'contain',
              filter: 'drop-shadow(0 0 40px rgba(0, 217, 255, 0.6))',
              animation: 'float 6s ease-in-out infinite',
              position: 'relative',
              zIndex: 1
            }}
          />

          {/* Partículas ao redor */}
          <div style={{
            position: 'absolute',
            top: '10%',
            right: '10%',
            width: '20px',
            height: '20px',
            background: '#00d9ff',
            borderRadius: '50%',
            boxShadow: '0 0 20px #00d9ff',
            animation: 'float 4s ease-in-out infinite'
          }} />
          <div style={{
            position: 'absolute',
            bottom: '15%',
            left: '15%',
            width: '15px',
            height: '15px',
            background: '#0099ff',
            borderRadius: '50%',
            boxShadow: '0 0 20px #0099ff',
            animation: 'float 5s ease-in-out infinite reverse'
          }} />
          <div style={{
            position: 'absolute',
            top: '40%',
            left: '5%',
            width: '10px',
            height: '10px',
            background: '#00d9ff',
            borderRadius: '50%',
            boxShadow: '0 0 15px #00d9ff',
            animation: 'float 6s ease-in-out infinite'
          }} />
        </div>
      </div>

      <style jsx>{`
        @keyframes grid-move {
          0% { transform: translateY(0); }
          100% { transform: translateY(50px); }
        }

        @media (max-width: 1024px) {
          .hero-container {
            grid-template-columns: 1fr !important;
            gap: 50px !important;
            text-align: center !important;
          }
        }
      `}</style>
    </section>
  )
}
