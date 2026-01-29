'use client'
import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'Como funciona o ConectPlay?',
      answer: 'O ConectPlay é um serviço de IPTV que permite assistir TV ao vivo, filmes e séries em qualquer dispositivo conectado à internet. Após a assinatura, você recebe suas credenciais de acesso por WhatsApp e pode começar a assistir imediatamente.'
    },
    {
      question: 'Em quantos dispositivos posso usar?',
      answer: 'Você pode usar em múltiplos dispositivos como Smart TV, celular, tablet, computador, TV Box, etc. Funciona em Android, iOS, Windows, Mac e mais.'
    },
    {
      question: 'Como faço para pagar?',
      answer: 'O pagamento é feito via PIX através do WhatsApp. Basta clicar em "Assinar Agora", entrar em contato conosco, fazer o pagamento do PIX e receber suas credenciais imediatamente.'
    },
    {
      question: 'Tem teste grátis?',
      answer: 'Entre em contato via WhatsApp para verificar a disponibilidade de teste grátis. Teremos prazer em apresentar nossa plataforma!'
    },
    {
      question: 'Posso cancelar quando quiser?',
      answer: 'Sim! Não há fidelidade. Você pode cancelar sua assinatura a qualquer momento sem custos adicionais.'
    },
    {
      question: 'Qual a qualidade dos conteúdos?',
      answer: 'Oferecemos conteúdo em HD e 4K, dependendo da sua conexão de internet. Recomendamos internet de pelo menos 10Mbps para melhor experiência.'
    },
    {
      question: 'Como recebo suporte?',
      answer: 'Nosso suporte está disponível 24/7 via WhatsApp. Qualquer dúvida ou problema, entre em contato e te ajudaremos imediatamente.'
    },
    {
      question: 'O que está incluso no plano?',
      answer: 'Todos os canais de TV (abertos e fechados), +18 mil filmes e séries, streaming completo (Netflix, Prime Video, Disney+, HBO Max, etc), tudo em um único plano.'
    }
  ]

  return (
    <section id="faq" style={{
      padding: '100px 40px',
      background: '#000000',
      position: 'relative'
    }}>
      <div style={{
        maxWidth: '900px',
        margin: '0 auto'
      }}>
        {/* Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '70px'
        }}>
          <h2 style={{
            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
            fontWeight: '700',
            marginBottom: '20px',
            letterSpacing: '-1px'
          }}>
            Perguntas <span className="gradient-text">Frequentes</span>
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: 'rgba(255, 255, 255, 0.7)'
          }}>
            Tire suas dúvidas sobre o ConectPlay
          </p>
        </div>

        {/* FAQ Items */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px'
        }}>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index

            return (
              <div
                key={index}
                style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  borderColor: isOpen ? 'rgba(0, 255, 255, 0.5)' : 'rgba(255, 255, 255, 0.1)'
                }}>
                {/* Question */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  style={{
                    width: '100%',
                    padding: '25px 30px',
                    background: 'transparent',
                    border: 'none',
                    color: '#ffffff',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    textAlign: 'left',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '20px',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    if (!isOpen) {
                      e.currentTarget.style.color = '#00ffff'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isOpen) {
                      e.currentTarget.style.color = '#ffffff'
                    }
                  }}>
                  <span>{faq.question}</span>
                  <span style={{
                    fontSize: '1.5rem',
                    transition: 'transform 0.3s ease',
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    color: isOpen ? '#00ffff' : 'rgba(255, 255, 255, 0.5)',
                    flexShrink: 0
                  }}>
                    ▼
                  </span>
                </button>

                {/* Answer */}
                <div style={{
                  maxHeight: isOpen ? '500px' : '0',
                  overflow: 'hidden',
                  transition: 'max-height 0.4s ease'
                }}>
                  <div style={{
                    padding: '0 30px 25px 30px',
                    fontSize: '1rem',
                    color: 'rgba(255, 255, 255, 0.7)',
                    lineHeight: '1.7',
                    borderTop: '1px solid rgba(255, 255, 255, 0.05)'
                  }}>
                    {faq.answer}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Contact CTA */}
        <div style={{
          marginTop: '70px',
          textAlign: 'center',
          padding: '50px 40px',
          background: 'linear-gradient(135deg, rgba(0, 255, 255, 0.05), rgba(255, 0, 255, 0.05))',
          border: '1px solid rgba(0, 255, 255, 0.2)',
          borderRadius: '20px'
        }}>
          <h3 style={{
            fontSize: '1.5rem',
            fontWeight: '700',
            marginBottom: '15px',
            color: '#ffffff'
          }}>
            Ainda tem dúvidas?
          </h3>
          <p style={{
            fontSize: '1rem',
            color: 'rgba(255, 255, 255, 0.7)',
            marginBottom: '25px'
          }}>
            Entre em contato via WhatsApp e teremos prazer em ajudar!
          </p>
          <button
            onClick={() => {
              // TODO: Adicionar o número de WhatsApp
              window.open('https://wa.me/5524999984401?text=Olá! Tenho uma dúvida sobre o ConectPlay', '_blank')
            }}
            style={{
              background: 'linear-gradient(135deg, #00ffff, #ff00ff)',
              border: 'none',
              padding: '15px 35px',
              borderRadius: '50px',
              color: '#000',
              fontSize: '1rem',
              fontWeight: '700',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.05)'
              e.target.style.boxShadow = '0 10px 30px rgba(0, 255, 255, 0.5)'
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1)'
              e.target.style.boxShadow = 'none'
            }}>
            <span style={{fontSize: '1.3rem'}}>💬</span>
            Falar no WhatsApp
          </button>
        </div>
      </div>
    </section>
  )
}
