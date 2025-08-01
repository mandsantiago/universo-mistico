# 🌟 Universo Místico

Um site moderno e responsivo que oferece revelações personalizadas baseadas em astrologia, numerologia e sabedoria espiritual ancestral.

![Universo Místico](https://img.shields.io/badge/Status-Ativo-brightgreen)
![React](https://img.shields.io/badge/React-18-blue)
![Vite](https://img.shields.io/badge/Vite-6.3-purple)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4-cyan)

## ✨ Funcionalidades

### 🔮 Astrologia Ocidental
- **Signo Solar**: Calculado com precisão baseado na data de nascimento
- **Ascendente**: Determinado pela hora e local de nascimento
- **Signo Lunar**: Baseado em cálculos de ciclos lunares

### 🌕 Astrologia Chinesa
- **Animal do Zodíaco**: 12 animais do zodíaco chinês
- **Elemento**: Madeira, Fogo, Terra, Metal ou Água
- **Polaridade**: Yin ou Yang baseado no ano

### 🔢 Numerologia Completa
- **Número do Destino**: Caminho de vida baseado na data de nascimento
- **Número da Alma**: Calculado a partir das vogais do nome
- **Número da Personalidade**: Baseado nas consoantes do nome
- **Número de Expressão**: Valor numerológico do nome completo

### 👼 Anjo da Guarda
- Sistema completo dos **72 anjos cabalísticos**
- Nome, atributos e mensagem personalizada
- Determinação baseada na data de nascimento

### 🃏 Tarô Pessoal
- **Carta de Nascimento**: Arcano maior correspondente
- **Carta da Personalidade**: Aspectos da personalidade

## 🎨 Design

- **Paleta Mística**: Lavanda, azul celeste, branco e dourado suave
- **Tipografia Elegante**: Fontes femininas e espirituais
- **Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Animações Suaves**: Efeitos de flutuação e transições elegantes

## 🚀 Deploy Rápido

### Vercel (Recomendado)

1. **Fork este repositório**
2. **Conecte ao Vercel**:
   - Acesse [vercel.com](https://vercel.com)
   - Clique em "New Project"
   - Importe seu repositório GitHub
   - O Vercel detectará automaticamente as configurações

3. **Deploy automático**: O site será implantado automaticamente!

### Netlify

1. **Fork este repositório**
2. **Conecte ao Netlify**:
   - Acesse [netlify.com](https://netlify.com)
   - Clique em "New site from Git"
   - Conecte seu repositório GitHub
   - Configure:
     - Build command: \`pnpm run build\`
     - Publish directory: \`dist\`

## 💻 Desenvolvimento Local

### Pré-requisitos
- Node.js 18+ 
- pnpm (recomendado) ou npm

### Instalação

\`\`\`bash
# Clone o repositório
git clone https://github.com/seu-usuario/universo-mistico.git
cd universo-mistico

# Instale as dependências
pnpm install

# Inicie o servidor de desenvolvimento
pnpm run dev
\`\`\`

O site estará disponível em \`http://localhost:5173\`

### Scripts Disponíveis

\`\`\`bash
# Desenvolvimento
pnpm run dev

# Build para produção
pnpm run build

# Preview do build
pnpm run preview

# Lint do código
pnpm run lint
\`\`\`

## 🛠️ Tecnologias

- **[React 18](https://reactjs.org/)** - Framework frontend
- **[Vite](https://vitejs.dev/)** - Build tool e dev server
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utilitário
- **[Shadcn/UI](https://ui.shadcn.com/)** - Componentes de interface
- **[Lucide React](https://lucide.dev/)** - Ícones modernos

## 📁 Estrutura do Projeto

\`\`\`
src/
├── components/ui/          # Componentes de interface
├── lib/
│   └── calculosMisticos.js # Lógica de todos os cálculos
├── App.jsx                 # Componente principal
├── App.css                 # Estilos personalizados
└── main.jsx               # Ponto de entrada
\`\`\`

## 🔧 Configuração

### Variáveis de Ambiente

Copie \`.env.example\` para \`.env.local\` e configure:

\`\`\`env
VITE_SITE_URL=https://seu-site.vercel.app
\`\`\`

### Personalização

#### Cores
Edite \`src/App.css\` para personalizar a paleta de cores:

\`\`\`css
:root {
  --primary: 147 51 234;      /* Lavanda */
  --secondary: 56 189 248;    /* Azul celeste */
  --accent: 251 191 36;       /* Dourado */
}
\`\`\`

#### Cálculos
Todos os algoritmos estão em \`src/lib/calculosMisticos.js\` e podem ser facilmente modificados.

## 🌐 Deploy em Produção

### Vercel
O arquivo \`vercel.json\` já está configurado. Apenas conecte seu repositório.

### Outras Plataformas
- **Netlify**: Use as configurações do build
- **GitHub Pages**: Configure GitHub Actions
- **Firebase Hosting**: Configure \`firebase.json\`

## 🔮 Funcionalidades Futuras

O projeto foi estruturado para expansões:

- [ ] **Mapa Astral Completo** - Integração com APIs astronômicas
- [ ] **Horóscopo do Dia** - Previsões diárias personalizadas  
- [ ] **Design Humano** - Sistema adicional de análise
- [ ] **Autenticação** - Login e histórico de usuários
- [ ] **API Backend** - Armazenamento de consultas

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (\`git checkout -b feature/AmazingFeature\`)
3. Commit suas mudanças (\`git commit -m 'Add some AmazingFeature'\`)
4. Push para a branch (\`git push origin feature/AmazingFeature\`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para detalhes.

## 🙏 Agradecimentos

- Inspirado na sabedoria ancestral da astrologia e numerologia
- Design baseado em princípios de espiritualidade e harmonia
- Comunidade React e Tailwind CSS

---

**Feito com 💜 para conectar você com sua essência espiritual**

[🌟 Acesse o Site](https://seu-site.vercel.app) | [📚 Documentação](docs/) | [🐛 Reportar Bug](issues/)

