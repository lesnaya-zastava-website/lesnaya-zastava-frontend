import { useMutation } from '@tanstack/react-query';
import { apiClient } from '@/shared/api/apiClient';
import type { FormSubmissionResponse, FormSubmissionError } from './types';

export const useFormSubmission = () => {
  return useMutation<
    FormSubmissionResponse,
    FormSubmissionError,
    { formId: string; submission: Record<string, any>; referer?: string }
  >({
    mutationFn: async ({ formId, submission, referer }) => {
      const data = await apiClient.submitForm(formId, submission, referer);
      return data;
    },
  });
};


