
import { useState } from 'react';

interface EmailFormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

export const useEmailForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const submitForm = async (formData: EmailFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simula o envio do email - você pode substituir por sua implementação real
      const response = await fetch('https://formsubmit.co/your-email@example.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        return true;
      } else {
        setSubmitStatus('error');
        return false;
      }
    } catch (error) {
      console.error('Erro ao enviar email:', error);
      setSubmitStatus('error');
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    isSubmitting,
    submitStatus,
    submitForm,
    setSubmitStatus,
  };
};
