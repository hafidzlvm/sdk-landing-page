# Docker Setup untuk Solusi Digital Khatulistiwa

## ⚡ Performance Features

- **Bun Runtime**: Menggunakan Bun untuk build dan runtime yang 2-3x lebih cepat daripada Node.js/npm
- **Multi-stage Build**: Optimasi ukuran image dengan pemisahan dependency dan production layer
- **Standalone Output**: Next.js standalone mode untuk minimal dependencies

## 🐳 Quick Start

### 1. Build dan Run dengan Docker Compose
```bash
# Build dan jalankan container
docker-compose up -d --build

# Lihat logs
docker-compose logs -f web

# Stop container
docker-compose down

# Restart container
docker-compose restart
```

### 2. Build Manual
```bash
# Build image
docker build -t solusi-digital-khatulistiwa .

# Run container
docker run -d \
  --name sdk-web \
  --restart always \
  -p 3000:3000 \
  solusi-digital-khatulistiwa
```

## 📊 Monitoring

### Health Check
```bash
# Manual health check
curl http://localhost:3000/api/health

# Check container health status
docker inspect --format='{{.State.Health.Status}}' solusi-digital-khatulistiwa
```

### Logs
```bash
# View real-time logs
docker-compose logs -f

# View last 100 lines
docker-compose logs --tail=100

# View logs for specific service
docker-compose logs -f web
```

### Container Status
```bash
# Check if container is running
docker-compose ps

# Check resource usage
docker stats solusi-digital-khatulistiwa
```

## 🔧 Configuration

### Restart Policies
Container dikonfigurasi dengan `restart: always` yang artinya:
- ✅ Auto-restart jika crash
- ✅ Start otomatis saat server reboot
- ✅ Restart otomatis jika health check fail

### Health Checks
- **Interval**: 30 detik
- **Timeout**: 10 detik
- **Retries**: 3 kali
- **Start Period**: 40 detik (waktu tunggu awal)

### Resource Limits
- **CPU Limit**: 1.0 core
- **Memory Limit**: 1GB
- **CPU Reserved**: 0.5 core
- **Memory Reserved**: 512MB

## 🚀 Production Deployment

### 1. Setup di Server
```bash
# Clone repository
git clone <your-repo-url>
cd ezrdhal

# Build dan jalankan
docker-compose up -d --build
```

### 2. Setup dengan Nginx Reverse Proxy (Optional)
```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

### 3. Setup Automatic Updates
```bash
# Tambahkan cron job untuk auto-pull dan restart
# crontab -e
0 2 * * * cd /path/to/ezrdhal && git pull && docker-compose up -d --build
```

## 🛠️ Troubleshooting

### Container tidak start
```bash
# Check logs
docker-compose logs web

# Rebuild dari scratch
docker-compose down
docker-compose build --no-cache
docker-compose up -d
```

### Memory issues
```bash
# Increase memory limit di docker-compose.yml
deploy:
  resources:
    limits:
      memory: 2G
```

### Permission issues
```bash
# Reset ownership
sudo chown -R $USER:$USER .
```

## 📝 Environment Variables

Tambahkan file `.env` untuk konfigurasi custom:
```env
NODE_ENV=production
PORT=3000
NEXT_TELEMETRY_DISABLED=1
```

## 🔒 Security Best Practices

✅ Non-root user di container
✅ Multi-stage build untuk ukuran minimal
✅ Health checks enabled
✅ Resource limits configured
✅ Logging dengan rotation
✅ Network isolation

## 📈 Performance Tips

1. **Enable CDN**: Gunakan CDN untuk static assets
2. **Database Connection Pooling**: Jika menggunakan database
3. **Redis Caching**: Untuk session dan cache
4. **Load Balancing**: Jika traffic tinggi, gunakan multiple containers

## 🎯 Next Steps

1. Setup domain dan SSL certificate
2. Configure backup strategy
3. Setup monitoring (Prometheus/Grafana)
4. Configure CI/CD pipeline
5. Setup database (jika diperlukan)
