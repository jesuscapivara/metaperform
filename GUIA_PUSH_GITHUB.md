# 🚀 Guia de Push para GitHub

## Passos para Enviar o Projeto para um Novo Repositório no GitHub

### 1. Criar um Novo Repositório no GitHub

1. Acesse [GitHub.com](https://github.com) e faça login
2. Clique no botão **"New"** ou **"+"** no canto superior direito
3. Preencha:
   - **Repository name**: `metaperform-landing-page` (ou outro nome de sua escolha)
   - **Description**: "Landing page moderna e responsiva para MetaPerform"
   - **Visibility**: Escolha Public ou Private
   - **NÃO marque** "Initialize with README" (já temos um README)
4. Clique em **"Create repository"**

### 2. Conectar o Repositório Local ao GitHub

Após criar o repositório no GitHub, você verá instruções. Execute estes comandos no terminal:

```bash
# Adicionar o repositório remoto (substitua SEU-USUARIO pelo seu username do GitHub)
git remote add origin https://github.com/SEU-USUARIO/metaperform-landing-page.git

# Verificar se foi adicionado corretamente
git remote -v
```

### 3. Renomear a Branch (se necessário)

```bash
# Renomear branch master para main (padrão atual do GitHub)
git branch -M main
```

### 4. Fazer o Push

```bash
# Enviar o código para o GitHub
git push -u origin main
```

Se solicitado, faça login com suas credenciais do GitHub.

### 5. Verificar no GitHub

Acesse seu repositório no GitHub e verifique se todos os arquivos foram enviados corretamente.

---

## 📝 Estrutura do Projeto Enviado

```
metaperform-landing-page/
├── .gitignore              # Arquivos ignorados pelo Git
├── index.html              # Landing page principal (light mode)
├── index_dark.html         # Landing page dark mode
├── styles.css              # Estilos CSS
├── script.js               # JavaScript interativo
├── README.md               # Documentação principal
├── DARK_MODE_README.md     # Documentação dark mode
├── RESUMO_EXECUTIVO.md     # Resumo executivo
└── *.png                   # Imagens/assets
```

---

## 🔄 Comandos Úteis para Futuras Atualizações

```bash
# Ver status das alterações
git status

# Adicionar arquivos modificados
git add .

# Fazer commit
git commit -m "Descrição das alterações"

# Enviar para o GitHub
git push
```

---

## ⚠️ Problemas Comuns

### Erro: "remote origin already exists"

```bash
# Remover o remote existente
git remote remove origin

# Adicionar novamente
git remote add origin https://github.com/SEU-USUARIO/metaperform-landing-page.git
```

### Erro de autenticação

Se você receber erro de autenticação, considere usar:

- **Personal Access Token** (recomendado) ou
- **GitHub CLI** (`gh auth login`)

---

## ✅ Checklist Pré-Push

- [x] Arquivo `.gitignore` criado
- [x] README.md atualizado com documentação completa
- [x] Código validado (sem erros de lint)
- [x] Todos os arquivos importantes adicionados
- [x] Commit inicial realizado
- [ ] Repositório criado no GitHub
- [ ] Remote origin configurado
- [ ] Push realizado com sucesso

---

**Pronto para fazer o push! 🚀**
