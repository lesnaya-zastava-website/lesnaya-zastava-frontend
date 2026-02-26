import type { yourProjectsText } from '../model/types';

export const YourProjectsTextParagraph: React.FC<{
  textItem: yourProjectsText;
}> = ({ textItem }) => {
  return <p className="text-justify" dangerouslySetInnerHTML={{ __html: textItem.textHtml }} />;
};
