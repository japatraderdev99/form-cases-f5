# 📋 Formulário de Coleta de Cases - F5 Estratégia

Formulário completo para coleta de cases de sucesso da F5 Estratégia, desenvolvido com Next.js 15, React Hook Form, Zod e Tailwind CSS.

## ✨ Funcionalidades

- **7 Seções Completas**: Identificação, Cenário Anterior, Performance, Estratégia CHAVI, Resultados, Depoimentos e Contexto
- **Validação Robusta**: Validação completa com Zod e React Hook Form
- **Cálculos Automáticos**: ROI, Ticket Médio e Taxa de Comparecimento calculados automaticamente
- **Interface Responsiva**: Design moderno e responsivo com Tailwind CSS
- **Integração Formspree**: Envio automático de dados para Formspree
- **UX Otimizada**: Indicadores visuais, validação em tempo real e feedback imediato

## 🚀 Deploy

### Opção 1: Vercel (Recomendado)

1. **Conectar ao Vercel**:
   ```bash
   npm i -g vercel
   vercel login
   vercel
   ```

2. **Configurar variáveis de ambiente** (se necessário):
   - `NEXT_PUBLIC_FORMSPREE_ENDPOINT`: URL do Formspree

### Opção 2: Netlify

1. **Build do projeto**:
   ```bash
   npm run build
   ```

2. **Deploy manual**:
   - Acesse [netlify.com](https://netlify.com)
   - Arraste a pasta `out` (após `npm run build`)

### Opção 3: Deploy Manual

1. **Build estático**:
   ```bash
   npm run build
   npm run export
   ```

2. **Servir arquivos**:
   - Faça upload da pasta `out` para qualquer servidor web
   - Configure redirecionamento para `index.html` em rotas SPA

## 🛠️ Desenvolvimento Local

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Executar build de produção
npm start
```

## 📋 Estrutura do Formulário

### Seção 1: Identificação do Cliente
- Nome da clínica
- Cidade/Estado
- Tipo de clínica
- Perfil do cliente
- Tempo de parceria

### Seção 2: Cenário Antes da F5
- Principais dores/desafios
- Faturamento anterior
- Origem do cliente
- Experiência com marketing digital

### Seção 3: Dados de Performance
- Período de análise
- Dados mensais (investimento, leads, conversões)
- **Cálculos automáticos**: ROI, Ticket Médio, Taxa de Comparecimento

### Seção 4: Estratégia CHAVI
- **C**ampanha
- **H**umanização
- **A**núncios Pagos
- **V**endas e Monitoramento
- **I**nteligência de Dados

### Seção 5: Transformação e Resultados
- Resumo financeiro
- Evolução de métricas
- Resultados surpreendentes
- Marcos importantes

### Seção 6: Depoimento e Storytelling
- Depoimentos do cliente
- Momentos de virada
- Medos e superações

### Seção 7: Contexto Adicional
- Particularidades do mercado
- Desafios específicos
- Anexos e autorização de publicação

## 🔧 Configuração do Formspree

1. Acesse [formspree.io](https://formspree.io)
2. Crie uma nova conta ou faça login
3. Crie um novo formulário
4. Copie o endpoint e substitua em `case-form.tsx`:
   ```typescript
   const response = await fetch("SEU_ENDPOINT_AQUI", {
   ```

## 📱 Responsividade

O formulário é totalmente responsivo e funciona perfeitamente em:
- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)

## 🎨 Design System

- **Cores**: Paleta roxa da F5 Estratégia
- **Tipografia**: Roboto (Google Fonts)
- **Componentes**: Radix UI + Tailwind CSS
- **Ícones**: Lucide React

## 📊 Métricas Calculadas Automaticamente

- **Ticket Médio**: Faturamento ÷ Fechamentos
- **Taxa de Comparecimento**: (Comparecimentos ÷ Agendamentos) × 100
- **ROI**: ((Faturamento - Investimento) ÷ Investimento) × 100

## 🔒 Validação

- Validação em tempo real com Zod
- Mensagens de erro específicas
- Campos obrigatórios marcados
- Validação de tipos de dados

## 📈 Performance

- Build otimizado com Next.js 15
- Turbopack para desenvolvimento rápido
- Bundle size otimizado (~200KB)
- Carregamento estático para máxima velocidade

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

## 📄 Licença

Este projeto é propriedade da F5 Estratégia e é destinado ao uso interno.

---

**Desenvolvido com ❤️ para F5 Estratégia**