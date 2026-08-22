# RedditFeed

Um agregador moderno e profissional de postagens e artigos de tecnologia, inspirado na interface e identidade visual do Reddit. Este projeto é desenvolvido com **Next.js 15+ (App Router)** e estilizado usando **Tailwind CSS v4**.

## 🚀 Funcionalidades Principais

- **Feed Dinâmico e Responsivo**: Layout construído em CSS Grid/Flexbox adaptável para Mobile, Tablet e Desktop.
- **Galeria 3D (Circular Gallery)**: Componente interativo que renderiza os posts em destaque utilizando um ambiente 3D acelerado via WebGL.
- **Modo Escuro (Dark Mode)**: Suporte completo e nativo a Dark Mode integrado com suporte a detecção do sistema operacional e seletor manual elegante (usando `next-themes`).
- **Navegação Imersiva (Modais Detalhados)**: Leitura das postagens acontece em Modais responsivos e altamente polidos que evitam carregamentos completos da página, retendo o usuário no Feed.
- **Autenticação de Usuário (Novo)**: Páginas de *Sign In* e *Sign Up* dedicadas e estilizadas para melhor retenção e conversão de usuários.

## 🛠️ Tecnologias Utilizadas

- **Framework:** [Next.js](https://nextjs.org/) (App Router, Server/Client components)
- **Linguagem:** TypeScript
- **Estilização:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Ícones:** [Lucide React](https://lucide.dev/)
- **Utilitários:** `clsx`, `tailwind-merge`

## 🏃 Como rodar o projeto localmente

Para executar esta aplicação na sua máquina, siga os passos abaixo:

1. Instale as dependências usando seu gerenciador de pacotes preferido:
```bash
npm install
# ou
yarn install
# ou
pnpm install
```

2. Inicie o servidor de desenvolvimento:
```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

3. Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

## 📁 Estrutura de Pastas (Highlights)

- `/src/app`: Onde residem as rotas principais (página inicial, /login, /register) e o Layout raiz.
- `/src/components`:
  - `/layout`: Componentes estruturais (Header, Footer).
  - `/ui`: Componentes reaproveitáveis e interativos (CircularGallery, PostModal).
- `/src/types`: Definições globais de interfaces do TypeScript.

## ⚖️ Licença

Este é um projeto acadêmico / de portfólio. Código aberto (MIT License).
