# Гайд по развертыванию статического фронтенда с Apache

Этот гайд поможет вам развернуть собранный фронтенд (папка `dist`) на Apache веб-сервере. Apache будет раздавать статические файлы и проксировать API запросы к бэкенду.

## Предварительные требования

1. **Apache2** установлен на сервере
2. Проект собран (`npm run build`) и папка `dist/` готова

## Шаг 1: Установка и включение необходимых модулей Apache

```bash
# Установка Apache (если еще не установлен)
sudo apt update
sudo apt install apache2

# Включение необходимых модулей
sudo a2enmod rewrite
sudo a2enmod proxy
sudo a2enmod proxy_http
sudo a2enmod headers

# Перезапуск Apache
sudo systemctl restart apache2
```

## Шаг 2: Сборка проекта

Убедитесь, что проект собран:

```bash
npm run build
```

Проверьте, что папка `dist/` содержит:
- `index.html`
- `assets/` (JS, CSS файлы)
- Статические ресурсы (изображения, видео, шрифты и т.д.)

## Шаг 3: Настройка Apache Virtual Host

Создайте конфигурационный файл для вашего сайта:

```bash
sudo nano /etc/apache2/sites-available/lesnaya-zastava.conf
```

Вставьте следующую конфигурацию:

```apache
<VirtualHost *:80>
    ServerName your-domain.com
    ServerAlias www.your-domain.com
    
    # Путь к папке dist (замените на ваш реальный путь)
    DocumentRoot /path/to/lesnaya-zastava-frontend/dist
    
    <Directory /path/to/lesnaya-zastava-frontend/dist>
        Options -Indexes +FollowSymLinks
        AllowOverride All
        Require all granted
        
        # Fallback на index.html для SPA роутинга
        RewriteEngine On
        RewriteBase /
        RewriteRule ^index\.html$ - [L]
        RewriteCond %{REQUEST_FILENAME} !-f
        RewriteCond %{REQUEST_FILENAME} !-d
        RewriteRule . /index.html [L]
    </Directory>
    
    # Проксирование API запросов к бэкенду
    # Замените http://localhost:1337 на адрес вашего бэкенда
    ProxyPreserveHost On
    ProxyPass /api http://localhost:1337/api
    ProxyPassReverse /api http://localhost:1337/api
    
    # Проксирование медиа файлов (если они на бэкенде)
    # Раскомментируйте, если нужно проксировать загрузки
    # ProxyPass /uploads http://localhost:1337/uploads
    # ProxyPassReverse /uploads http://localhost:1337/uploads
    
    # Логирование
    ErrorLog ${APACHE_LOG_DIR}/lesnaya-zastava-error.log
    CustomLog ${APACHE_LOG_DIR}/lesnaya-zastava-access.log combined
</VirtualHost>
```

**Важно:** Замените следующие значения:
- `your-domain.com` - ваш домен
- `/path/to/lesnaya-zastava-frontend/dist` - полный путь к папке `dist` на сервере
- `http://localhost:1337` - адрес вашего бэкенда (порт может отличаться)

## Шаг 4: Активация конфигурации

```bash
# Включить сайт
sudo a2ensite lesnaya-zastava.conf

# Отключить дефолтный сайт (если нужно)
sudo a2dissite 000-default.conf

# Проверить конфигурацию на ошибки
sudo apache2ctl configtest

# Перезапустить Apache
sudo systemctl restart apache2
```

## Шаг 5: Настройка прав доступа

Убедитесь, что Apache имеет права на чтение файлов:

```bash
# Установить правильные права на папку dist
sudo chown -R www-data:www-data /path/to/lesnaya-zastava-frontend/dist
sudo chmod -R 755 /path/to/lesnaya-zastava-frontend/dist
```

## Шаг 6: Настройка переменных окружения

Если ваш фронтенд использует переменные окружения (например, `VITE_API_BASE_URL`), настройте их при сборке:

```bash
# Создать .env.production файл
echo "VITE_API_BASE_URL=http://your-domain.com" > .env.production

# Пересобрать проект
npm run build
```

## Настройка HTTPS (SSL/TLS)

Для production рекомендуется использовать HTTPS. Добавьте конфигурацию для порта 443:

