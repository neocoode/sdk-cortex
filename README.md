# Luma - Plugin de Processamento de Imagens

Plugin do SDK Cortex para processamento avançado de imagens e visão computacional.

## 🚀 Visão Geral

O Luma é um plugin especializado em processamento de imagens e visão computacional, integrado ao SDK Cortex. Ele oferece uma interface moderna e intuitiva para análise, manipulação e processamento de imagens utilizando tecnologias de ponta.

## 🛠️ Tecnologias

- Next.js 15.3.1
- React 19
- TypeScript
- Redux Toolkit
- Redux Saga
- TailwindCSS
- Axios
- React Image Gallery
- Keen Slider

## 📚 Bibliotecas Principais

### Core
- **next**: 15.3.1 - Framework React
- **react**: ^19.0.0 - Biblioteca UI
- **react-dom**: ^19.0.0 - Renderização React
- **@reduxjs/toolkit**: ^2.7.0 - Gerenciamento de estado
- **redux-saga**: ^1.3.0 - Middleware assíncrono
- **axios**: ^1.9.0 - Requisições HTTP

### UI/UX
- **keen-slider**: ^6.8.6 - Carrossel de imagens
- **lucide-react**: ^0.503.0 - Ícones
- **react-image-gallery**: ^1.4.0 - Galeria de imagens
- **react-toastify**: ^11.0.5 - Notificações
- **components-styled**: ^0.0.2 - Componentes estilizados

### Desenvolvimento
- **typescript**: ^5 - Tipagem estática
- **eslint**: ^9.25.1 - Linting
- **tailwindcss**: ^4 - CSS Utility-first
- **@typescript-eslint**: ^8.31.0 - Regras TypeScript para ESLint

## 🚀 Como Começar

1. Instale as dependências
```bash
npm install
# ou
yarn install
```

2. Configure as variáveis de ambiente
```bash
cp .env.example .env.local
# Edite o arquivo .env.local com suas configurações
```

3. Execute o projeto em desenvolvimento
```bash
npm run dev
# ou
yarn dev
```

4. Para produção
```bash
npm run build
npm run start
# ou
yarn build
yarn start
```

## 📁 Estrutura do Projeto

```
luma/
├── src/              # Código fonte
├── public/           # Arquivos estáticos
├── docs/             # Documentação
├── .next/            # Build Next.js
├── node_modules/     # Dependências
└── package.json      # Configurações e dependências
```

## 🔧 Scripts Disponíveis

- `dev`: Inicia o servidor de desenvolvimento com Turbopack
- `build`: Gera a versão de produção
- `start`: Inicia o servidor de produção
- `lint`: Executa o linter

## 🎨 UI/UX

### Ícones
Utilizamos a biblioteca [Lucide Icons](https://lucide.dev/icons/) para ícones. Para instalar:

```bash
npm install lucide-react
# ou
yarn add lucide-react
```

### Componentes
O projeto utiliza uma combinação de:
- Componentes estilizados
- TailwindCSS para estilização
- Keen Slider para carrosséis
- React Image Gallery para galerias

## 🔒 Segurança

- Validação de inputs
- Sanitização de dados
- Proteção contra XSS
- Variáveis de ambiente para configurações sensíveis

## 📝 Licença

Este projeto está sob a licença MIT.

## 👥 Contribuição

1. Fork o projeto
2. Crie sua branch (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'feat: add some amazing feature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

---

Desenvolvido com ❤️ pela equipe Neocoode

## Links Úteis
- [Chat Vercel AI](https://chat.vercel.ai/)
- [Lucide Icons](https://lucide.dev/icons/)

## Configuração do Ambiente

### Variáveis de Ambiente
> (Adicione aqui as variáveis necessárias para o projeto)

---

# Ícones

Para usar ícones no projeto, utilizamos a biblioteca [Lucide Icons](https://lucide.dev/icons/).

### Instalação

Execute o comando:

```bash
npm install lucide-react

```

# API Configuration
NEXT_PUBLIC_API_URL=https://api.example.com
NEXT_PUBLIC_API_VERSION=v1

# Authentication
NEXT_PUBLIC_AUTH_TOKEN_KEY=auth_token

# Application
NEXT_PUBLIC_APP_NAME=Luma
NEXT_PUBLIC_APP_VERSION=0.1.24

# Environment
NODE_ENV=production
