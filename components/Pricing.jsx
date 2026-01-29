'use client'

export default function Pricing() {
  // TODO: Adicionar o número de WhatsApp aqui
  const whatsappNumber = '5524999984401' // Formato: 55 + DDD + número
  const whatsappMessage = encodeURIComponent('Olá! Gostaria de assinar o ConectPlay por R$ 30/mês. Como faço para pagar?')

  const openWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank')
  }

  const features = [
    { icon: '✓', text: 'Todos os canais de TV' },
    { icon: '✓', text: '+18 mil filmes e séries' },
    { icon: '✓', text: 'Streaming completo' },
    { icon: '✓', text: 'Qualidade HD e 4K' },
    { icon: '✓', text: 'Funciona em todos dispositivos' },
    { icon: '✓', text: 'Suporte 24/7 via WhatsApp' },
    { icon: '✓', text: 'Sem fidelidade' },
    { icon: '✓', text: 'Cancelamento a qualquer momento' }
  ]

  return (
    <section id="planos" style={{
      padding: '100px 40px',
      background: 'linear-gradient(180deg, #000000 0%, #0a0a0a 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Effects */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '0',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(0, 255, 255, 0.15), transparent)',
        filter: 'blur(80px)',
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '20%',
        right: '0',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(255, 0, 255, 0.15), transparent)',
        filter: 'blur(80px)',
        pointerEvents: 'none'
      }} />

      <div style={{
        maxWidth: '1200px',
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
            Plano <span className="gradient-text">Único</span>
          </h2>
          <p style={{
            fontSize: '1.2rem',
            color: 'rgba(255, 255, 255, 0.7)',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Tudo que você precisa em um único plano. Simples e sem complicação.
          </p>
        </div>

        {/* Pricing Card */}
        <div style={{
          maxWidth: '600px',
          margin: '0 auto',
          background: 'linear-gradient(135deg, rgba(0, 255, 255, 0.05), rgba(255, 0, 255, 0.05))',
          border: '2px solid rgba(0, 255, 255, 0.3)',
          borderRadius: '30px',
          padding: '60px 50px',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 30px 60px rgba(0, 0, 0, 0.5)',
          transition: 'all 0.5s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-10px)'
          e.currentTarget.style.boxShadow = '0 40px 80px rgba(0, 255, 255, 0.3)'
          e.currentTarget.style.borderColor = 'rgba(0, 255, 255, 0.6)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)'
          e.currentTarget.style.boxShadow = '0 30px 60px rgba(0, 0, 0, 0.5)'
          e.currentTarget.style.borderColor = 'rgba(0, 255, 255, 0.3)'
        }}>
          {/* Popular Badge */}
          <div style={{
            position: 'absolute',
            top: '30px',
            right: '30px',
            background: 'linear-gradient(135deg, #00ffff, #ff00ff)',
            padding: '8px 20px',
            borderRadius: '20px',
            fontSize: '0.75rem',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            color: '#000',
            boxShadow: '0 5px 15px rgba(0, 255, 255, 0.5)'
          }}>
            Mais Popular
          </div>

          {/* Plan Name */}
          <div style={{
            marginBottom: '30px'
          }}>
            <h3 style={{
              fontSize: '1.8rem',
              fontWeight: '700',
              color: '#ffffff',
              marginBottom: '10px'
            }}>
              Plano Completo
            </h3>
            <p style={{
              fontSize: '1rem',
              color: 'rgba(255, 255, 255, 0.7)'
            }}>
              Acesso total ao conteúdo
            </p>
          </div>

          {/* Price */}
          <div style={{
            marginBottom: '40px',
            textAlign: 'center'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'baseline',
              justifyContent: 'center',
              gap: '10px',
              marginBottom: '10px'
            }}>
              <span style={{
                fontSize: '1.5rem',
                color: '#00ffff',
                fontWeight: '600'
              }}>R$</span>
              <span style={{
                fontSize: '5rem',
                fontWeight: '900',
                color: '#ffffff',
                lineHeight: '1',
                fontFamily: 'Orbitron, sans-serif'
              }}>30</span>
              <span style={{
                fontSize: '1.5rem',
                color: 'rgba(255, 255, 255, 0.7)',
                fontWeight: '600'
              }}>/mês</span>
            </div>
            <p style={{
              fontSize: '0.9rem',
              color: 'rgba(255, 255, 255, 0.6)'
            }}>
              Pagamento mensal via PIX
            </p>
          </div>

          {/* Features List */}
          <div style={{
            marginBottom: '40px'
          }}>
            {features.map((feature, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '15px',
                  padding: '12px 0',
                  borderBottom: index < features.length - 1 ? '1px solid rgba(255, 255, 255, 0.1)' : 'none'
                }}>
                <div style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #00ffff, #ff00ff)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.8rem',
                  fontWeight: '700',
                  color: '#000',
                  flexShrink: 0
                }}>
                  {feature.icon}
                </div>
                <span style={{
                  fontSize: '1rem',
                  color: 'rgba(255, 255, 255, 0.9)'
                }}>
                  {feature.text}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <button
            onClick={openWhatsApp}
            style={{
              width: '100%',
              background: 'linear-gradient(135deg, #00ffff, #ff00ff)',
              border: 'none',
              padding: '20px',
              borderRadius: '50px',
              color: '#000',
              fontSize: '1.1rem',
              fontWeight: '700',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              boxShadow: '0 10px 30px rgba(0, 255, 255, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.02)'
              e.target.style.boxShadow = '0 15px 40px rgba(0, 255, 255, 0.5)'
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1)'
              e.target.style.boxShadow = '0 10px 30px rgba(0, 255, 255, 0.3)'
            }}>
            <span style={{fontSize: '1.5rem'}}>💬</span>
            Assinar via WhatsApp
          </button>

          <p style={{
            textAlign: 'center',
            marginTop: '20px',
            fontSize: '0.85rem',
            color: 'rgba(255, 255, 255, 0.6)'
          }}>
            Pagamento seguro via PIX • Ativação imediata
          </p>
        </div>

        {/* Trust Section */}
        <div style={{
          marginTop: '80px',
          textAlign: 'center'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '60px',
            flexWrap: 'wrap'
          }}>
            <div>
              <div style={{
                fontSize: '2rem',
                marginBottom: '10px'
              }}>🔒</div>
              <div style={{
                fontSize: '0.9rem',
                color: 'rgba(255, 255, 255, 0.7)'
              }}>
                Pagamento<br/>Seguro
              </div>
            </div>
            <div>
              <div style={{
                fontSize: '2rem',
                marginBottom: '10px'
              }}>⚡</div>
              <div style={{
                fontSize: '0.9rem',
                color: 'rgba(255, 255, 255, 0.7)'
              }}>
                Ativação<br/>Imediata
              </div>
            </div>
            <div>
              <div style={{
                fontSize: '2rem',
                marginBottom: '10px'
              }}>🔄</div>
              <div style={{
                fontSize: '0.9rem',
                color: 'rgba(255, 255, 255, 0.7)'
              }}>
                Cancele<br/>Quando Quiser
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