```apache
<VirtualHost *:443>
    ServerName your-domain.com
    ServerAlias www.your-domain.com
    
    DocumentRoot /path/to/lesnaya-zastava-frontend/dist
    
    <Directory /path/to/lesnaya-zastava-frontend/dist>
        Options -Indexes +FollowSymLinks
        AllowOverride All
        Require all granted
        
        RewriteEngine On
        RewriteBase /
        RewriteRule ^index\.html$ - [L]
        RewriteCond %{REQUEST_FILENAME} !-f
        RewriteCond %{REQUEST_FILENAME} !-d
        RewriteRule . /index.html [L]
    </Directory>
    
    ProxyPreserveHost On
    ProxyPass /api http://localhost:1337/api
    ProxyPassReverse /api http://localhost:1337/api
    
    # SSL конфигурация
    SSLEngine on
    SSLCertificateFile /etc/letsencrypt/live/your-domain.com/fullchain.pem
    SSLCertificateKeyFile /etc/letsencrypt/live/your-domain.com/privkey.pem
    
    ErrorLog ${APACHE_LOG_DIR}/lesnaya-zastava-ssl-error.log
    CustomLog ${APACHE_LOG_DIR}/lesnaya-zastava-ssl-access.log combined
</VirtualHost>

# Редирект с HTTP на HTTPS
<VirtualHost *:80>
    ServerName your-domain.com
    ServerAlias www.your-domain.com
    Redirect permanent / https://your-domain.com/
</VirtualHost>
```

Установка SSL сертификата с Let's Encrypt:

```bash
# Установить certbot
sudo apt install certbot python3-certbot-apache

# Получить сертификат
sudo certbot --apache -d your-domain.com -d www.your-domain.com
```

## Обновление приложения

Когда нужно обновить приложение:

```bash
# 1. Перейти в директорию проекта
cd /path/to/lesnaya-zastava-frontend

# 2. Обновить код (например, через git pull)
git pull

# 3. Установить зависимости (если изменились)
npm install

# 4. Пересобрать проект
npm run build

# 5. Убедиться, что права установлены правильно
sudo chown -R www-data:www-data dist
sudo chmod -R 755 dist

# Apache автоматически подхватит новые файлы, перезапуск не требуется
```

## Полезные команды Apache

### Проверка статуса
```bash
sudo systemctl status apache2
```

### Перезапуск Apache
```bash
sudo systemctl restart apache2
```

### Перезагрузка конфигурации (без остановки)
```bash
sudo systemctl reload apache2
```

### Проверка конфигурации
```bash
sudo apache2ctl configtest
```

### Просмотр логов
```bash
# Ошибки
sudo tail -f /var/log/apache2/lesnaya-zastava-error.log

# Доступ
sudo tail -f /var/log/apache2/lesnaya-zastava-access.log
```

### Список активных сайтов
```bash
sudo apache2ctl -S
```

## Решение проблем

### Ошибка 403 Forbidden
1. Проверьте права доступа к папке `dist`:
   ```bash
   sudo chown -R www-data:www-data /path/to/lesnaya-zastava-frontend/dist
   sudo chmod -R 755 /path/to/lesnaya-zastava-frontend/dist
   ```

2. Проверьте, что в конфигурации есть `Require all granted`

### Ошибка 404 для маршрутов SPA
Убедитесь, что модуль `mod_rewrite` включен:
```bash
sudo a2enmod rewrite
sudo systemctl restart apache2
```

### API запросы не работают
1. Проверьте, что модули прокси включены:
   ```bash
   sudo a2enmod proxy proxy_http
   sudo systemctl restart apache2
   ```

2. Проверьте, что бэкенд доступен:
   ```bash
   curl http://localhost:1337/api/announcements
   ```

3. Проверьте логи Apache:
   ```bash
   sudo tail -f /var/log/apache2/lesnaya-zastava-error.log
   ```

### Статические файлы не загружаются
1. Проверьте, что файлы существуют в папке `dist/`
2. Проверьте права доступа
3. Проверьте конфигурацию `DocumentRoot`

## Дополнительные настройки (опционально)

### Кэширование статических файлов

Включите модуль:
```bash
sudo a2enmod expires
sudo systemctl restart apache2
```

Добавьте в конфигурацию VirtualHost:

```apache
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/svg+xml "access plus 1 year"
    ExpiresByType text/css "access plus 1 month"
    ExpiresByType application/javascript "access plus 1 month"
    ExpiresByType text/html "access plus 0 seconds"
</IfModule>
```

### Сжатие (Gzip)

Включите модуль:
```bash
sudo a2enmod deflate
sudo systemctl restart apache2
```

Добавьте в конфигурацию:

```apache
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
</IfModule>
```

## Быстрая проверка

После настройки проверьте:

1. ✅ Статические файлы загружаются: `http://your-domain.com/`
2. ✅ SPA роутинг работает: `http://your-domain.com/any-route`
3. ✅ API запросы проксируются: `http://your-domain.com/api/announcements`
4. ✅ HTTPS работает (если настроен): `https://your-domain.com/`

---

**Примечание:** Не забудьте заменить все примеры путей и доменов на ваши реальные значения!
