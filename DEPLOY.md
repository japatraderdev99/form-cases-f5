# 🚀 Guia de Deploy - Formulário F5

## Opções de Deploy

### 1. 🟢 Vercel (Recomendado)

**Vantagens**: Mais rápido, integração nativa com Next.js, CDN global

#### Deploy Automático (GitHub)
1. Faça push do código para o GitHub
2. Acesse [vercel.com](https://vercel.com)
3. Conecte sua conta GitHub
4. Importe o repositório
5. Deploy automático em ~2 minutos

#### Deploy Manual
```bash
# Instalar Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy para produção
vercel --prod
```

### 2. 🟡 Netlify

**Vantagens**: Interface amigável, deploy contínuo, formulários nativos

#### Deploy via GitHub
1. Acesse [netlify.com](https://netlify.com)
2. "New site from Git"
3. Conecte GitHub e selecione o repositório
4. Configurações:
   - Build command: `npm run build`
   - Publish directory: `.next`
5. Deploy!

#### Deploy via CLI
```bash
# Instalar Netlify CLI
npm i -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy

# Deploy para produção
netlify deploy --prod
```

### 3. 🔵 Deploy Manual (Qualquer Host)

#### Build Estático
```bash
# Instalar dependências
npm install

# Build
npm run build

# A pasta .next contém os arquivos para deploy
```

#### Hospedagem Sugerida
- **GitHub Pages**: Gratuito, fácil setup
- **Firebase Hosting**: Google, rápido
- **AWS S3 + CloudFront**: Escalável
- **DigitalOcean App Platform**: Simples

## 🔧 Configurações Importantes

### Variáveis de Ambiente
```bash
# .env.local
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/SEU_ID_AQUI
```

### Domínio Personalizado
1. Configure DNS apontando para o servidor
2. Adicione certificado SSL (HTTPS)
3. Configure redirecionamentos se necessário

## 📊 Monitoramento

### Vercel Analytics
- Acesse dashboard.vercel.com
- Métricas de performance
- Analytics de uso

### Google Analytics
```javascript
// Adicionar em _app.tsx
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
```

## 🔒 Segurança

### Formspree
- Configure rate limiting
- Use reCAPTCHA se necessário
- Monitore submissions

### Headers de Segurança
```javascript
// next.config.js
const securityHeaders = [
  {
    key: 'X-Frame-Options',
    value: 'DENY'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  }
];
```

## 🚨 Troubleshooting

### Build Falha
```bash
# Limpar cache
rm -rf .next node_modules
npm install
npm run build
```

### Formspree não funciona
1. Verifique endpoint correto
2. Teste com Postman/curl
3. Verifique CORS settings

### Performance lenta
1. Otimize imagens
2. Use CDN
3. Configure cache headers

## 📈 Otimizações

### Performance
- ✅ Next.js 15 com Turbopack
- ✅ Build otimizado
- ✅ Imagens otimizadas
- ✅ Bundle splitting

### SEO
- ✅ Meta tags configuradas
- ✅ Sitemap automático
- ✅ Schema markup (se necessário)

## 🎯 Próximos Passos

1. **Deploy inicial** ✅
2. **Configurar domínio** 
3. **Testar formulário**
4. **Configurar analytics**
5. **Monitorar performance**

---

**Formulário pronto para produção! 🎉**



