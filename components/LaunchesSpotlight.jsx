'use client'
import React, { useState, useEffect } from 'react';

export default function LaunchesSpotlight() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [imageOrientations, setImageOrientations] = useState({});

  const launches = [
    {
      title: "O Cavaleiro dos Sete Reinos",
      image: "https://image.tmdb.org/t/p/w500/mweOUz4YNESmCPNP24mnaHkxF70.jpg",
      description: "Um século antes dos eventos de Game of Thrones, quando a linhagem Targaryen ainda detém o Trono de Ferro, dois improváveis heróis vagam por Westeros: um jovem cavaleiro, Sor Duncan, o Alto, e seu escudeiro, Egg.",
      year: "2026",
      genre: "Drama",
      rating: "9.2"
    },
    {
      title: "Stranger Things",
      image: "logo04.jpg",
      description: "Na década de 1980, um grupo de amigos se envolve em uma série de eventos sobrenaturais na pacata cidade de Hawkins. Eles enfrentam criaturas monstruosas, agências secretas do governo e se aventuram em dimensões paralelas.",
      year: "2026",
      genre: "Terror",
      rating: "8.5"
    },
    {
      title: "Zootopia 2",
      image: "logo03.png",
      description: "Os detetives Judy Hopps e Nick Wilde se encontram na trilha sinuosa de um réptil misterioso que vira de cabeça para baixo a metrópole de mamíferos, Zootopia",
      year: "2025",
      genre: "Infantil/Comédia",
      rating: "9.2"
    },
    {
      title: "Pecadores",
      image: "logo01.png",
      description: "Dois irmãos gêmeos tentam deixar suas vidas problemáticas para trás e retornam à sua cidade natal para recomeçar. Lá, eles descobrem que um mal ainda maior está à espreita para recebê-los de volta.",
      year: "2025",
      genre: "Terror/Ação",
      rating: "8.5"
    }
  ];

  const currentLaunch = launches[activeIndex];
  const currentOrientation = imageOrientations[activeIndex] || 'portrait';

  // Detecta orientação da imagem
  const handleImageLoad = (index, event) => {
    const img = event.target;
    const ratio = img.naturalWidth / img.naturalHeight;
    
    let orientation;
    if (ratio > 1.5) {
      orientation = 'landscape'; // Imagem horizontal
    } else if (ratio < 0.7) {
      orientation = 'portrait'; // Imagem vertical (poster)
    } else {
      orientation = 'square'; // Imagem quadrada
    }
    
    setImageOrientations(prev => ({
      ...prev,
      [index]: orientation
    }));
  };

  // Estilo baseado na orientação
  const getImageStyle = (orientation) => {
    const baseStyle = {
      width: '100%',
      height: '100%',
      transition: 'all 0.3s ease'
    };

    switch(orientation) {
      case 'portrait':
        return {
          ...baseStyle,
          objectFit: 'cover',
          objectPosition: 'center'
        };
      case 'square':
        return {
          ...baseStyle,
          objectFit: 'cover',
          objectPosition: 'center'
        };
      case 'landscape':
      default:
        return {
          ...baseStyle,
          objectFit: 'contain',
          objectPosition: 'center',
          backgroundColor: '#0d0d0d'
        };
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % launches.length);
        setIsTransitioning(false);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, [launches.length]);

  const handleSelect = (index) => {
    if (index !== activeIndex) {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveIndex(index);
        setIsTransitioning(false);
      }, 300);
    }
  };

  return (
    <section id="lancamentos" style={{
      minHeight: '100vh',
      background: '#0d0d0d',
      fontFamily: '"Montserrat", sans-serif',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Image with Blur */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `url(${currentLaunch.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'blur(40px) brightness(0.3)',
        transform: isTransitioning ? 'scale(1.1)' : 'scale(1)',
        transition: 'all 1s ease-out',
        opacity: isTransitioning ? 0.5 : 1
      }} />

      {/* Gradient Overlays */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.7) 70%, rgba(0,0,0,0.95) 100%)'
      }} />

      <div style={{
        position: 'relative',
        zIndex: 1,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '60px',
        maxWidth: '1600px',
        margin: '0 auto'
      }}>
        {/* Header */}
        <div style={{
          marginBottom: '60px'
        }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: '300',
            color: 'rgba(255, 255, 255, 0.6)',
            marginBottom: '10px',
            letterSpacing: '4px',
            textTransform: 'uppercase'
          }}>
            Lançamentos em Destaque
          </h2>
          <div style={{
            width: '80px',
            height: '3px',
            background: 'linear-gradient(90deg, #00ffff, #ff00ff)',
            borderRadius: '2px'
          }} />
        </div>

        {/* Main Content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'center'
        }}
        className="spotlight-grid">
          {/* Left Side - Info */}
          <div style={{
            opacity: isTransitioning ? 0 : 1,
            transform: isTransitioning ? 'translateX(-30px)' : 'translateX(0)',
            transition: 'all 0.5s ease-out'
          }}>
            {/* Genre & Year */}
            <div style={{
              display: 'flex',
              gap: '15px',
              marginBottom: '25px',
              flexWrap: 'wrap'
            }}>
              <span style={{
                padding: '6px 18px',
                background: 'rgba(0, 255, 255, 0.15)',
                border: '1px solid rgba(0, 255, 255, 0.5)',
                borderRadius: '25px',
                color: '#00ffff',
                fontSize: '0.85rem',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>
                {currentLaunch.genre}
              </span>
              <span style={{
                padding: '6px 18px',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '25px',
                color: '#ffffff',
                fontSize: '0.85rem',
                fontWeight: '600'
              }}>
                {currentLaunch.year}
              </span>
            </div>

            {/* Title */}
            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 5rem)',
              fontWeight: '900',
              color: '#ffffff',
              marginBottom: '20px',
              lineHeight: '1',
              letterSpacing: '-2px',
              textShadow: '0 10px 40px rgba(0, 255, 255, 0.3)'
            }}>
              {currentLaunch.title}
            </h1>

            {/* Rating - ESTRELAS AGORA! */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '30px'
            }}>
              <div style={{
                display: 'flex',
                gap: '4px'
              }}>
                {[...Array(5)].map((_, i) => (
                  <span key={i} style={{
                    color: i < Math.floor(parseFloat(currentLaunch.rating) / 2) ? '#ffff00' : 'rgba(255, 255, 255, 0.2)',
                    fontSize: '1.5rem'
                  }}>★</span>
                ))}
              </div>
              <span style={{
                color: '#ffffff',
                fontSize: '1.3rem',
                fontWeight: '700',
                marginLeft: '10px'
              }}>
                {currentLaunch.rating}
              </span>
            </div>

            {/* Description */}
            <p style={{
              fontSize: '1.1rem',
              lineHeight: '1.8',
              color: 'rgba(255, 255, 255, 0.8)',
              marginBottom: '40px',
              maxWidth: '600px'
            }}>
              {currentLaunch.description}
            </p>

            {/* Buttons */}
            <div style={{
              display: 'flex',
              gap: '20px',
              flexWrap: 'wrap'
            }}>
              <button style={{
                padding: '18px 40px',
                background: 'linear-gradient(135deg, #00ffff, #ff00ff)',
                border: 'none',
                borderRadius: '50px',
                color: '#000000',
                fontSize: '1rem',
                fontWeight: '700',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                transition: 'all 0.3s ease',
                boxShadow: '0 10px 30px rgba(0, 255, 255, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(0, 255, 255, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 255, 255, 0.3)';
              }}>
                <span style={{fontSize: '1.2rem'}}>▶</span>
                Assistir Agora
              </button>

              <button style={{
                padding: '18px 40px',
                background: 'transparent',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '50px',
                color: '#ffffff',
                fontSize: '1rem',
                fontWeight: '700',
                cursor: 'pointer',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.borderColor = '#ffffff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
              }}>
                Mais Info
              </button>
            </div>
          </div>

          {/* Right Side - Featured Image COM TAMANHO FIXO */}
          <div style={{
            position: 'relative',
            opacity: isTransitioning ? 0 : 1,
            transform: isTransitioning ? 'translateY(30px)' : 'translateY(0)',
            transition: 'all 0.5s ease-out'
          }}>
            <div style={{
              position: 'relative',
              aspectRatio: currentOrientation === 'landscape' ? '16/9' : '2/3',
              borderRadius: '30px',
              overflow: 'hidden',
              boxShadow: '0 30px 80px rgba(0, 0, 0, 0.8), 0 0 60px rgba(0, 255, 255, 0.2)',
              border: '3px solid',
              borderImage: 'linear-gradient(135deg, #00ffff, #ff00ff) 1',
              transition: 'aspect-ratio 0.5s ease'
            }}>
              <img 
                src={currentLaunch.image}
                alt={currentLaunch.title}
                onLoad={(e) => handleImageLoad(activeIndex, e)}
                style={getImageStyle(currentOrientation)}
              />
            </div>

            {/* Floating Elements */}
            <div style={{
              position: 'absolute',
              top: '-20px',
              right: '-20px',
              width: '100px',
              height: '100px',
              background: 'radial-gradient(circle, rgba(0, 255, 255, 0.3), transparent)',
              borderRadius: '50%',
              filter: 'blur(30px)',
              animation: 'float 3s ease-in-out infinite'
            }} />
            <div style={{
              position: 'absolute',
              bottom: '-30px',
              left: '-30px',
              width: '120px',
              height: '120px',
              background: 'radial-gradient(circle, rgba(255, 0, 255, 0.3), transparent)',
              borderRadius: '50%',
              filter: 'blur(40px)',
              animation: 'float 4s ease-in-out infinite reverse'
            }} />
          </div>
        </div>

        {/* Thumbnails Navigation */}
        <div style={{
          marginTop: '80px',
          display: 'flex',
          gap: '20px',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          {launches.map((launch, index) => {
            const thumbOrientation = imageOrientations[index] || 'portrait';
            
            return (
              <div
                key={index}
                onClick={() => handleSelect(index)}
                style={{
                  width: thumbOrientation === 'landscape' ? '160px' : '120px',
                  aspectRatio: thumbOrientation === 'landscape' ? '16/9' : '2/3',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  border: index === activeIndex ? '3px solid #00ffff' : '3px solid transparent',
                  opacity: index === activeIndex ? 1 : 0.4,
                  transform: index === activeIndex ? 'scale(1.1)' : 'scale(1)',
                  transition: 'all 0.3s ease',
                  boxShadow: index === activeIndex ? '0 10px 30px rgba(0, 255, 255, 0.4)' : 'none',
                  backgroundColor: '#0d0d0d'
                }}
                onMouseEnter={(e) => {
                  if (index !== activeIndex) {
                    e.currentTarget.style.opacity = '0.7';
                    e.currentTarget.style.transform = 'scale(1.05)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (index !== activeIndex) {
                    e.currentTarget.style.opacity = '0.4';
                    e.currentTarget.style.transform = 'scale(1)';
                  }
                }}
              >
                <img 
                  src={launch.image}
                  alt={launch.title}
                  onLoad={(e) => handleImageLoad(index, e)}
                  style={getImageStyle(thumbOrientation)}
                />
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700;900&display=swap');
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }

        @media (max-width: 1024px) {
          .spotlight-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
