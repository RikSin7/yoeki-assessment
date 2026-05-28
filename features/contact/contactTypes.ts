export interface ContactState {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  message: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
