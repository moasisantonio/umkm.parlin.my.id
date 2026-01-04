#!/bin/bash
# File: deploy.sh

echo "🚀 Starting NeuraUMKM Deployment..."

# 1. Navigate to server directory
cd /home/u326423063/umkm.parlin.my.id/server

# 2. Install dependencies
echo "📦 Installing dependencies..."
npm install --production

# 3. Setup environment
echo "🔧 Setting up environment..."
cat > .env << EOF
NODE_ENV=production
PORT=3000
FRONTEND_URL=https://umkm.parlin.my.id
DB_HOST=localhost
DB_USER=u326423063_umkm
DB_PASSWORD=M4ntonio1985@
DB_NAME=u326423063_umkm
DB_PORT=3306
EOF

# 4. Initialize database
echo "🗄️ Initializing database..."
node scripts/init-db.js

# 5. Start application with PM2
echo "🚀 Starting application..."
pm2 delete neuraumkm-api 2>/dev/null || true
pm2 start app.js --name neuraumkm-api --watch

# 6. Save PM2 configuration
pm2 save
pm2 startup

echo "✅ Deployment completed!"
echo "📊 Check logs: pm2 logs neuraumkm-api"
echo "🏥 Health check: https://umkm.parlin.my.id/api/health"