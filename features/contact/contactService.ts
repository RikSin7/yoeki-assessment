import { api } from "@/lib/axios";
import type { ContactFormData } from "./contactTypes";

export const submitContactForm = async (formData: ContactFormData) => {
  const response = await api.post("/contact", formData);
  return response.data;
};