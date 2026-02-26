import type { technicalBaseText } from '../model/types';

export const TechnicalBaseTextParagraph: React.FC<{
  textItem: technicalBaseText;
}> = ({ textItem }) => {
  return <p className="text-justify" dangerouslySetInnerHTML={{ __html: textItem.textHtml }} />;
};
