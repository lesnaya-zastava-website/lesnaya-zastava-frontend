import { Link } from 'react-router-dom';

export const CardLink: React.FC<{
  title: string;
  contentCard: string;
  contentLink: string;
}> = ({ title, contentCard, contentLink }) => {
  return (
    <div className="rounded-lg border  p-6">
      <h3 className="mb-4 font-medium">{title}</h3>
      <p className="mb-4 text-sm">{contentCard}</p>
      <Link
        to="/infrastructure"
        className="inline-flex items-center rounded-md px-4 py-2 border transition-colors hover:bg-gray-700">
        {contentLink}
      </Link>
    </div>
  );
};
