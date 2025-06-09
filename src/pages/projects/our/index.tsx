import { Button } from '@/shared/components/ui/button';
import { Card, CardContent, CardTitle } from '@/shared/components/ui/card';
import { PageHeading } from '@/shared/PageHeading';
import { useNavigate } from 'react-router-dom';

export const Our: React.FC = () => {
  let navigate = useNavigate();
  return (
    <section className="mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="container mx-auto border-t border-gray-200 py-5">
        <PageHeading>Наши проекты</PageHeading>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardContent className="flex flex-col gap-4 text-center">
              <img
                className="max-w-full"
                alt="Картинка"
                src="/pages/projects/our/maevka.png"
              />
              <CardTitle>Семейный фестиваль "Маёвка"</CardTitle>
              <Button>Подробнее</Button>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col gap-4 text-center">
              <img
                className="max-w-full"
                alt="Картинка"
                src="/pages/projects/our/proYouth.png"
              />
              <CardTitle>Взрослая смена "Pro_Юность"</CardTitle>
              <Button>Подробнее</Button>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col gap-4 text-center">
              <img
                className="max-w-full"
                alt="Картинка"
                src="/pages/about/history.png"
              />
              <CardTitle>Актуальные предложения</CardTitle>
              <Button
                onClick={() => {
                  navigate('/recreationOrganizedGroups/entertainmentPrograms');
                }}>
                Подробнее
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
