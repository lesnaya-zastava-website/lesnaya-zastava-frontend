import React from 'react';
import { Input } from '@/shared/ui/components/ui/input';
import { Textarea } from '@/shared/ui/components/ui/textarea';
import { Label } from '@/shared/ui/components/ui/label';
import { Checkbox } from '@/shared/ui/components/ui/checkbox';
import { cn } from '@/lib/utils';
import type { FormField } from '../model/types';

interface FormFieldsProps {
  fields: FormField[];
  formData: Record<string, any>;
  errors: Record<string, string>;
  onChange: (name: string, value: any) => void;
}

const renderTextWithLinks = (text: string) => {
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    const [full, linkText, href] = match;
    const start = match.index;

    if (start > lastIndex) {
      parts.push(text.slice(lastIndex, start));
    }

    const isInternal = href.startsWith('/');

    parts.push(
      isInternal ? (
        <a
          key={`${href}-${start}`}
          href={href}
          className="text-primary underline hover:opacity-80">
          {linkText}
        </a>
      ) : (
        <a
          key={`${href}-${start}`}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline hover:opacity-80">
          {linkText}
        </a>
      ),
    );

    lastIndex = start + full.length;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length ? parts : text;
};

export const FormFields: React.FC<FormFieldsProps> = ({
  fields,
  formData,
  errors,
  onChange,
}) => {
  const renderField = (field: FormField) => {
    const value = formData[field.name] || '';
    const error = errors[field.name];
    const isRequired = field.validation?.required;

    switch (field.type) {
      case 'text':
        return (
          <div
            key={field.name}
            className="space-y-2">
            <Label htmlFor={field.name}>
              {field.label}
              {isRequired && <span className="ml-1 text-destructive">*</span>}
            </Label>
            {field.description && (
              <p className="text-sm text-muted-foreground">
                {field.description}
              </p>
            )}
            <Input
              id={field.name}
              type="text"
              name={field.name}
              value={value}
              onChange={e => onChange(field.name, e.target.value)}
              placeholder={field.placeholder}
              className={cn(error && 'border-destructive')}
            />
            {error && <p className="text-sm text-destructive">{error}</p>}
          </div>
        );

      case 'email':
        return (
          <div
            key={field.name}
            className="space-y-2">
            <Label htmlFor={field.name}>
              {field.label}
              {isRequired && <span className="ml-1 text-destructive">*</span>}
            </Label>
            {field.description && (
              <p className="text-sm text-muted-foreground">
                {field.description}
              </p>
            )}
            <Input
              id={field.name}
              type="email"
              name={field.name}
              value={value}
              onChange={e => onChange(field.name, e.target.value)}
              placeholder={field.placeholder}
              className={cn(error && 'border-destructive')}
            />
            {error && <p className="text-sm text-destructive">{error}</p>}
          </div>
        );

      case 'number':
        return (
          <div
            key={field.name}
            className="space-y-2">
            <Label htmlFor={field.name}>
              {field.label}
              {isRequired && <span className="ml-1 text-destructive">*</span>}
            </Label>
            {field.description && (
              <p className="text-sm text-muted-foreground">
                {field.description}
              </p>
            )}
            <Input
              id={field.name}
              type="number"
              name={field.name}
              value={value}
              onChange={e =>
                onChange(
                  field.name,
                  e.target.value === '' ? '' : Number(e.target.value),
                )
              }
              placeholder={field.placeholder}
              className={cn(error && 'border-destructive')}
            />
            {error && <p className="text-sm text-destructive">{error}</p>}
          </div>
        );

      case 'textarea':
      case 'multiline':
        return (
          <div
            key={field.name}
            className="space-y-2">
            <Label htmlFor={field.name}>
              {field.label}
              {isRequired && <span className="ml-1 text-destructive">*</span>}
            </Label>
            {field.description && (
              <p className="text-sm text-muted-foreground">
                {field.description}
              </p>
            )}
            <Textarea
              id={field.name}
              name={field.name}
              value={value}
              onChange={e => onChange(field.name, e.target.value)}
              placeholder={field.placeholder}
              rows={4}
              className={cn(error && 'border-destructive')}
            />
            {error && <p className="text-sm text-destructive">{error}</p>}
          </div>
        );

      case 'checkbox':
        // Если есть options - это группа чекбоксов
        if (field.options && field.options.length > 0) {
          return (
            <div
              key={field.name}
              className="space-y-3">
              <Label>
                {typeof field.label === 'string'
                  ? renderTextWithLinks(field.label)
                  : field.label}
                {isRequired && <span className="ml-1 text-destructive">*</span>}
              </Label>
              {field.description && (
                <p className="ml-6 text-sm text-muted-foreground">
                  {renderTextWithLinks(field.description)}
                </p>
              )}
              <div className="space-y-2">
                {field.options.map(option => (
                  <div
                    key={option.value}
                    className="flex items-center space-x-2">
                    <Checkbox
                      id={`${field.name}-${option.value}`}
                      checked={
                        Array.isArray(value) && value.includes(option.value)
                      }
                      onCheckedChange={(checked: boolean) => {
                        const currentValues = Array.isArray(value) ? value : [];
                        if (checked) {
                          onChange(field.name, [
                            ...currentValues,
                            option.value,
                          ]);
                        } else {
                          onChange(
                            field.name,
                            currentValues.filter(v => v !== option.value),
                          );
                        }
                      }}
                    />
                    <Label
                      htmlFor={`${field.name}-${option.value}`}
                      className="cursor-pointer text-sm font-normal">
                      {option.label}
                    </Label>
                  </div>
                ))}
              </div>
              {error && <p className="text-sm text-destructive">{error}</p>}
            </div>
          );
        }
        // Одиночный чекбокс (boolean)
        return (
          <div
            key={field.name}
            className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox
                id={field.name}
                checked={value === true || value === 'true'}
                onCheckedChange={(checked: boolean) => {
                  onChange(field.name, checked);
                }}
              />
              <Label
                htmlFor={field.name}
                className="cursor-pointer text-sm font-normal">
                {field.label}
                {isRequired && <span className="ml-1 text-destructive">*</span>}
              </Label>
            </div>
            {field.description && (
              <p className="ml-6 text-sm text-muted-foreground">
                {field.description}
              </p>
            )}
            {error && <p className="text-sm text-destructive">{error}</p>}
          </div>
        );

      case 'radio':
      case 'radio-group':
        return (
          <div
            key={field.name}
            className="space-y-3">
            <Label>
              {field.label}
              {isRequired && <span className="ml-1 text-destructive">*</span>}
            </Label>
            {field.description && (
              <p className="text-sm text-muted-foreground">
                {field.description}
              </p>
            )}
            <div className="space-y-2">
              {field.options?.map(option => (
                <div
                  key={option.value}
                  className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id={`${field.name}-${option.value}`}
                    name={field.name}
                    value={option.value}
                    checked={value === option.value}
                    onChange={e => onChange(field.name, e.target.value)}
                    className="h-4 w-4 border-primary text-primary focus:ring-ring"
                  />
                  <Label
                    htmlFor={`${field.name}-${option.value}`}
                    className="cursor-pointer text-sm font-normal">
                    {option.label}
                  </Label>
                </div>
              ))}
            </div>
            {error && <p className="text-sm text-destructive">{error}</p>}
          </div>
        );

      case 'radiolimit':
        return (
          <div
            key={field.name}
            className="space-y-3">
            <Label>
              {field.label}
              {isRequired && <span className="ml-1 text-destructive">*</span>}
            </Label>
            {field.description && (
              <p className="text-sm text-muted-foreground">
                {field.description}
              </p>
            )}
            <div className="space-y-2">
              {field.options?.map(option => {
                const remaining =
                  (option.maxLimit ?? 0) - (option.currentCount ?? 0);
                const isDisabled =
                  option.disabled || option.isFull || remaining <= 0;

                return (
                  <div
                    key={option.value}
                    className={cn(
                      'flex items-center justify-between rounded-md border px-3 py-2',
                      isDisabled ? 'bg-muted opacity-50' : 'bg-background',
                    )}>
                    <div className="flex items-center space-x-2">
                      <input
                        type="radio"
                        id={`${field.name}-${option.value}`}
                        name={field.name}
                        value={option.value}
                        checked={value === option.value}
                        disabled={isDisabled}
                        onChange={e => onChange(field.name, e.target.value)}
                        className="h-4 w-4 border-primary text-primary focus:ring-ring disabled:cursor-not-allowed"
                      />
                      <Label
                        htmlFor={`${field.name}-${option.value}`}
                        className={cn(
                          'text-sm font-normal',
                          isDisabled
                            ? 'cursor-not-allowed text-muted-foreground'
                            : 'cursor-pointer',
                        )}>
                        {option.label}
                      </Label>
                    </div>
                    <span
                      className={cn(
                        'ml-2 text-xs font-medium whitespace-nowrap',
                        isDisabled
                          ? 'text-destructive'
                          : 'text-muted-foreground',
                      )}>
                      {isDisabled
                        ? 'Мест нет'
                        : `Осталось мест: ${remaining} из ${option.maxLimit}`}
                    </span>
                  </div>
                );
              })}
            </div>
            {error && <p className="text-sm text-destructive">{error}</p>}
          </div>
        );

      case 'select':
      case 'choice':
        return (
          <div
            key={field.name}
            className="space-y-2">
            <Label htmlFor={field.name}>
              {field.label}
              {isRequired && <span className="ml-1 text-destructive">*</span>}
            </Label>
            {field.description && (
              <p className="text-sm text-muted-foreground">
                {field.description}
              </p>
            )}
            <select
              id={field.name}
              name={field.name}
              value={value}
              onChange={e => onChange(field.name, e.target.value)}
              className={cn(
                'flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
                error && 'border-destructive',
              )}>
              <option value="">Выберите...</option>
              {field.options?.map(option => (
                <option
                  key={option.value}
                  value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {error && <p className="text-sm text-destructive">{error}</p>}
          </div>
        );

      case 'file':
        return (
          <div
            key={field.name}
            className="space-y-2">
            <Label htmlFor={field.name}>
              {field.label}
              {isRequired && <span className="ml-1 text-destructive">*</span>}
            </Label>
            {field.description && (
              <p className="text-sm text-muted-foreground">
                {field.description}
              </p>
            )}
            <Input
              id={field.name}
              type="file"
              name={field.name}
              onChange={e => {
                const file = e.target.files?.[0];
                if (file) {
                  onChange(field.name, file);
                } else {
                  onChange(field.name, null);
                }
              }}
              className={cn(error && 'border-destructive')}
            />
            {value && typeof value === 'object' && value.name && (
              <p className="text-sm text-muted-foreground">
                Выбран файл: {value.name}
              </p>
            )}
            {error && <p className="text-sm text-destructive">{error}</p>}
          </div>
        );

      default:
        return (
          <div
            key={field.name}
            className="space-y-2">
            <Label htmlFor={field.name}>
              {field.label}
              {isRequired && <span className="ml-1 text-destructive">*</span>}
            </Label>
            {field.description && (
              <p className="text-sm text-muted-foreground">
                {field.description}
              </p>
            )}
            <Input
              id={field.name}
              type="text"
              name={field.name}
              value={value}
              onChange={e => onChange(field.name, e.target.value)}
              placeholder={field.placeholder}
              className={cn(error && 'border-destructive')}
            />
            {error && <p className="text-sm text-destructive">{error}</p>}
          </div>
        );
    }
  };

  return <div className="space-y-6">{fields.map(renderField)}</div>;
};
