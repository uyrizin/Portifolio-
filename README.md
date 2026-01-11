# Portfolio Back-end Developer

Site de portfólio profissional desenvolvido com Next.js 14 (App Router), Tailwind CSS e TypeScript.

## 🚀 Características

- ✅ Design moderno, responsivo e acessível (WCAG)
- ✅ Modo claro/escuro automático
- ✅ SEO otimizado (metatags, Open Graph, sitemap.xml, robots.txt)
- ✅ Componentização completa
- ✅ Performance otimizada (Lighthouse 90+)
- ✅ Testes com Vitest e React Testing Library
- ✅ Suporte a i18n (pt-BR padrão, pronto para en-US)
- ✅ JSON-LD Schema.org para SEO
- ✅ Filtros e busca na página de projetos
- ✅ Formulário de contato com fallback mailto

## 📋 Pré-requisitos

- Node.js 18+ 
- npm, yarn ou pnpm

## 🛠️ Instalação

1. Clone o repositório ou copie os arquivos para uma nova pasta
2. Instale as dependências:

```bash
npm install
# ou
yarn install
# ou
pnpm install
```

3. Configure o Husky (pre-commit hooks):

```bash
npm run prepare
```

## 🎨 Personalização

### Editar Informações Pessoais

Edite o arquivo `src/data/personal.ts`:

```typescript
export const data = {
  name: 'Seu Nome Completo',
  headline: 'Sua headline personalizada',
  location: 'Sua Cidade, Estado, País',
  bio: 'Sua bio aqui...',
  links: {
    github: 'https://github.com/seu-usuario',
    linkedin: 'https://linkedin.com/in/seu-perfil',
    email: 'seu@email.com',
  },
  skills: ['Node.js', 'TypeScript', ...],
}
```

### Adicionar/Editar Projetos

Edite o array `projects` no arquivo `src/data/projects.ts`:

```typescript
export const projects: Project[] = [
  {
    id: '1',
    name: 'Nome do Projeto',
    description: 'Descrição do projeto...',
    tags: ['Node.js', 'TypeScript'],
    repoUrl: 'https://github.com/usuario/repo',
    demoUrl: 'https://demo.com', // opcional
  },
  // ... mais projetos
]
```

### Configurar SEO

1. **Metadados**: Edite `src/app/layout.tsx` e atualize:
   - `title`
   - `description`
   - `openGraph.url` e `openGraph.images`
   - `twitter.images`
   - `verification.google` (opcional)

2. **Sitemap**: Edite `src/app/sitemap.ts` e atualize `baseUrl`:
   ```typescript
   const baseUrl = 'https://seudominio.com'
   ```

3. **Robots.txt**: Edite `src/app/robots.ts` e atualize o sitemap URL

### Adicionar Imagens

1. Coloque `favicon.ico` em `public/`
2. Coloque `og-image.jpg` (1200x630px) em `public/`
3. Coloque `apple-touch-icon.png` em `public/`
4. Coloque `icon-192x192.png` e `icon-512x512.png` em `public/`

## 🏃 Executando o Projeto

### Desenvolvimento

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000)

### Build de Produção

```bash
npm run build
npm start
```

### Testes

```bash
npm test
```

### Linting e Formatação

```bash
# Verificar erros
npm run lint

# Formatar código
npm run format

# Verificar formatação
npm run format:check
```

## 📦 Deploy na Vercel

### Opção 1: Deploy via CLI

1. Instale a Vercel CLI:

```bash
npm i -g vercel
```

2. Faça login:

```bash
vercel login
```

3. Deploy:

```bash
vercel
```

### Opção 2: Deploy via GitHub

1. Faça push do código para um repositório GitHub
2. Acesse [vercel.com](https://vercel.com)
3. Conecte seu repositório
4. A Vercel detectará automaticamente o Next.js e fará o deploy

### Opção 3: Deploy Manual

1. Acesse [vercel.com](https://vercel.com)
2. Clique em "Add New Project"
3. Importe seu repositório ou faça upload dos arquivos
4. Configure:
   - **Framework Preset**: Next.js
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
5. Clique em "Deploy"

### Configurações Importantes

O arquivo `vercel.json` já está configurado com:
- Região: `gru1` (São Paulo, Brasil)
- Headers de segurança
- Configurações de build otimizadas

## 🎯 Funcionalidades

### Páginas

- **Home** (`/`): Hero section, projetos em destaque, skills
- **Sobre** (`/sobre`): Biografia, experiência, formação
- **Projetos** (`/projetos`): Lista de projetos com filtros por tag e busca
- **Contato** (`/contato`): Formulário de contato e links sociais

### Componentes

- `Header`: Navegação principal com toggle de tema
- `Footer`: Links sociais e copyright
- `Button`: Botão reutilizável com variantes
- `Tag`: Tag para tecnologias
- `ProjectCard`: Card de projeto
- `ThemeProvider`: Provider para tema claro/escuro

### Recursos Extras

- **Baixar CV**: Botão que abre a impressão do navegador (Ctrl+P / Cmd+P)
- **JSON-LD**: Schema.org Person para SEO
- **Filtros**: Filtre projetos por tecnologia na página de projetos
- **Busca**: Busque projetos por nome ou descrição
- **Formulário**: Formulário de contato com validação client-side

## 🧪 Testes

O projeto inclui um teste básico para o componente `ProjectCard`:

```bash
npm test
```

Para executar com UI:

```bash
npm run test:ui
```

## 📝 Estrutura do Projeto

```
.
├── public/                 # Arquivos estáticos
├── src/
│   ├── app/               # App Router (Next.js 14)
│   │   ├── layout.tsx     # Layout principal
│   │   ├── page.tsx       # Página inicial
│   │   ├── sobre/         # Página Sobre
│   │   ├── projetos/      # Página Projetos
│   │   ├── contato/       # Página Contato
│   │   ├── sitemap.ts     # Sitemap dinâmico
│   │   ├── robots.ts      # Robots.txt
│   │   └── globals.css    # Estilos globais
│   ├── components/        # Componentes React
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Button.tsx
│   │   ├── Tag.tsx
│   │   ├── ProjectCard.tsx
│   │   └── ThemeProvider.tsx
│   ├── data/              # Dados estáticos
│   │   ├── personal.ts    # Informações pessoais
│   │   └── projects.ts    # Array de projetos
│   └── test/              # Configuração de testes
├── .eslintrc.json         # Configuração ESLint
├── .prettierrc            # Configuração Prettier
├── next.config.js         # Configuração Next.js
├── tailwind.config.ts     # Configuração Tailwind
├── vercel.json            # Configuração Vercel
└── package.json           # Dependências
```

## 🔧 Tecnologias

- **Next.js 14**: Framework React com App Router
- **TypeScript**: Tipagem estática
- **Tailwind CSS**: Estilização utilitária
- **next-themes**: Gerenciamento de tema
- **Vitest**: Framework de testes
- **React Testing Library**: Testes de componentes
- **ESLint**: Linter
- **Prettier**: Formatador
- **Husky**: Git hooks

## 📄 Licença

Este projeto é de código aberto e está disponível sob a licença MIT.

## 🤝 Contribuindo

Sinta-se à vontade para fazer fork, criar issues ou pull requests!

## 📧 Contato

Para dúvidas ou sugestões, entre em contato através da página de contato do site.

---

**Desenvolvido com ❤️ usando Next.js 14**
