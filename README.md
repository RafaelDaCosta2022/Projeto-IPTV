# ConectPlay - Site IPTV

Site completo para serviço de IPTV desenvolvido com Next.js 15, React e TailwindCSS.

## 🎨 Características

- Design moderno com gradientes Ciano/Rosa
- Animações suaves e interativas
- Responsivo para todos os dispositivos
- Integração com WhatsApp para vendas
- Seção de lançamentos em Spotlight (escolhida pelo cliente)
- FAQ interativo
- Sistema de indicação

## 📋 Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn

## 🚀 Instalação

### 1. Entre na pasta do projeto que você criou:
```bash
cd conectplay
```

### 2. Instale as dependências:
```bash
npm install
```

### 3. Configure o número de WhatsApp:

Edite os seguintes arquivos e substitua `5524999999999` pelo seu número (formato: 55 + DDD + número):

- `components/Pricing.jsx` (linha 5)
- `components/FAQ.jsx` (linha 151)
- `components/Footer.jsx` (linha 149 e 234)

### 4. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

### 5. Acesse no navegador:
```
http://localhost:3000
```

## 📂 Estrutura do Projeto

```
conectplay/
├── app/
│   ├── layout.js          # Layout principal
│   ├── page.js            # Página home
│   └── globals.css        # Estilos globais
├── components/
│   ├── Header.jsx         # Cabeçalho
│   ├── Hero.jsx           # Seção hero
│   ├── LaunchesSpotlight.jsx  # Lançamentos
│   ├── Devices.jsx        # Dispositivos
│   ├── Content.jsx        # Conteúdos
│   ├── Pricing.jsx        # Planos
│   ├── Referral.jsx       # Indicações
│   ├── FAQ.jsx            # Perguntas
│   └── Footer.jsx         # Rodapé
└── public/
    └── images/            # Suas imagens
```

## 🎯 Personalização

### Cores
As cores principais estão no `globals.css`:
- Ciano: `#00ffff`
- Magenta: `#ff00ff`

### Conteúdo
Edite os componentes individuais para alterar textos, preços e informações.

### Imagens
- Adicione seu logo em `public/images/logo.png`
- As imagens dos lançamentos podem ser substituídas nas URLs do componente `LaunchesSpotlight.jsx`

## 📱 Build para Produção

```bash
npm run build
npm start
```

## 🌐 Deploy

Você pode fazer deploy em:
- Vercel (recomendado para Next.js)
- Netlify
- Railway
- Seu próprio VPS

### Deploy na Vercel (mais fácil):
1. Crie conta em vercel.com
2. Conecte seu repositório GitHub
3. Deploy automático!

## ⚙️ Configurações Importantes

### SEO
Edite o `metadata` em `app/layout.js` com suas informações.

### Analytics
Adicione Google Analytics ou similar editando o `app/layout.js`.

## 📞 Suporte

Para dúvidas sobre o código, revise a documentação do Next.js:
- https://nextjs.org/docs

## 🎨 Componentes

Cada seção do site é um componente React independente que pode ser editado separadamente:

- **Header**: Menu de navegação fixo
- **Hero**: Seção inicial com chamada principal
- **LaunchesSpotlight**: Lançamentos em destaque com transições
- **Devices**: Dispositivos compatíveis
- **Content**: Conteúdos disponíveis
- **Pricing**: Plano e preço com botão WhatsApp
- **Referral**: Programa de indicação
- **FAQ**: Perguntas frequentes com acordeão
- **Footer**: Rodapé com links e informações

## 🔧 Comandos Úteis

```bash
# Desenvolvimento
npm run dev

# Build
npm run build

# Produção
npm start

# Lint
npm run lint
```

## 📝 Notas

- Certifique-se de adicionar seu número de WhatsApp nos locais indicados
- Substitua as imagens de exemplo pelas suas
- Teste em diferentes dispositivos antes de publicar
- Configure seu domínio após o deploy

---

Desenvolvido com ❤️ para ConectPlay
