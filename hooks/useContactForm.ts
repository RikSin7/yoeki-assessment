import { useState, useCallback } from "react";
import { useAppDispatch, useAppSelector } from "./useRedux";
import { submitContact, resetFormStatus } from "@/features/contact/contactSlice";
import type { ContactFormData } from "@/features/contact/contactTypes";

type FormErrors = Partial<Record<keyof ContactFormData, string>>;

const initialFormData: ContactFormData = {
  name: "",
  location: "",
  email: "",
  phone: "",
  jobTitle: "",
  organization: "",
  projectDate: "",
  requirement: "",
  hearAboutUs: "",
  consent: false,
};

export function useContactForm() {
  const dispatch = useAppDispatch();
  const { status, error } = useAppSelector((state) => state.contact);

  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});

  const validate = useCallback((): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.location.trim()) newErrors.location = "Location is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?[\d\s()-]{7,15}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.organization.trim()) newErrors.organization = "Organization is required";
    if (!formData.projectDate) newErrors.projectDate = "Please select a project start date";
    if (!formData.requirement.trim()) {
      newErrors.requirement = "Please describe your requirement";
    } else if (formData.requirement.trim().length < 10) {
      newErrors.requirement = "Please provide at least 10 characters";
    }

    if (!formData.hearAboutUs) newErrors.hearAboutUs = "Please select an option";
    if (!formData.consent) newErrors.consent = "You must accept the privacy policy";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

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
    setFormData(initialFormData);
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