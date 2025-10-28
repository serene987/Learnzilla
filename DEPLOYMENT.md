# 🚀 Deployment Guide

## Overview

This guide covers deploying the Rishabh Jewellers Billing System to production.

## 📋 Pre-Deployment Checklist

- [ ] All features tested locally
- [ ] Database schema finalized
- [ ] Environment variables documented
- [ ] Security review completed
- [ ] Performance optimization done
- [ ] Documentation updated
- [ ] Backup strategy in place

## 🌐 Deployment Options

### Option 1: Vercel (Frontend) + Render (Backend) + PlanetScale (Database)

**Best for:** Quick deployment, automatic scaling, free tier available

#### Step 1: Deploy Database (PlanetScale)

1. Create account at [PlanetScale](https://planetscale.com)
2. Create new database:
   ```bash
   pscale database create rishabh-jewellers
   ```
3. Create branch:
   ```bash
   pscale branch create rishabh-jewellers main
   ```
4. Connect and import schema:
   ```bash
   pscale shell rishabh-jewellers main
   ```
   Then paste contents of `backend/database.sql`

5. Get connection string:
   ```bash
   pscale password create rishabh-jewellers main production
   ```
   Save the connection details.

#### Step 2: Deploy Backend (Render)

1. Push code to GitHub
2. Go to [Render](https://render.com)
3. Click "New +" → "Web Service"
4. Connect your repository
5. Configure:
   - **Name:** rishabh-jewellers-api
   - **Root Directory:** backend
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
6. Add environment variables:
   ```
   DB_HOST=<planetscale-host>
   DB_USER=<planetscale-user>
   DB_PASSWORD=<planetscale-password>
   DB_NAME=rishabh_jewellers
   DB_PORT=3306
   PORT=3001
   FRONTEND_URL=https://your-frontend-url.vercel.app
   NODE_ENV=production
   ```
7. Click "Create Web Service"
8. Wait for deployment
9. Note your backend URL: `https://rishabh-jewellers-api.onrender.com`

#### Step 3: Deploy Frontend (Vercel)

1. Push code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click "New Project"
4. Import your repository
5. Configure:
   - **Framework Preset:** Vite
   - **Root Directory:** frontend
   - **Build Command:** `npm run build`
   - **Output Directory:** dist
6. Add environment variable:
   ```
   VITE_API_URL=https://rishabh-jewellers-api.onrender.com/api
   ```
7. Click "Deploy"
8. Your app will be live at: `https://your-app.vercel.app`

### Option 2: Railway (Full Stack)

**Best for:** Simplified deployment, single platform

1. Create account at [Railway](https://railway.app)
2. Create new project
3. Add MySQL database:
   - Click "New" → "Database" → "MySQL"
   - Note connection details
4. Add backend service:
   - Click "New" → "GitHub Repo"
   - Select your repository
   - Set root directory: `backend`
   - Add environment variables
5. Add frontend service:
   - Click "New" → "GitHub Repo"
   - Select your repository
   - Set root directory: `frontend`
   - Add environment variables
6. Configure domains for both services

### Option 3: AWS (Enterprise)

**Best for:** Full control, enterprise requirements

#### Components:
- **Frontend:** S3 + CloudFront
- **Backend:** EC2 or ECS
- **Database:** RDS MySQL

#### Steps:

1. **Database (RDS):**
   ```bash
   # Create RDS MySQL instance
   aws rds create-db-instance \
     --db-instance-identifier rishabh-jewellers-db \
     --db-instance-class db.t3.micro \
     --engine mysql \
     --master-username admin \
     --master-user-password <password> \
     --allocated-storage 20
   ```

2. **Backend (EC2):**
   ```bash
   # Launch EC2 instance
   # SSH into instance
   ssh -i key.pem ubuntu@<ec2-ip>
   
   # Install Node.js
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   
   # Clone and setup
   git clone <your-repo>
   cd backend
   npm install
   
   # Setup PM2
   sudo npm install -g pm2
   pm2 start index.js
   pm2 startup
   pm2 save
   ```

3. **Frontend (S3 + CloudFront):**
   ```bash
   # Build frontend
   cd frontend
   npm run build
   
   # Create S3 bucket
   aws s3 mb s3://rishabh-jewellers-frontend
   
   # Upload build
   aws s3 sync dist/ s3://rishabh-jewellers-frontend
   
   # Configure CloudFront distribution
   aws cloudfront create-distribution \
     --origin-domain-name rishabh-jewellers-frontend.s3.amazonaws.com
   ```

## 🔐 Environment Variables

### Backend (.env)
```env
# Database
DB_HOST=your-db-host
DB_USER=your-db-user
DB_PASSWORD=your-db-password
DB_NAME=rishabh_jewellers
DB_PORT=3306

# Server
PORT=3001
NODE_ENV=production

# CORS
FRONTEND_URL=https://your-frontend-url.com
```

### Frontend (.env)
```env
# API
VITE_API_URL=https://your-backend-url.com/api
```

## 🔒 Security Hardening

### 1. Enable HTTPS
- Use SSL certificates (Let's Encrypt)
- Force HTTPS redirect
- Set secure headers

### 2. Database Security
```sql
-- Create limited user
CREATE USER 'app_user'@'%' IDENTIFIED BY 'strong_password';
GRANT SELECT, INSERT, UPDATE ON rishabh_jewellers.* TO 'app_user'@'%';
FLUSH PRIVILEGES;
```

### 3. Backend Security
```javascript
// Add to backend/index.js
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';

app.use(helmet());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use('/api/', limiter);
```

### 4. Environment Variables
- Never commit .env files
- Use platform-specific secret management
- Rotate credentials regularly

## 📊 Monitoring

### 1. Application Monitoring
- Use PM2 for process management
- Set up error logging (Sentry)
- Monitor API response times

### 2. Database Monitoring
- Set up slow query log
- Monitor connection pool
- Regular backups

### 3. Uptime Monitoring
- Use UptimeRobot or Pingdom
- Set up alerts
- Monitor from multiple locations

## 🔄 CI/CD Pipeline

### GitHub Actions Example

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [ main ]

jobs:
  deploy-backend:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy to Render
        run: |
          curl -X POST ${{ secrets.RENDER_DEPLOY_HOOK }}

  deploy-frontend:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy to Vercel
        run: |
          npm install -g vercel
          cd frontend
          vercel --prod --token ${{ secrets.VERCEL_TOKEN }}
```

## 🗄️ Database Backup

### Automated Backup Script

```bash
#!/bin/bash
# backup.sh

DATE=$(date +%Y%m%d_%H%M%S)
BACKUP_DIR="/backups"
DB_NAME="rishabh_jewellers"

mysqldump -h $DB_HOST -u $DB_USER -p$DB_PASSWORD $DB_NAME > $BACKUP_DIR/backup_$DATE.sql

# Keep only last 7 days
find $BACKUP_DIR -name "backup_*.sql" -mtime +7 -delete

# Upload to S3 (optional)
aws s3 cp $BACKUP_DIR/backup_$DATE.sql s3://your-backup-bucket/
```

### Cron Job
```bash
# Run daily at 2 AM
0 2 * * * /path/to/backup.sh
```

## 🚨 Rollback Plan

### Frontend Rollback (Vercel)
```bash
# List deployments
vercel ls

# Rollback to previous
vercel rollback <deployment-url>
```

### Backend Rollback (Render)
1. Go to Render dashboard
2. Select your service
3. Click "Manual Deploy"
4. Select previous commit

### Database Rollback
```bash
# Restore from backup
mysql -h $DB_HOST -u $DB_USER -p$DB_PASSWORD $DB_NAME < backup_file.sql
```

## 📈 Performance Optimization

### Frontend
- Enable gzip compression
- Use CDN for static assets
- Implement lazy loading
- Optimize images
- Enable browser caching

### Backend
- Enable response compression
- Implement caching (Redis)
- Optimize database queries
- Use connection pooling
- Enable HTTP/2

### Database
- Add indexes on frequently queried columns
- Optimize slow queries
- Regular ANALYZE TABLE
- Monitor query performance

## ✅ Post-Deployment Checklist

- [ ] All services are running
- [ ] Database is accessible
- [ ] API endpoints responding
- [ ] Frontend loads correctly
- [ ] Can create customer
- [ ] Can create invoice
- [ ] PDF generation works
- [ ] Data persists correctly
- [ ] SSL certificate valid
- [ ] Monitoring set up
- [ ] Backups configured
- [ ] Error logging active
- [ ] Performance acceptable
- [ ] Security headers set
- [ ] CORS configured correctly

## 🆘 Troubleshooting

### Issue: Database Connection Failed
```bash
# Check database status
mysql -h $DB_HOST -u $DB_USER -p

# Check firewall rules
# Ensure backend IP is whitelisted
```

### Issue: CORS Errors
```javascript
// Update backend CORS config
app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true
}));
```

### Issue: Build Failures
```bash
# Clear cache and rebuild
rm -rf node_modules package-lock.json
npm install
npm run build
```

## 📞 Support

For deployment issues:
- Check platform status pages
- Review deployment logs
- Contact platform support
- Email: info@rishabhjewellers.com

---

**Deployment Status:** Ready for Production ✅
