import type { technicalBaseText } from '../model/types';
import { processCkeditorHtml } from '@/lib/utils';

export const TechnicalBaseTextParagraph: React.FC<{
  textItem: technicalBaseText;
}> = ({ textItem }) => {
  return <p className="text-justify" dangerouslySetInnerHTML={{ __html: processCkeditorHtml(textItem.textHtml) }} />;
};
