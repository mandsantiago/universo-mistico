# 🚀 Guia de Deploy - Universo Místico

Este guia fornece instruções passo a passo para fazer deploy do Universo Místico no GitHub e Vercel.

## 📋 Pré-requisitos

- [ ] Conta no [GitHub](https://github.com)
- [ ] Conta no [Vercel](https://vercel.com)
- [ ] Git instalado localmente
- [ ] Node.js 18+ instalado

## 🐙 Passo 1: Preparar o GitHub

### 1.1 Criar Repositório

1. Acesse [GitHub](https://github.com) e faça login
2. Clique em **"New repository"**
3. Configure:
   - **Repository name**: \`universo-mistico\`
   - **Description**: \`Site místico com astrologia, numerologia e tarô\`
   - **Visibility**: Public (recomendado para Vercel gratuito)
   - **Initialize**: ✅ Add a README file
   - **Add .gitignore**: Node
   - **Choose a license**: MIT License

4. Clique em **"Create repository"**

### 1.2 Clonar e Configurar

\`\`\`bash
# Clone o repositório criado
git clone https://github.com/SEU_USUARIO/universo-mistico.git
cd universo-mistico

# Remova o README padrão (vamos usar o nosso)
rm README.md

# Copie todos os arquivos do projeto
cp -r /caminho/para/site-mistico/* .
cp -r /caminho/para/site-mistico/.* . 2>/dev/null || true

# Adicione todos os arquivos
git add .

# Faça o commit inicial
git commit -m "🌟 Adiciona projeto Universo Místico completo

- Interface React moderna e responsiva
- Cálculos de astrologia ocidental e chinesa  
- Sistema completo de numerologia
- 72 anjos cabalísticos
- Tarô pessoal
- Design místico com cores suaves
- Pronto para deploy no Vercel"

# Envie para o GitHub
git push origin main
\`\`\`

## ⚡ Passo 2: Deploy no Vercel

### 2.1 Conectar Repositório

1. Acesse [vercel.com](https://vercel.com) e faça login
2. Clique em **"New Project"**
3. Na seção **"Import Git Repository"**:
   - Encontre seu repositório \`universo-mistico\`
   - Clique em **"Import"**

### 2.2 Configurar Deploy

O Vercel detectará automaticamente que é um projeto Vite/React. Verifique se as configurações estão corretas:

- **Framework Preset**: \`Vite\`
- **Build Command**: \`pnpm run build\`
- **Output Directory**: \`dist\`
- **Install Command**: \`pnpm install\`

### 2.3 Variáveis de Ambiente (Opcional)

Se necessário, adicione variáveis de ambiente:

1. Na página do projeto no Vercel
2. Vá para **Settings** → **Environment Variables**
3. Adicione:
   - \`VITE_SITE_URL\`: URL do seu site (será fornecida após deploy)

### 2.4 Deploy

1. Clique em **"Deploy"**
2. Aguarde o build (geralmente 1-2 minutos)
3. ✅ **Sucesso!** Seu site estará online

## 🌐 Passo 3: Configurar Domínio (Opcional)

### 3.1 Domínio Vercel Gratuito

Seu site receberá automaticamente um domínio como:
- \`universo-mistico.vercel.app\`
- \`universo-mistico-seu-usuario.vercel.app\`

### 3.2 Domínio Personalizado

1. No painel do Vercel, vá para **Settings** → **Domains**
2. Adicione seu domínio personalizado
3. Configure os DNS conforme instruções do Vercel

## 🔄 Passo 4: Atualizações Automáticas

Agora, sempre que você fizer push para o GitHub, o Vercel fará deploy automaticamente:

\`\`\`bash
# Faça suas alterações
git add .
git commit -m "✨ Adiciona nova funcionalidade"
git push origin main

# O Vercel fará deploy automaticamente!
\`\`\`

## 🛠️ Comandos Úteis

### Desenvolvimento Local
\`\`\`bash
# Instalar dependências
pnpm install

# Servidor de desenvolvimento
pnpm run dev

# Build local
pnpm run build

# Preview do build
pnpm run preview
\`\`\`

### Git Workflow
\`\`\`bash
# Verificar status
git status

# Adicionar arquivos
git add .

# Commit com mensagem
git commit -m "Sua mensagem"

# Enviar para GitHub
git push origin main

# Verificar histórico
git log --oneline
\`\`\`

## 🔍 Verificação de Deploy

### Checklist Pós-Deploy

- [ ] Site carrega corretamente
- [ ] Formulário aceita dados
- [ ] Cálculos funcionam
- [ ] Design responsivo funciona
- [ ] Compartilhamento funciona
- [ ] Performance boa (Lighthouse)

### URLs de Teste

Teste estas funcionalidades no site implantado:

1. **Formulário**: Preencha todos os campos
2. **Cálculos**: Teste com dados conhecidos
3. **Responsivo**: Teste em mobile
4. **Compartilhamento**: Teste o botão de compartilhar

## 🐛 Solução de Problemas

### Build Falha

\`\`\`bash
# Teste o build localmente
pnpm run build

# Verifique erros no console do Vercel
# Geralmente são problemas de dependências ou sintaxe
\`\`\`

### Site Não Carrega

1. Verifique se o build foi bem-sucedido
2. Verifique o console do navegador
3. Teste localmente primeiro

### Funcionalidades Não Funcionam

1. Verifique se todos os arquivos foram commitados
2. Teste localmente
3. Verifique variáveis de ambiente

## 📞 Suporte

- **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)
- **GitHub Docs**: [docs.github.com](https://docs.github.com)
- **Vite Docs**: [vitejs.dev](https://vitejs.dev)

## 🎉 Parabéns!

Seu site místico está agora online e acessível para o mundo todo! 

**Próximos passos sugeridos:**
- Compartilhe o link com amigos
- Monitore analytics (se configurado)
- Considere adicionar novas funcionalidades
- Colete feedback dos usuários

---

**Feito com 💜 para conectar você com sua essência espiritual**

