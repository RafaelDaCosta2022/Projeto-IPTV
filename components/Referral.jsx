'use client'

export default function Referral() {
  return (
    <section style={{
      padding: '100px 40px',
      background: 'linear-gradient(135deg, rgba(0, 255, 255, 0.05) 0%, rgba(255, 0, 255, 0.05) 100%)',
      position: 'relative'
    }}>
      <div style={{
        maxWidth: '1000px',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        {/* Icon */}
        <div style={{
          fontSize: '5rem',
          marginBottom: '30px',
          filter: 'drop-shadow(0 10px 20px rgba(0, 255, 255, 0.3))'
        }}>
          🎁
        </div>

        {/* Title */}
        <h2 style={{
          fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
          fontWeight: '700',
          marginBottom: '20px',
          letterSpacing: '-1px'
        }}>
          Indique um Amigo e Ganhe <span className="gradient-text">1 Mês Grátis</span>
        </h2>

        {/* Description */}
        <p style={{
          fontSize: '1.2rem',
          color: 'rgba(255, 255, 255, 0.8)',
          marginBottom: '50px',
          maxWidth: '700px',
          margin: '0 auto 50px',
          lineHeight: '1.6'
        }}>
          Compartilhe a ConectPlay com seus amigos e ganhe um mês de acesso gratuito para cada indicação que assinar!
        </p>

        {/* Steps */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '40px',
          marginBottom: '50px'
        }}>
          {[
            { number: '1', title: 'Compartilhe', desc: 'Envie para seus amigos' },
            { number: '2', title: 'Eles Assinam', desc: 'Seu amigo se cadastra' },
            { number: '3', title: 'Você Ganha', desc: 'Recebe 1 mês grátis' }
          ].map((step, index) => (
            <div key={index} style={{
              padding: '30px',
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '20px',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#00ffff'
              e.currentTarget.style.transform = 'translateY(-5px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'
              e.currentTarget.style.transform = 'translateY(0)'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #00ffff, #ff00ff)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.8rem',
                fontWeight: '700',
                color: '#000',
                margin: '0 auto 20px'
              }}>
                {step.number}
              </div>
              <h3 style={{
                fontSize: '1.3rem',
                fontWeight: '700',
                marginBottom: '10px',
                color: '#ffffff'
              }}>
                {step.title}
              </h3>
              <p style={{
                fontSize: '0.95rem',
                color: 'rgba(255, 255, 255, 0.7)'
              }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <button
          onClick={() => {
            const element = document.getElementById('planos')
            if (element) element.scrollIntoView({ behavior: 'smooth' })
          }}
          style={{
            background: 'transparent',
            border: '2px solid rgba(0, 255, 255, 0.5)',
            padding: '18px 40px',
            borderRadius: '50px',
            color: '#00ffff',
            fontSize: '1rem',
            fontWeight: '700',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = 'rgba(0, 255, 255, 0.1)'
            e.target.style.borderColor = '#00ffff'
            e.target.style.transform = 'scale(1.05)'
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'transparent'
            e.target.style.borderColor = 'rgba(0, 255, 255, 0.5)'
            e.target.style.transform = 'scale(1)'
          }}>
          Começar a Indicar
        </button>
      </div>
    </section>
  )
}
