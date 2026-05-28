import dynamic from "next/dynamic";

const ContactForm = dynamic(
  () => import("@/components/sections/contactForm"),
  {
    loading: () => (
      <div className="bg-black min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-[#EF7D25] border-t-transparent rounded-full animate-spin" />
      </div>
    ),
  }
);

export default function ContactPage() {
  return <ContactForm />;
}