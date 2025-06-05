# Electron Template 🚀

Um template moderno e robusto para iniciar suas aplicações desktop com [Electron](https://www.electronjs.org/), [Vite](https://vitejs.dev/) e [TypeScript](https://www.typescriptlang.org/).

Este projeto foi cuidadosamente estruturado para seguir as melhores práticas de engenharia de software, promovendo um código limpo, escalável, seguro e de fácil manutenção.

## ✨ Funcionalidades

- ⚡️ **Build Rápido com Vite**: Aproveite o HMR (Hot Module Replacement) e um processo de build extremamente veloz.
- 🔒 **Segurança em Primeiro Lugar**: Uso de `contextBridge` e `preload` para comunicação segura entre o processo principal e o de renderização.
- 📐 **TypeScript em Tudo**: Código tipado no processo principal, de renderização e nos scripts de build.
- 📦 **Empacotamento Fácil com `electron-builder`**: Scripts prontos para gerar instaladores para Windows, macOS e Linux.
- 🧹 **Qualidade de Código**: Configuração pronta de ESLint e Prettier para um código consistente e livre de erros comuns.
- 📂 **Estrutura de Projeto Clara**: Separação lógica das responsabilidades em `main`, `preload` e `renderer`.

## 📂 Estrutura do Projeto

```
electron-template/
├── dist/                   # Diretório de saída para os instaladores
├── out/                    # Código da aplicação compilado pelo Vite
├── src/
│   ├── main/               # Código do Processo Principal (Node.js)
│   │   └── index.ts
│   ├── preload/            # Script de Preload
│   │   ├── index.ts
│   │   └── index.d.ts      # Definições de tipo para a API exposta
│   └── renderer/           # Código do Processo de Renderização (Browser)
│       ├── main.ts
│       └── style.css
├── index.html              # Template HTML principal
├── electron.vite.config.ts # Configuração do electron-vite
├── package.json
└── tsconfig.json
```

- **`src/main`**: Contém o código que roda no ambiente Node.js. É responsável por criar janelas, gerenciar eventos do ciclo de vida da aplicação e interagir com o sistema operacional.
- **`src/preload`**: Atua como uma ponte entre o `main` e o `renderer`. Ele expõe APIs do Node.js de forma seletiva e segura para a interface do usuário, usando o `contextBridge`.
- **`src/renderer`**: Contém o código da interface do usuário (HTML, CSS, JS) que é executado dentro da janela do Electron. É essencialmente um ambiente de navegador web.
- **`electron.vite.config.ts`**: Arquivo de configuração que integra o Vite ao ecossistema do Electron, definindo pipelines de build separados para cada processo.

## 🚀 Como Começar

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

### Instalação

Clone este repositório e instale as dependências:

```bash
git clone https://github.com/seu-usuario/electron-template.git # ou use este template
cd electron-template
npm install
```

### Desenvolvimento

Para iniciar o ambiente de desenvolvimento com HMR, execute:

```bash
npm run dev
```

Isso abrirá a janela do Electron e o DevTools. Qualquer alteração nos arquivos do `renderer` ou `preload` recarregará a aplicação instantaneamente. Alterações no `main` exigirão uma reinicialização manual.

### Linting e Formatação

Para verificar e corrigir problemas de linting:
```bash
npm run lint
```

Para formatar todo o código com o Prettier:
```bash
npm run format
```

## 📦 Empacotando a Aplicação

Para compilar a aplicação e gerar os instaladores, use os seguintes comandos:

```bash
# Para Windows
npm run build:win

# Para macOS
npm run build:mac

# Para Linux
npm run build:linux
```

Os arquivos de saída serão gerados no diretório `dist/`.

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes. 