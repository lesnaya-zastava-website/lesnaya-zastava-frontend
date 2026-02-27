export interface FormFieldOption {
  label: string;
  value: string;
  maxLimit?: number;
  currentCount?: number;
  disabled?: boolean;
  isFull?: boolean;
  isManuallyDisabled?: boolean;
}

export interface FormField {
  name: string;
  type: string;
  label: string;
  placeholder?: string;
  description?: string;
  validation?: {
    required?: boolean;
  };
  options?: FormFieldOption[];
}

export interface FormConfig {
  fields: {
    fields: FormField[];
  };
  description?: string;
  totalSubmissions?: number;
}

export interface Form {
  id: number;
  documentId: string;
  title: string;
  active: boolean;
  description?: string;
  successMessage?: string;
  errorMessage?: string;
  rateLimit?: {
    enabled: boolean;
    maxSubmissions: number;
    timeWindowMinutes: number;
    oneTimeOnly: boolean;
  };
}

export interface FormSubmissionResponse {
  id: number;
  documentId: string;
  submission: Record<string, any>;
  createdAt: string;
  form: {
    id: number;
    documentId: string;
    title: string;
    successMessage?: string;
    errorMessage?: string;
  };
}

export interface FormSubmissionError {
  error: {
    status: number;
    name: string;
    message: string;
    retryAfter?: number;
  };
}


