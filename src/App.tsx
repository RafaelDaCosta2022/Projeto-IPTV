import { useEffect, useRef, useState } from 'react';

interface Movie {
  title: string;
  genre: string;
  description: string;
  poster: string;
}

const movies: Movie[] = [
  {
    title: 'Resgate Impossível',
    genre: 'Ação',
    description: 'Um agente retorna do anonimato para salvar o mundo de um ataque digital global.',
    poster: 'linear-gradient(135deg, #1d4ed8, #0ea5e9)',
  },
  {
    title: 'Céu de Neon',
    genre: 'Sci-fi',
    description: 'Naves contrabandistas cruzam portais secretos para entregar tecnologia proibida.',
    poster: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
  },
  {
    title: 'Circuito Secreto',
    genre: 'Suspense',
    description: 'Uma hacker descobre um circuito que liga a internet ao passado e pode mudar a história.',
    poster: 'linear-gradient(135deg, #0f172a, #14b8a6)',
  },
  {
    title: 'Gran Finale',
    genre: 'Drama',
    description: 'A maior banda latina enfrenta seus medos no show derradeiro que marcará gerações.',
    poster: 'linear-gradient(135deg, #f97316, #ef4444)',
  },
];

const REFERRAL_LINK = 'https://iptvprime.com/convite/seuID';

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [copyMessage, setCopyMessage] = useState('Pronto para compartilhar.');
  const intervalRef = useRef<number>();
  const referralInputRef = useRef<HTMLInputElement>(null);

  const currentMovie = movies[currentIndex];

  useEffect(() => {
    startInterval();
    return () => stopInterval();
  }, []);

  const startInterval = () => {
    stopInterval();
    intervalRef.current = window.setInterval(() => {
      setCurrentIndex((index) => (index + 1) % movies.length);
    }, 4500);
  };

  const stopInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const handleNavigate = (step: number) => {
    setCurrentIndex((index) => (index + step + movies.length) % movies.length);
    startInterval();
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(REFERRAL_LINK);
      setCopyMessage('Link copiado! Compartilhe com seus amigos.');
      return;
    } catch (error) {
      const input = referralInputRef.current;
      if (input) {
        input.select();
        input.setSelectionRange(0, input.value.length);
        const success = document.execCommand('copy');
        setCopyMessage(
          success
            ? 'Link copiado! Compartilhe com seus amigos.'
            : 'Não foi possível copiar, tente manualmente.'
        );
        return;
      }
    }

    setCopyMessage('Não foi possível copiar, tente manualmente.');
  };

  return (
    <>
      <header className="topbar">
        <div className="logo">IPTV Prime</div>
        <nav className="menu">
          <a href="#dispositivos">Compatibilidade</a>
          <a href="#lancamentos">Lançamentos</a>
          <a href="#planos">Planos</a>
          <a href="#indicacao">Indicação</a>
        </nav>
        <a className="cta" href="#planos">
          Começar agora
        </a>
      </header>

      <main>
        <section className="hero">
          <div className="hero__content">
            <p className="eyebrow">Seu entretenimento sem limites</p>
            <h1>Assista seus canais favoritos com qualidade premium por apenas R$30/mês.</h1>
            <p className="lede">
              Filmes, séries e esportes ao vivo em todos os seus dispositivos, com suporte 24/7 e atualização diária
              de conteúdo.
            </p>
            <div className="hero__actions">
              <a className="button primary" href="#planos">
                Escolher o plano
              </a>
              <a className="button ghost" href="#lancamentos">
                Ver lançamentos
              </a>
            </div>
          </div>
          <div className="hero__card">
            <div className="card__header">Plano Destaque</div>
            <div className="card__price">
              <span className="currency">R$</span>
              <span className="value">30</span>
              <span className="period">/mês</span>
            </div>
            <ul className="card__list">
              <li>+200 canais em HD e Full HD</li>
              <li>Filmes e séries atualizados toda semana</li>
              <li>Suporte para todos os dispositivos</li>
              <li>Teste grátis de 24h</li>
            </ul>
            <a className="button primary full" href="#planos">
              Assinar agora
            </a>
          </div>
        </section>

        <section id="dispositivos" className="section">
          <div className="section__header">
            <p className="eyebrow">Compatibilidade total</p>
            <h2>Funciona nos dispositivos que você já usa</h2>
            <p className="lede">
              Assista na TV, no celular ou no computador. Basta baixar o app IPTV favorito e inserir seu login.
            </p>
          </div>
          <div className="grid devices">
            <div className="card">
              <div className="icon">📺</div>
              <h3>Smart TVs</h3>
              <p>Samsung, LG, Android TV e Fire TV com apps como Smart IPTV, TiviMate e Duplex.</p>
            </div>
            <div className="card">
              <div className="icon">📱</div>
              <h3>Mobile</h3>
              <p>Android e iOS com players leves (OTT Navigator, Smarters, GSE, IPTVX).</p>
            </div>
            <div className="card">
              <div className="icon">💻</div>
              <h3>PC & Mac</h3>
              <p>Assista direto no navegador ou em players como VLC e Kodi.</p>
            </div>
            <div className="card">
              <div className="icon">🎮</div>
              <h3>Consoles</h3>
              <p>Xbox e PlayStation usando apps de streaming disponíveis nas stores.</p>
            </div>
          </div>
        </section>

        <section id="lancamentos" className="section section--dark">
          <div className="section__header">
            <p className="eyebrow">Lançamentos em destaque</p>
            <h2>Os filmes mais pedidos, sempre atualizados</h2>
            <p className="lede">A vitrine se renova automaticamente. Aperte play e aproveite a sessão.</p>
          </div>
          <div className="slider">
            <div className="slider__info">
              <p className="tag" aria-live="polite">
                {currentMovie.genre}
              </p>
              <h3 aria-live="polite">{currentMovie.title}</h3>
              <p aria-live="polite">{currentMovie.description}</p>
              <div className="slider__controls">
                <button className="button ghost" onClick={() => handleNavigate(-1)} aria-label="Filme anterior">
                  ◀
                </button>
                <button className="button primary" onClick={() => handleNavigate(1)} aria-label="Próximo filme">
                  ▶
                </button>
              </div>
            </div>
            <div className="slider__poster" style={{ backgroundImage: currentMovie.poster }} aria-label="Poster do filme" />
          </div>
        </section>

        <section id="planos" className="section">
          <div className="section__header">
            <p className="eyebrow">Assinatura simples</p>
            <h2>Plano único por R$30/mês</h2>
            <p className="lede">
              Preço direto, sem surpresas. Inclui suporte humano, atualização diária e guia eletrônico de programação.
            </p>
          </div>
          <div className="plan">
            <div className="plan__price">
              <span className="currency">R$</span>
              <span className="value">30</span>
              <span className="period">/mês</span>
            </div>
            <ul className="plan__benefits">
              <li>2 telas simultâneas</li>
              <li>Replay e conteúdo on-demand</li>
              <li>Gravação em nuvem por 7 dias</li>
              <li>Instalação guiada passo a passo</li>
            </ul>
            <a className="button primary full" href="#indicacao">
              Quero assinar
            </a>
          </div>
        </section>

        <section id="indicacao" className="section section--accent">
          <div className="section__content">
            <div>
              <p className="eyebrow">Indique e ganhe</p>
              <h2>Ganhe 1 mês grátis a cada amigo indicado</h2>
              <p className="lede">
                Compartilhe seu link de convite. Cada novo assinante garante um mês a mais sem custo para você.
              </p>
              <div className="referral">
                <input
                  ref={referralInputRef}
                  id="referral-link"
                  type="text"
                  value={REFERRAL_LINK}
                  readOnly
                  aria-label="Link de indicação"
                />
                <button id="copy-link" className="button primary" type="button" onClick={handleCopy}>
                  Copiar link
                </button>
              </div>
              <p className="hint" id="copy-feedback" role="status">
                {copyMessage}
              </p>
            </div>
            <div className="badge">
              <span className="badge__number">+1</span>
              <p className="badge__text">Mês grátis por indicação</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© 2024 IPTV Prime. Streaming rápido, simples e sem burocracia.</p>
      </footer>
    </>
  );
}
