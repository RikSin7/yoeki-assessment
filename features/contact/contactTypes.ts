export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

export interface ContactState {
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  lastSubmission: ContactFormData | null;
}