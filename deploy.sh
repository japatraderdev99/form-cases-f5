#!/bin/bash

echo "🚀 Iniciando deploy do Formulário F5..."

# Verificar se o Node.js está instalado
if ! command -v node &> /dev/null; then
    echo "❌ Node.js não encontrado. Instale o Node.js primeiro."
    exit 1
fi

# Verificar se o npm está instalado
if ! command -v npm &> /dev/null; then
    echo "❌ npm não encontrado. Instale o npm primeiro."
    exit 1
fi

# Instalar dependências
echo "📦 Instalando dependências..."
npm install

# Executar build
echo "🔨 Executando build..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build concluído com sucesso!"
    
    # Verificar se o Vercel CLI está instalado
    if command -v vercel &> /dev/null; then
        echo "🚀 Fazendo deploy no Vercel..."
        vercel --prod
    else
        echo "⚠️  Vercel CLI não encontrado."
        echo "📋 Para fazer deploy manual:"
        echo "   1. Acesse https://vercel.com"
        echo "   2. Conecte seu repositório GitHub"
        echo "   3. Configure as variáveis de ambiente se necessário"
        echo "   4. Deploy automático será feito a cada push"
    fi
else
    echo "❌ Erro no build. Verifique os logs acima."
    exit 1
fi

echo "🎉 Deploy concluído!"





