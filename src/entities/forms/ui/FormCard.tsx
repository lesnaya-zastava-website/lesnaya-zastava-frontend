import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/ui/components/ui/card';
import { Button } from '@/shared/ui/components/ui/button';
import type { Form } from '../model/types';

interface FormCardProps {
  form: Form;
}

export const FormCard: React.FC<FormCardProps> = ({ form }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{form.title}</CardTitle>
        {!form.active && (
          <span className="text-sm text-destructive">Неактивна</span>
        )}
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {form.description && (
          <p className="text-sm text-muted-foreground">{form.description}</p>
        )}
        {form.active ? (
          <Button asChild>
            <Link to={`/projects/booking/${form.documentId}`}>
              Заполнить
            </Link>
          </Button>
        ) : (
          <Button disabled>
            Заполнить
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

