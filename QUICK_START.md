# 🚀 Guia Rápido de Início

## 1. Instalação Rápida

```bash
# Instalar dependências
npm install

# Configurar Git Hooks (Husky)
npm run prepare

# Executar em desenvolvimento
npm run dev
```

## 2. Personalização Rápida

### Passo 1: Editar Informações Pessoais

Abra `src/data/personal.ts` e substitua:

- `[Seu Nome]` → Seu nome completo
- `[link]` → Seus links do GitHub e LinkedIn
- `[email]` → Seu email
- `[Sua bio...]` → Sua biografia

### Passo 2: Adicionar Seus Projetos

Abra `src/data/projects.ts` e edite o array `projects`:

```typescript
{
  id: '1',
  name: 'Nome do Projeto',
  description: 'Descrição...',
  tags: ['Node.js', 'TypeScript'],
  repoUrl: 'https://github.com/usuario/repo',
  demoUrl: 'https://demo.com', // opcional
}
```

### Passo 3: Configurar SEO

1. Edite `src/app/layout.tsx`:
   - Substitua `[Seu Nome]` no título
   - Atualize `openGraph.url` com seu domínio
   - Adicione `verification.google` se tiver Google Search Console

2. Edite `src/app/sitemap.ts`:
   - Substitua `https://seudominio.com` pelo seu domínio

3. Edite `src/app/robots.ts`:
   - Substitua a URL do sitemap

### Passo 4: Adicionar Imagens (Opcional)

Coloque na pasta `public/`:
- `favicon.ico` (16x16 ou 32x32)
- `og-image.jpg` (1200x630px) - Para compartilhamento social
- `apple-touch-icon.png` (180x180px)
- `icon-192x192.png` e `icon-512x512.png` - Para PWA

## 3. Deploy na Vercel

### Opção Mais Rápida (GitHub)

1. Crie um repositório no GitHub
2. Faça push do código:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/seu-usuario/seu-repo.git
   git push -u origin main
   ```
3. Acesse [vercel.com](https://vercel.com)
4. Importe o repositório
5. Deploy automático! 🎉

### Opção CLI

```bash
npm i -g vercel
vercel login
vercel
```

## 4. Comandos Úteis

```bash
# Desenvolvimento
npm run dev

# Build de produção
npm run build

# Executar produção localmente
npm start

# Testes
npm test

# Linting
npm run lint

# Formatação
npm run format
```

## 5. Checklist Antes do Deploy

- [ ] Substituiu todos os placeholders `[Seu Nome]`, `[link]`, etc.
- [ ] Adicionou seus projetos reais
- [ ] Configurou URLs do sitemap e robots.txt
- [ ] Adicionou imagens (favicon, og-image)
- [ ] Testou localmente (`npm run build`)
- [ ] Verificou que não há erros (`npm run lint`)

## 6. Próximos Passos

- Adicione mais projetos conforme desenvolve
- Atualize suas skills em `src/data/personal.ts`
- Configure Google Analytics (opcional)
- Adicione mais idiomas em `src/lib/i18n.ts` (opcional)

---

**Pronto! Seu portfólio está no ar! 🚀**
