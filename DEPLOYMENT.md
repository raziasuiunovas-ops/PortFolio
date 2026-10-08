# 🚀 Руководство по деплою

## Варианты размещения сайта

### 1. Vercel (Рекомендуется) ⭐

**Преимущества:**
- Бесплатный хостинг
- Автоматический деплой из GitHub
- HTTPS по умолчанию
- Быстрая загрузка (CDN)
- Простая настройка домена

**Шаги:**

1. Зарегистрируйся на [vercel.com](https://vercel.com)
2. Подключи свой GitHub аккаунт
3. Нажми "New Project"
4. Выбери репозиторий `portfolio`
5. Vercel автоматически определит настройки (React + Vite)
6. Нажми "Deploy"
7. Готово! Сайт будет доступен по адресу типа `razziyu.vercel.app`

**Свой домен:**
- Купи домен (например, на [namecheap.com](https://namecheap.com))
- В Vercel: Settings → Domains → Add Domain
- Следуй инструкциям для настройки DNS

---

### 2. Netlify

**Преимущества:**
- Бесплатный хостинг
- Автоматический деплой
- Простой интерфейс

**Шаги:**

1. Зарегистрируйся на [netlify.com](https://netlify.com)
2. Подключи GitHub
3. Выбери репозиторий
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Нажми "Deploy"

---

### 3. GitHub Pages

**Преимущества:**
- Бесплатно
- Интеграция с GitHub

**Шаги:**

1. В `package.json` добавь:
```json
"homepage": "https://raziasuiunovas-ops.github.io/portfolio"
```

2. Установи gh-pages:
```bash
npm install --save-dev gh-pages
```

3. Добавь scripts в `package.json`:
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

4. Запусти:
```bash
npm run deploy
```

5. В GitHub: Settings → Pages → Source → gh-pages branch

---

## 📝 Перед деплоем

### Проверь:

1. ✅ Все контакты актуальны
2. ✅ PDF резюме в папке `public/`
3. ✅ Все ссылки работают
4. ✅ Сайт адаптивен (проверь на мобильном)
5. ✅ Нет консольных ошибок

### Оптимизация:

```bash
npm run build
```

Это создаст оптимизированную версию в папке `dist/`

---

## 🔧 Обновление сайта

### Если деплой через Vercel/Netlify:

1. Внеси изменения в код
2. Сделай commit:
```bash
git add .
git commit -m "Update portfolio"
git push
```
3. Сайт обновится автоматически!

### Если через GitHub Pages:

```bash
npm run deploy
```

---

## 🌐 Настройка собственного домена

### На Vercel:

1. Купи домен (например, `razziyu.dev`)
2. В Vercel: Settings → Domains → Add
3. Добавь DNS записи (Vercel покажет какие)
4. Жди 24-48 часов

### Пример DNS настройки:

```
Type: A
Name: @
Value: 76.76.21.21 (IP Vercel)

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

---

## 🐛 Troubleshooting

### Проблема: PDF не отображается

**Решение:**
- Убедись что файл в `public/`
- Проверь путь в Hero.jsx
- Возможно нужен другой формат embed (iframe вместо embed)

### Проблема: Шрифты не загружаются

**Решение:**
- Проверь `index.html`
- Google Fonts должны быть подключены
- Fallback шрифты в `variables.css`

### Проблема: Сайт медленно грузится

**Решение:**
- Оптимизируй PDF (сожми размер)
- Проверь размер изображений
- Используй `npm run build` перед деплоем

---

## 📊 Аналитика

### Google Analytics (опционально)

1. Создай аккаунт на [analytics.google.com](https://analytics.google.com)
2. Получи Tracking ID
3. Добавь в `index.html` перед `</head>`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## 📧 Поддержка

Если что-то не работает:
1. Проверь консоль браузера (F12)
2. Посмотри документацию платформы (Vercel/Netlify)
3. Проверь GitHub Issues

---

**Удачи с деплоем! 🚀**
