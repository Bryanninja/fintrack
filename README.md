# 💰 FinTrack - Gestão Financeira Inteligente

![Status](https://img.shields.io/badge/Status-Em_Desenvolvimento-yellow) ![React](https://img.shields.io/badge/React-18-blue) ![TanStack Query](https://img.shields.io/badge/State-TanStack_Query-red)

> **Uma aplicação financeira desenvolvida com foco em Arquitetura Escalável, Performance e Experiência do Usuário (UX).**
<img width="1442" height="996" alt="1" src="https://github.com/user-attachments/assets/9816804c-a1fe-45f3-a3a6-49665fef2871" />


O **FinTrack** não é apenas um gerenciador de finanças, é um projeto de estudo avançado sobre como estruturar aplicações React modernas preparadas para o mundo real (Enterprise Level).

---

## 🚀 Tecnologias e Arquitetura

O projeto utiliza a stack mais moderna do mercado para garantir tipagem, validação e performance:

* **Core:** React 18, Vite, React Router v7.
* **Gerenciamento de Estado:** [TanStack Query (React Query)](https://tanstack.com/query/latest) - Para cache, revalidação e updates otimistas.
* **Formulários & Validação:** [React Hook Form](https://react-hook-form.com/) integrado com [Zod](https://zod.dev/) para esquemas de validação robustos.
* **Design System & UI:**
    * **Tailwind CSS:** Para estilização utilitária.
    * **Radix UI:** Componentes primitivos acessíveis (Headless UI).
    * **Shadcn/UI Pattern:** Arquitetura de componentes reutilizáveis usando `cva` (Class Variance Authority) e `clsx`.
    * **Lucide React:** Ícones leves e modernos.
* **Qualidade de Código (DX):**
    * **Husky & Lint-staged:** Hooks de pré-commit para garantir qualidade.
    * **Commitlint:** Padronização de mensagens de commit (Conventional Commits).
    * **ESLint & Prettier:** Padronização de código.

---

## 💡 Diferenciais do Projeto

### 1. Arquitetura Orientada a Componentes
Uso de padrões como **Composition Pattern** e separação clara entre componentes de UI (burros) e componentes de lógica (inteligentes).

### 2. Validação Defensiva
Todos os inputs do usuário passam por uma camada rigorosa de validação com **Zod**, garantindo que nenhum dado incorreto chegue ao backend ou quebre a interface.

### 3. Feedback Visual (UX)
Implementação de **Toasters** (Sonner) para feedbacks instantâneos e tratativa de erros amigável para o usuário.

---

## 💻 Como Rodar o Projeto

```bash
# 1. Clone o repositório
git clone [https://github.com/Bryanninja/fintrack.git](https://github.com/Bryanninja/fintrack.git)

# 2. Entre na pasta
cd fintrack

# 3. Instale as dependências
npm install

# 4. Rode o servidor de desenvolvimento
npm run dev
