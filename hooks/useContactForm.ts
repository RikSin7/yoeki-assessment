import { useState, useCallback } from "react";
import { useAppDispatch, useAppSelector } from "./useRedux";
import { submitContact, resetFormStatus } from "@/features/contact/contactSlice";
import type { ContactFormData } from "@/features/contact/contactTypes";

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export function useContactForm() {
  const dispatch = useAppDispatch();
  const { status, error } = useAppSelector((state) => state.contact);

  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  // Validate on the client side before even dispatching
  const validate = useCallback((): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear the error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      dispatch(submitContact(formData));
    }
  };

  const resetForm = useCallback(() => {
    setFormData({ name: "", email: "", company: "", message: "" });
    setErrors({});
    dispatch(resetFormStatus());
  }, [dispatch]);

  return {
    formData,
    errors,
    status,
    error,
    handleChange,
    handleSubmit,
    resetForm,
  };
}