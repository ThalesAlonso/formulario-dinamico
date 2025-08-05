# 📝 Construtor de Formulários Dinâmicos

Este projeto é uma aplicação web desenvolvida com **Next.js**, **TypeScript**, **TailwindCSS**, **Zustand** e **Shadcn UI**.  
O objetivo é permitir que o usuário crie formulários com perguntas dinâmicas, obrigatoriedades e tipos variados — e visualize o resultado em tempo real.

> ✅ Aplicação funcional, leve, moderna, com persistência local e visual responsivo.

---

## 🚀 Tecnologias Utilizadas

- [Next.js](https://nextjs.org/) — framework React full-stack
- [React 18](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/) — utilitários de estilo
- [Zustand](https://github.com/pmndrs/zustand) — gerenciamento de estado global
- [Shadcn UI](https://ui.shadcn.com/) — componentes de interface elegantes
- [uuid](https://www.npmjs.com/package/uuid) — geração de IDs únicos

---

## 📦 Instalação e Execução

Siga os passos abaixo para clonar e executar o projeto localmente.

### ✅ Pré-requisitos

- Node.js >= 18.x
- npm ou yarn

### 📥 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/seu-repo.git
cd seu-repo
```

### 📦 2. Instale as dependências

```bash
npm install
# ou
yarn install
```

### ▶️ 3. Rode o servidor de desenvolvimento

```bash
npm run dev
# ou
yarn dev
```

Acesse em seu navegador:  
📍 [`http://localhost:3000`](http://localhost:3000)

---

## 📁 Estrutura do Projeto

```
src/
├── app/                     # Páginas da aplicação (Next.js)
│   ├── page.tsx            # Página principal (criação de formulário)
│   └── preview/page.tsx    # Página de visualização
│
├── components/             # Componentes reutilizáveis
│   ├── FormularioBuilder.tsx
│   ├── PerguntaEditor.tsx
│   ├── PerguntaPreview.tsx
│   └── ui/                 # Componentes do Shadcn (botão, input, etc.)
│
├── lib/                    # Store global e tipos
│   ├── store.ts            # Zustand: lógica de formulários
│   ├── respostaStore.ts    # Zustand: respostas preenchidas
│   ├── types.ts            # Tipagens TS dos modelos
│   └── utils.ts            # Utilitários gerais
│
├── public/                 # Imagens e ícones estáticos (ex: file.svg)
│
├── styles/                 # CSS global
│   └── globals.css
```

---

## ✅ Funcionalidades

- Criar formulários personalizados com perguntas dinâmicas
- Tipos suportados:
  - Texto Livre
  - Múltipla Escolha
  - Única Escolha
  - Sim/Não
  - Inteiro
  - Número com casas decimais
- Perguntas obrigatórias
- Visualização do formulário final
- Preenchimento simulado de respostas
- Persistência automática com Zustand e localStorage

---

## 📌 Observações Técnicas

- Este projeto **não requer backend** para funcionar.
- Todos os dados são salvos localmente usando Zustand com persistência (`localStorage`).
- Pode ser facilmente adaptado para usar Firebase, Supabase, ou uma API REST real.
- O objetivo principal é demonstrar domínio de **Next.js**, **TypeScript**, **estado global** e **componentização moderna**.

---

## 👨‍💻 Autor

**Thales Alonso**  
Desenvolvedor Full Stack  
📧 thales@email.com  
🔗 [linkedin.com/in/seuperfil](https://linkedin.com/in/seuperfil)

---

## 📄 Licença

Este projeto está licenciado sob a **Licença MIT**.  
Você pode usar, modificar e distribuir este código como quiser.

---

## ✅ Checklist para Avaliadores

- [x] README completo com instruções claras
- [x] Instalação e execução local sem dependências externas
- [x] Funcionalidade principal entregue conforme solicitado
- [x] Código limpo, modular e bem estruturado
- [x] Projeto roda em `http://localhost:3000`

---

Feito com 💻 + ❤️ por Thales Alonso
