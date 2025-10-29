# MetaPerform Landing Page

Uma landing page moderna, responsiva e atraente para o MetaPerform - a plataforma completa de acompanhamento de fitness e nutrição.

## 📋 Visão Geral

Esta landing page foi desenvolvida com foco em:

- **Design Moderno:** Paleta de cores vibrante e atraente (Verde Esmeralda #00C853 e Laranja #FF6F00)
- **Responsividade:** Totalmente otimizada para desktop, tablet e mobile
- **Performance:** Código limpo e otimizado, sem dependências externas pesadas
- **Conversão:** Estrutura focada em CTAs claros e prova social
- **Acessibilidade:** Semântica HTML correta e contraste adequado

## 🎨 Estrutura da Página

### Seções Principais

1. **Navbar (Navegação):** Menu fixo com logo e links de navegação
2. **Hero Section:** Headline impactante com CTA principal
3. **Trust Section:** Estatísticas de confiança (10K+ usuários, 500+ profissionais, 98% satisfação)
4. **Dual Section:** Duas propostas de valor (Para Usuários e Para Profissionais)
5. **Features Section:** 6 funcionalidades principais em grid responsivo
6. **CTA Final:** Chamada para ação final com gradiente
7. **Footer:** Links, contato e informações da empresa

## 🌗 Versões Disponíveis

Este projeto inclui duas versões da landing page:

1. **index.html** - Versão Light Mode (padrão)

   - Design claro e moderno
   - Paleta de cores vibrante
   - Ideal para uso geral

2. **index_dark.html** - Versão Dark Mode
   - Design escuro inspirado em dashboards de performance
   - Paleta de cores dark com acentos verde/laranja
   - Consulte `DARK_MODE_README.md` para mais detalhes

## 🚀 Como Usar

### Instalação Rápida

1. Copie os arquivos para seu servidor web:

   ```bash
   index.html
   styles.css
   script.js
   ```

2. Acesse a página em seu navegador:
   ```
   http://seu-dominio.com.br
   ```

### Estrutura de Arquivos

```
metaperform_landing/
├── index.html                  # Landing page principal (light mode)
├── index_dark.html             # Landing page dark mode alternativa
├── styles.css                  # Estilos CSS
├── script.js                   # JavaScript interativo
├── README.md                   # Documentação principal
├── DARK_MODE_README.md         # Documentação da versão dark mode
├── RESUMO_EXECUTIVO.md         # Resumo executivo do projeto
├── *.png                       # Imagens/assets do projeto
└── .gitignore                  # Arquivos ignorados pelo Git
```

## 🎯 Customizações Recomendadas

### 1. Cores Personalizadas

Edite as variáveis CSS no início do arquivo `styles.css`:

```css
:root {
  --primary-color: #00c853; /* Cor primária (verde) */
  --secondary-color: #ff6f00; /* Cor secundária (laranja) */
  --dark-text: #212121; /* Texto escuro */
  --light-bg: #f8f8f8; /* Fundo claro */
}
```

### 2. Textos e Conteúdo

Todos os textos estão no arquivo `index.html`. Procure pelas seções comentadas:

```html
<!-- Hero Section -->
<!-- Trust Section -->
<!-- Features Section -->
```

### 3. Links e URLs

Atualize os links do aplicativo:

- Procure por `https://app.metaperform.com.br`
- Substitua pelos links corretos se necessário

### 4. Informações de Contato

No footer, atualize:

```html
<p>
  Email:
  <a href="mailto:seu-email@metaperform.com.br">seu-email@metaperform.com.br</a>
</p>
<p>Telefone: <a href="tel:+5511999999999">+55 (11) 99999-9999</a></p>
```

### 5. Adicionar Imagens

Para substituir os placeholders SVG por imagens reais:

1. Prepare suas imagens (recomendado: PNG ou WebP)
2. Crie uma pasta `images/` no mesmo diretório
3. Substitua o código SVG por tags `<img>`:

```html
<div class="image-placeholder">
  <img src="images/seu-app-screenshot.png" alt="MetaPerform App" />
</div>
```

## 📱 Responsividade

A página é totalmente responsiva com breakpoints em:

- **Desktop:** 1200px+
- **Tablet:** 768px - 1199px
- **Mobile:** Até 767px
- **Pequenos Dispositivos:** Até 480px

## ⚡ Performance

- Sem dependências externas (sem jQuery, Bootstrap, etc.)
- CSS otimizado com variáveis CSS
- JavaScript vanilla com Intersection Observer para animações eficientes
- Tamanho total: ~50KB (HTML + CSS + JS)

## 🔄 Funcionalidades Interativas

### Menu Mobile

O menu se adapta automaticamente em dispositivos móveis com um botão hamburger.

### Animações

- **Scroll Suave:** Links de navegação com scroll suave
- **Fade In:** Elementos aparecem com animação ao entrar na viewport
- **Contadores:** Números na seção de confiança animam ao serem vistos
- **Botão Flutuante:** Botão "Voltar ao Topo" aparece ao rolar

### Navbar Dinâmica

A sombra da navbar aumenta ao rolar a página para melhor contraste.

## 🌐 Compatibilidade

- ✅ Chrome/Edge (últimas 2 versões)
- ✅ Firefox (últimas 2 versões)
- ✅ Safari (últimas 2 versões)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📊 SEO Básico

A página inclui:

- Meta tags essenciais (charset, viewport, description)
- Estrutura semântica HTML
- Headings hierárquicos (H1, H2, H3)
- Textos alt em imagens (quando aplicável)

Para melhorar ainda mais o SEO, considere:

1. Adicionar schema.org markup
2. Criar um sitemap.xml
3. Configurar robots.txt
4. Adicionar Google Analytics

## 🔐 Segurança

- Nenhum formulário de coleta de dados (pode ser adicionado futuramente)
- Links externos abrem em abas novas (considere adicionar `rel="noopener noreferrer"`)
- Sem scripts de terceiros por padrão

## 📈 Próximos Passos

### Funcionalidades Futuras

1. **Formulário de Newsletter:** Captura de emails
2. **Chat ao Vivo:** Integração com Intercom ou similar
3. **Blog/Recursos:** Seção de artigos e guias
4. **Depoimentos Dinâmicos:** Carousel com depoimentos de clientes
5. **Integração com Analytics:** Google Analytics ou Mixpanel

### Melhorias de Design

1. Adicionar imagens/vídeos reais do app
2. Criar ícones customizados
3. Implementar dark mode
4. Adicionar mais animações e micro-interações

## 📞 Suporte

Para dúvidas sobre a implementação ou customização, entre em contato com a equipe de desenvolvimento.

## 📄 Licença

Esta landing page foi desenvolvida especificamente para o MetaPerform. Todos os direitos reservados.

---

**Desenvolvido com ❤️ para o MetaPerform**

Última atualização: Outubro 2025
