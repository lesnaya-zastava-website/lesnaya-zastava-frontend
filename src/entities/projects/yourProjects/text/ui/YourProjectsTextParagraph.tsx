import type { yourProjectsText } from '../model/types';
import { processCkeditorHtml } from '@/lib/utils';

export const YourProjectsTextParagraph: React.FC<{
  textItem: yourProjectsText;
}> = ({ textItem }) => {
  return <p className="text-justify" dangerouslySetInnerHTML={{ __html: processCkeditorHtml(textItem.textHtml) }} />;
};
