import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'ОК "Лесная застава"',
  description: 'Оздоровительный комплекс "Лесная застава"',
  themeConfig: {
    logo: '/.images/tempLogo.png',
    siteTitle: 'ОК "Лесная застава"',
    nav: [
      { text: 'Главная', link: '/' },
      {
        text: 'Руководство',
        items: [
          { text: 'Администратора', link: '/admin/auth' },
          { text: 'Программиста', link: '/expert/dependencies' },
        ],
      },
    ],
    sidebar: [
      {
        text: 'Введение',
        items: [
          { text: 'Начало работы', link: '/intro/start' },
          { text: 'Рекомендации', link: '/intro/recommendations' },
          { text: 'Проблемы', link: '/intro/problems' },
        ],
      },
      {
        text: 'Для администратора',
        items: [
          { text: 'Авторизация', link: '/admin/auth' },
          { text: 'Интерфейс панели', link: '/admin/ui' },
          { text: 'Управление контентом', link: '/admin/management' },
        ],
        collapsed: true,
      },
      {
        text: 'Для программиста',
        items: [
          { text: 'Зависимости', link: '/expert/dependencies' },
          { text: 'Архитектура', link: '/expert/architecture' },
          { text: 'Маршрутизация', link: '/expert/routing' },
          { text: 'Страницы', link: '/expert/pages' },
          { text: 'Компоненты', link: '/expert/components' },
          { text: 'Админ панель', link: '/expert/server' },
          { text: 'Документация', link: '/expert/docs' },
        ],
        collapsed: true,
      },
    ],
    footer: {
      copyright: 'ООО "Соц-сервис" Все права защищены',
    },
    docFooter: {
      prev: 'Предыдущая страница',
      next: 'Следующая страница',
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/lesnaya-zastava-website' },
    ],
  },
  locales: {
    root: {
      label: 'Русский',
      lang: 'ru',
    },
  },
});
