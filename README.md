# Task Management

**Task Management** é uma aplicação de gerenciamento de tarefas construída com **React + TypeScript + Vite** e estilizada com **styled-components**. O projeto foi lapidado para apresentação em portfólio, com foco em interface, edição inline e experiência de uso.

---

## O que está implementado

- Layout principal em um card com cabeçalho e lista de tarefas.
- Criação de novas tarefas com um botão de adicionar.
- Edição inline do título e do texto das tarefas.
- Checkbox customizado com feedback visual.
- Exclusão de tarefas.
- Persistência automática via `localStorage`.
- Estado vazio com instruções claras.

---

## Stack

- React 19 + TypeScript
- Vite
- styled-components
- lucide-react

---

## Como rodar localmente

```bash
pnpm install
pnpm dev
```

Abra o endereço exibido pelo Vite, normalmente `http://localhost:5173`.

---

## Próximos passos

- Melhorar responsividade para telas menores.
- Adicionar filtros, busca e prazos.
- Incluir testes unitários e E2E.
- Publicar com screenshots e link de demonstração.

---

## Observação

As tarefas ficam salvas no navegador usando `localStorage`. Se você limpar os dados do site, a lista será redefinida.
