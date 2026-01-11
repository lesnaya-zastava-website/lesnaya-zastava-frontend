# lesnaya-zastava-frontend
Фронтенд-часть сайта Детского оздоровительного лагеря "Лесная Застава".

## Деплой на сервер

📖 Подробный гайд по развертыванию на Linux сервере с PM2: [DEPLOY.md](./DEPLOY.md)

### Быстрый старт

1. Установите зависимости: `npm install`
2. Соберите проект: `npm run build`
3. Запустите деплой скрипт: `./deploy.sh`

Или вручную:
```bash
pm2 delete all && npm run build && pm2 start npx --name "lesnaya-zastava-frontend" -- vite preview --host 0.0.0.0 --port 5174 && pm2 save
```
