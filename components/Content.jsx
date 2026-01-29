'use client'

export default function Content() {
  const contents = [
    {
      icon: '📺',
      title: 'Todos os Canais',
      description: 'Canais abertos, fechados, esportes, notícias e muito mais',
      highlight: '500+ canais',
      color: '#00ffff'
    },
    {
      icon: '🎬',
      title: '+ de 18 mil Filmes',
      description: 'Lançamentos, clássicos e exclusivos em HD e 4K',
      highlight: 'Sempre atualizado',
      color: '#ff00ff'
    },
    {
      icon: '📡',
      title: 'Todo Streaming',
      description: 'Netflix, Prime Video, Disney+, HBO Max e muito mais',
      highlight: 'Tudo incluso',
      color: '#00ffff'
    }
  ]

  return (
    <section id="conteudos" style={{
      padding: '100px 40px',
      background: '#000000',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Effect */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(0, 255, 255, 0.1), transparent)',
        filter: 'blur(100px)',
        pointerEvents: 'none'
      }} />

      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1
      }}>
        {/* Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '80px'
        }}>
          <h2 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: '700',
            marginBottom: '20px',
            letterSpacing: '-1px'
          }}>
            <span className="gradient-text">Conteúdo Ilimitado</span> para Você
          </h2>
          <p style={{
            fontSize: '1.2rem',
            color: 'rgba(255, 255, 255, 0.7)',
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            Acesso completo a tudo que você precisa para entretenimento de qualidade
          </p>
        </div>

        {/* Content Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '40px',
          marginBottom: '80px'
        }}>
          {contents.map((content, index) => (
            <div
              key={index}
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0.01))',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '24px',
                padding: '50px 30px',
                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden',
                animation: `slideInUp 0.8s ease-out ${index * 0.15}s both`
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)'
                e.currentTarget.style.borderColor = content.color
                e.currentTarget.style.boxShadow = `0 25px 50px ${content.color}40`
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'
                e.currentTarget.style.boxShadow = 'none'
              }}>
              {/* Corner Accent */}
              <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '100px',
                height: '100px',
                background: `radial-gradient(circle at top right, ${content.color}20, transparent)`,
                borderRadius: '0 24px 0 100%'
              }} />

              {/* Icon */}
              <div style={{
                fontSize: '4.5rem',
                marginBottom: '25px',
                filter: 'grayscale(100%)',
                transition: 'filter 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.filter = 'grayscale(0%)'}
              onMouseLeave={(e) => e.target.style.filter = 'grayscale(100%)'}>
                {content.icon}
              </div>

              {/* Badge */}
              <div style={{
                display: 'inline-block',
                padding: '6px 16px',
                background: `${content.color}20`,
                border: `1px solid ${content.color}`,
                borderRadius: '20px',
                fontSize: '0.75rem',
                color: content.color,
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                marginBottom: '20px'
              }}>
                {content.highlight}
              </div>

              {/* Title */}
              <h3 style={{
                fontSize: '1.8rem',
                fontWeight: '700',
                marginBottom: '15px',
                color: '#ffffff'
              }}>
                {content.title}
              </h3>

              {/* Description */}
              <p style={{
                fontSize: '1rem',
                color: 'rgba(255, 255, 255, 0.7)',
                lineHeight: '1.6'
              }}>
                {content.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{
          textAlign: 'center',
          padding: '60px 40px',
          background: 'linear-gradient(135deg, rgba(0, 255, 255, 0.05), rgba(255, 0, 255, 0.05))',
          border: '2px solid rgba(0, 255, 255, 0.2)',
          borderRadius: '30px',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Animated border effect */}
          <div style={{
            position: 'absolute',
            top: '-2px',
            left: '-2px',
            right: '-2px',
            bottom: '-2px',
            background: 'linear-gradient(90deg, #00ffff, #ff00ff, #00ffff)',
            borderRadius: '30px',
            opacity: 0,
            transition: 'opacity 0.3s ease',
            zIndex: -1
          }}
          className="border-gradient" />

          <h3 style={{
            fontSize: '2rem',
            fontWeight: '700',
            marginBottom: '15px',
            color: '#ffffff'
          }}>
            Tudo isso por apenas <span className="gradient-text">R$ 30/mês</span>
          </h3>
          <p style={{
            fontSize: '1.1rem',
            color: 'rgba(255, 255, 255, 0.7)',
            marginBottom: '30px'
          }}>
            Sem taxas extras, sem surpresas. Cancele quando quiser.
          </p>

          <button
            onClick={() => {
              const element = document.getElementById('planos')
              if (element) element.scrollIntoView({ behavior: 'smooth' })
            }}
            style={{
              background: 'linear-gradient(135deg, #00ffff, #ff00ff)',
              border: 'none',
              padding: '18px 45px',
              borderRadius: '50px',
              color: '#000',
              fontSize: '1rem',
              fontWeight: '700',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.05)'
              e.target.style.boxShadow = '0 15px 40px rgba(0, 255, 255, 0.5)'
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1)'
              e.target.style.boxShadow = 'none'
            }}>
            Começar Agora
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}
