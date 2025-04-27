# SDK Cortex

SDK para integração com o sistema Cortex IA, uma plataforma avançada de processamento de linguagem natural e análise de texto.

## 🚀 Visão Geral

O SDK Cortex é uma ferramenta que permite a integração com o sistema Cortex IA, oferecendo uma interface simplificada para processamento de linguagem natural, análise de texto e gerenciamento de dados. O SDK é construído com foco em modularidade e extensibilidade, permitindo que desenvolvedores criem e integrem seus próprios plugins.

## 🛠️ Tecnologias

- Next.js/React (Core e Plugins)
- Go (Golang) - Backend
- MongoDB - Banco de dados
- Docker - Containerização
- Node.js - Runtime JavaScript

## 📚 Bibliotecas Principais

### Core
- **next**: 15.3.1 - Framework React
- **react**: ^19.0.0 - Biblioteca UI
- **react-dom**: ^19.0.0 - Renderização React
- **@reduxjs/toolkit**: ^2.7.0 - Gerenciamento de estado
- **redux-saga**: ^1.3.0 - Middleware assíncrono
- **axios**: ^1.9.0 - Requisições HTTP

### UI/UX
- **tailwindcss**: ^4 - CSS Utility-first
- **lucide-react**: ^0.503.0 - Ícones
- **react-image-gallery**: ^1.4.0 - Galeria de imagens
- **react-toastify**: ^11.0.5 - Notificações
- **components-styled**: ^0.0.2 - Componentes estilizados

### Desenvolvimento
- **typescript**: ^5 - Tipagem estática
- **eslint**: ^9.25.1 - Linting
- **@typescript-eslint**: ^8.31.0 - Regras TypeScript para ESLint

## 📁 Estrutura do Projeto

```
sdk-cortex/
├── plugins/           # Plugins e extensões do SDK
│   └── luma/         # Plugin de processamento de imagens
├── .cursor/          # Configurações do Cursor IDE
├── .git/             # Controle de versão
├── .env              # Variáveis de ambiente
├── start.sh          # Script de inicialização
├── run_macos.sh      # Script específico para macOS
└── LICENSE           # Licença do projeto
```

## 📦 Plugins Disponíveis

### Luma
Plugin especializado em processamento de imagens e visão computacional, localizado em `plugins/luma/`.

#### Tecnologias
- Next.js 15.3.1
- React 19
- TypeScript
- Redux Toolkit & Saga
- TailwindCSS

#### Funcionalidades
- Análise avançada de imagens
- Processamento de visão computacional
- Interface moderna e responsiva
- Galeria de imagens interativa
- Carrossel de imagens otimizado
- Notificações em tempo real
- Componentes estilizados reutilizáveis

#### Integrações
- Integração com modelos de IA
- APIs de processamento de imagem
- Serviços de armazenamento
- Análise de metadados

## 🏗️ Arquitetura

O SDK é construído com uma arquitetura modular e extensível:

- **Plugins**: Sistema de plugins para extensão de funcionalidades
  - Luma: Processamento de imagens
- **Core**: Módulo central do SDK
- **Integrations**: Integrações com serviços externos
- **Utils**: Utilitários e helpers

## 🚀 Como Começar

1. Clone o repositório
```bash
git clone [url-do-repositorio]
```

2. Configure o ambiente
```bash
cp .env.example .env
# Edite o arquivo .env com suas configurações
```

3. Instale as dependências
```bash
npm install
# ou
yarn install
```

4. Execute o projeto
```bash
# Para desenvolvimento
npm run dev
# ou
yarn dev

# Para produção
npm run build
npm run start
# ou
yarn build
yarn start
```

## 🔒 Segurança

- Autenticação via tokens
- Gerenciamento seguro de sessões
- Variáveis de ambiente para configurações sensíveis
- Validação de inputs
- Sanitização de dados
- Logs de auditoria

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👥 Contribuição

Contribuições são bem-vindas! Por favor, siga estas diretrizes:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'feat: add some amazing feature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

### Padrões de Commit
Seguimos o Conventional Commits:
- `feat:` para novas funcionalidades
- `fix:` para correções de bugs
- `docs:` para documentação
- `style:` para formatação
- `refactor:` para refatoração
- `test:` para testes
- `chore:` para tarefas de manutenção

## 📫 Suporte

Para suporte, por favor abra uma issue no repositório ou entre em contato com a equipe de suporte.

---

Desenvolvido com ❤️ pela equipe Neocoode