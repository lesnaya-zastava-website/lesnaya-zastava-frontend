import { processCkeditorHtml } from '@/lib/utils';

interface CkeditorHtmlProps {
  html: string;
  className?: string;
}

/**
 * Компонент для безопасного отображения HTML контента из CKEditor
 * Автоматически заменяет localhost:1337 на актуальный API URL
 */
export const CkeditorHtml: React.FC<CkeditorHtmlProps> = ({ html, className }) => {
  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: processCkeditorHtml(html) }}
    />
  );
};
