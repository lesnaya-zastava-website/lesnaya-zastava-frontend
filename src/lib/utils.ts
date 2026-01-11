import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Обрабатывает HTML контент из CKEditor, заменяя localhost:1337 на актуальный API URL
 * Это необходимо для корректного отображения картинок из медиабиблиотеки Strapi
 * на разных устройствах (ноутбук vs телефон)
 *
 * Используется во всех местах с dangerouslySetInnerHTML, где отображается контент из CKEditor:
 * - Страницы истории, безопасности, контактов, информации
 * - Страницы проектов (ваши проекты, Маявка, ПроЮность)
 * - Страницы лагеря (техническая база, для родителей)
 * - Переиспользуемые компоненты (TechnicalBaseTextParagraph, YourProjectsTextParagraph)
 */
export function processCkeditorHtml(html: string): string {
  if (!html) return html;

  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

  // Заменяем localhost:1337 на актуальный API URL
  return html.replace(/http:\/\/localhost:1337/g, apiBaseUrl);
}
