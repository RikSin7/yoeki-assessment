import axios from '@/lib/axios';

const submitContactForm = async (contactData: any) => {
  const response = await axios.post('/api/contact', contactData);
  return response.data;
};

const contactService = {
  submitContactForm,
};

export default contactService;
