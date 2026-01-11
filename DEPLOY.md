# Гайд по запуску фронтенда на Linux сервере с PM2

Этот гайд поможет вам развернуть production версию фронтенда на Linux сервере с использованием PM2 менеджера процессов.

> **Альтернативный вариант:** Если вы хотите использовать Apache как веб-сервер для раздачи статических файлов из папки `dist`, см. [APACHE_DEPLOY.md](./APACHE_DEPLOY.md)

## Предварительные требования

1. **Node.js и npm** установлены на сервере (рекомендуется Node.js 18+)
2. **PM2** установлен глобально:
   ```bash
   npm install -g pm2
   ```

## Шаг 1: Подготовка проекта на сервере

1. Загрузите проект на сервер (через git, scp, ftp и т.д.)
2. Перейдите в директорию проекта:
   ```bash
   cd /path/to/lesnaya-zastava-frontend
   ```

## Шаг 2: Установка зависимостей

```bash
npm install
```

## Шаг 3: Сборка проекта

Соберите production версию проекта:

```bash
npm run build
```

После выполнения команды будет создана папка `dist/` с готовыми файлами для production.

## Шаг 4: Запуск приложения в PM2

**Важно:** Перед запуском остановите все процессы PM2, чтобы избежать конфликтов:

```bash
# Остановить и удалить все процессы PM2
pm2 delete all

# Или если нужно остановить только этот процесс:
pm2 delete lesnaya-zastava-frontend
```

Затем запустите приложение командой:

```bash
pm2 start npx --name "lesnaya-zastava-frontend" -- vite preview --host 0.0.0.0 --port 5174
```

Или запустите напрямую одной командой:

```bash
pm2 delete all && pm2 start npx --name "lesnaya-zastava-frontend" -- vite preview --host 0.0.0.0 --port 5174
```

**Пояснение команды:**
- `pm2 start npx` - запускает npx через PM2
- `--name "lesnaya-zastava-frontend"` - задает имя процесса
- `--` - разделитель, после которого идут аргументы для npx
- `vite preview --host 0.0.0.0 --port 5174` - команда для запуска preview сервера

## Шаг 6: Сохранение конфигурации PM2

Сохраните текущую конфигурацию PM2, чтобы процессы автоматически запускались после перезагрузки сервера:

```bash
pm2 save
pm2 startup
```

Команда `pm2 startup` покажет команду, которую нужно выполнить с правами root для автозапуска.

## Полезные команды PM2

### Просмотр статуса процессов
```bash
pm2 status
```

### Просмотр логов
```bash
# Все логи
pm2 logs

# Логи конкретного приложения
pm2 logs lesnaya-zastava-frontend

# Логи в реальном времени (последние 50 строк)
pm2 logs --lines 50
```

### Перезапуск приложения
```bash
pm2 restart lesnaya-zastava-frontend
```

### Остановка приложения
```bash
pm2 stop lesnaya-zastava-frontend
```

### Удаление приложения из PM2
```bash
pm2 delete lesnaya-zastava-frontend
```

### Мониторинг
```bash
pm2 monit
```

## Обновление приложения

Когда нужно обновить приложение на сервере:

```bash
# 1. Остановить все процессы
pm2 delete all

# 2. Обновить код (например, через git pull)
git pull  # или загрузите новые файлы другим способом

# 3. Установить зависимости (если изменились)
npm install

# 4. Пересобрать проект
npm run build

# 5. Запустить снова
pm2 start npx --name "lesnaya-zastava-frontend" -- vite preview --host 0.0.0.0 --port 5174

# 6. Сохранить конфигурацию
pm2 save
```

## Настройка порта

По умолчанию приложение запускается на порту **5174**. Если нужно изменить порт:

1. Остановите текущий процесс:
   ```bash
   pm2 delete lesnaya-zastava-frontend
   ```

2. Запустите с новым портом (например, 3000):
   ```bash
   pm2 start npx --name "lesnaya-zastava-frontend" -- vite preview --host 0.0.0.0 --port 3000
   ```

3. Сохраните конфигурацию:
   ```bash
   pm2 save
   ```

## Настройка Nginx (опционально)

Если вы используете Nginx как reverse proxy, добавьте конфигурацию:

```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:5174;
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

## Решение проблем

### Приложение не запускается
1. Проверьте логи: `pm2 logs lesnaya-zastava-frontend`
2. Убедитесь, что порт свободен: `lsof -i :5174`
3. Проверьте, что папка `dist/` существует после сборки

### Порт уже занят
Измените порт в команде запуска или освободите порт:
```bash
# Найти процесс, использующий порт
lsof -i :5174

# Убить процесс (замените PID на реальный)
kill -9 PID

# Или измените порт при запуске (например, на 3000):
pm2 delete lesnaya-zastava-frontend
pm2 start npx --name "lesnaya-zastava-frontend" -- vite preview --host 0.0.0.0 --port 3000
pm2 save
```

### PM2 не сохраняет процессы после перезагрузки
Выполните:
```bash
pm2 save
pm2 startup
# Затем выполните команду, которую покажет pm2 startup (с правами root)
```

## Быстрый старт (одной командой)

Используйте готовый скрипт `deploy.sh`:

```bash
./deploy.sh
```

Или выполните команды вручную:

```bash
pm2 delete all && npm run build && pm2 start npx --name "lesnaya-zastava-frontend" -- vite preview --host 0.0.0.0 --port 5174 && pm2 save
```

