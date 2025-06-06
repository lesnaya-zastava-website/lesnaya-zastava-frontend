import { Link } from 'react-router-dom';

export const CardLink: React.FC<{
  title: string;
  contentCard: string;
  contentLink: string;
}> = ({ title, contentCard, contentLink }) => {
  return (
    <div className="rounded-lg bg-gray-50 p-6">
      <h3 className="mb-4 font-medium">{title}</h3>
      <p className="mb-4 text-sm text-gray-600">{contentCard}</p>
      <Link
        to="/infrastructure"
        className="inline-flex items-center rounded-md bg-gray-800 px-4 py-2 text-white transition-colors hover:bg-gray-700">
        {contentLink}
      </Link>
    </div>
  );
};
