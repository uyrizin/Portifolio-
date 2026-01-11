# 🔧 Solução de Erros Comuns

## Erro: EPERM - operation not permitted na pasta .next

Este erro ocorre quando a pasta `.next` está bloqueada ou em uso. Siga estes passos:

### Solução 1: Fechar processos e deletar manualmente

1. Feche o VS Code/Cursor e qualquer terminal que esteja rodando `npm run dev`
2. Abra o Explorador de Arquivos do Windows
3. Navegue até `D:\Nova pasta`
4. Delete a pasta `.next` manualmente (se existir)
5. Tente o build novamente: `npm run build`

### Solução 2: Usar PowerShell como Administrador

1. Feche todos os processos relacionados
2. Abra PowerShell como Administrador
3. Execute:
   ```powershell
   cd "D:\Nova pasta"
   Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue
   npm run build
   ```

### Solução 3: Reiniciar e tentar novamente

1. Reinicie o computador
2. Abra o projeto novamente
3. Execute: `npm run build`

## Erro: metadata usando valores dinâmicos

**✅ JÁ CORRIGIDO!** O problema na página `sobre/page.tsx` foi corrigido. O `metadata` agora usa valores estáticos.

## Erro: Husky - not a git repository

Este não é um erro crítico. Se você não estiver usando Git, pode ignorar. Para resolver:

```bash
git init
git add .
git commit -m "Initial commit"
npm run prepare
```

## Verificar se o build funciona

Após resolver os problemas acima, teste:

```bash
# Limpar cache
npm run build

# Se funcionar, teste em desenvolvimento
npm run dev
```

## Se ainda houver problemas

1. Verifique se todas as dependências estão instaladas:
   ```bash
   npm install
   ```

2. Verifique erros de TypeScript:
   ```bash
   npx tsc --noEmit
   ```

3. Verifique erros de lint:
   ```bash
   npm run lint
   ```

4. Se nada funcionar, delete `node_modules` e `.next` e reinstale:
   ```bash
   Remove-Item -Recurse -Force node_modules, .next
   npm install
   npm run build
   ```
