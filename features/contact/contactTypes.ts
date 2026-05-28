export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

export interface ContactState {
  loading: boolean;
  success: boolean;
  error: string | null;
}