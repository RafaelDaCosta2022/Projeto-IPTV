import './globals.css'

export const metadata = {
  title: 'ConectPlay - Seu Mundo, Sem Limites',
  description: 'Assista IPTV em todos os dispositivos. +18mil filmes, todos os canais, streaming ilimitado por apenas R$ 30/mês',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
