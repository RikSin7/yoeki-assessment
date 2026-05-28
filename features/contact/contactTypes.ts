export interface ContactFormData {
  name: string;
  location: string;
  email: string;
  phone: string;
  jobTitle: string;
  organization: string;
  projectDate: string;        // "Immediate" | "1-3 Months" | "6-12 Months"
  requirement: string;        // textarea
  hearAboutUs: string;        // select dropdown
  consent: boolean;           // checkbox
}

export interface ContactState {
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  lastSubmission: ContactFormData | null;
}