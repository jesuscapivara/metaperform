# Landing Page MetaPerform - Dark Mode Edition

## 📱 Visão Geral

Landing page completamente redesenhada com estética **dark mode** inspirada no slide 3 "A Solução: MetaPerform 360º" da apresentação de investidores.

## 🎨 Design e Estética

### Paleta de Cores
- **Fundo Principal**: #0F0F0F (Dark)
- **Fundo Secundário**: #0A0A0A (Darker)
- **Cards**: #1A1A1A
- **Texto Primário**: #FFFFFF
- **Texto Secundário**: #B0B0B0
- **Acentos**: 
  - Verde Lima: #00D084
  - Laranja: #FF6B35
- **Borders**: #2A2A2A

### Características Visuais
✅ **Split Layout** - Hero section com conteúdo esquerda e imagem direita  
✅ **Pilares com Ícones** - 4 pilares principais com ícones e descrições  
✅ **Borders Coloridas** - Sharp corners, sem rounded corners  
✅ **Gradientes** - Uso de gradientes verde-laranja para acentos  
✅ **High Contrast** - Excelente legibilidade em dark mode  
✅ **Animações Suaves** - Fade-in ao scroll, hover effects  

## 📁 Estrutura

```
metaperform_landing/
├── index_dark.html          # Landing page dark mode (NOVO)
├── index.html               # Landing page original (light mode)
├── styles.css               # Estilos originais
├── script.js                # Scripts originais
├── DARK_MODE_README.md      # Este arquivo
└── README.md                # Documentação original
```

## 🚀 Como Usar

### Opção 1: Substituir a Landing Page Atual
```bash
cp /home/ubuntu/metaperform_landing/index_dark.html /home/ubuntu/metaperform_landing/index.html
```

### Opção 2: Manter Ambas as Versões
- **Light Mode**: `index.html`
- **Dark Mode**: `index_dark.html`

### Opção 3: Deploy no Servidor
1. Baixe `index_dark.html`
2. Renomeie para `index.html`
3. Faça upload para `metaperform.com.br`
4. Configure o servidor para servir o arquivo

## 📋 Seções da Landing Page

### 1. **Navbar Fixa**
- Logo com gradiente verde-laranja
- Menu de navegação com links
- Botão "Acessar App" com gradiente
- Responsivo com hamburger menu em mobile

### 2. **Hero Section**
- Headline impactante com accent color
- Subtitle descritivo
- 2 CTAs (Começar Agora, Saiba Mais)
- Imagem do lado direito com borders coloridas
- Fundo com gradiente radial sutil

### 3. **Pilares Section**
- 4 pilares principais do MetaPerform
- Layout 2x2 com cards
- Ícones com cores alternadas (verde/laranja)
- Borders coloridas à esquerda
- Hover effect com translateX

### 4. **Features Section**
- 6 funcionalidades em grid 3 colunas
- Cards com borders top coloridas
- Números grandes e destacados
- Descrições concisas

### 5. **Stats Section**
- 4 estatísticas principais (10K+, 500+, 98%, 4.5)
- Números com gradiente verde-laranja
- Layout responsivo

### 6. **CTA Section**
- Chamada para ação final
- Fundo com gradiente sutil
- Botão principal destacado

### 7. **Footer**
- 4 colunas de links
- Seções: Produto, Empresa, Recursos, Legal
- Copyright e tagline

## 🎯 Customizações Fáceis

### Mudar Cores
Edite as variáveis CSS no `:root`:
```css
:root {
    --accent-green: #00D084;
    --accent-orange: #FF6B35;
    /* ... outras cores ... */
}
```

### Atualizar Textos
Todos os textos estão no HTML, basta procurar e substituir.

### Trocar Imagens
Procure por `<img>` tags e substitua os `src` pelos seus URLs.

### Adicionar Seções
Copie a estrutura de uma seção existente e adapte.

## 📱 Responsividade

A landing page é 100% responsiva:
- **Desktop**: Layout completo com todas as seções
- **Tablet**: Grid ajustado para 2 colunas
- **Mobile**: Layout vertical com 1 coluna

## ⚡ Performance

- **Zero dependências externas** (exceto Google Fonts)
- **CSS otimizado** - ~15KB
- **JavaScript minimalista** - ~3KB
- **Carregamento rápido** - ~50KB total
- **Intersection Observer** para animações eficientes

## 🔧 Recursos Inclusos

✅ Navbar fixa com efeito de scroll  
✅ Smooth scroll para âncoras  
✅ Animações fade-in ao entrar na viewport  
✅ Botão "Voltar ao Topo" flutuante  
✅ Hover effects em cards e botões  
✅ Menu hamburger responsivo  
✅ Gradientes dinâmicos  
✅ Suporte a imagens otimizadas  

## 🎬 Próximos Passos

1. **Customizar Informações**
   - Atualize textos, emails e telefones
   - Substitua imagens pelos seus assets
   - Configure links para suas páginas

2. **Deploy**
   - Faça upload para seu servidor
   - Configure DNS para metaperform.com.br
   - Teste em diferentes dispositivos

3. **Otimização**
   - Adicione Google Analytics
   - Configure SEO meta tags
   - Implemente formulários de contato

4. **Expansão**
   - Adicione mais seções conforme necessário
   - Integre com seu backend
   - Configure sistema de assinaturas

## 📞 Suporte

Para dúvidas ou customizações adicionais, consulte a documentação original em `README.md`.

---

**Versão**: 1.0  
**Data**: Outubro 2025  
**Estética**: Athletic Performance Dashboard Dark Mode
