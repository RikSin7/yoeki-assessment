"use client";

import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import { useContactForm } from "@/hooks/useContactForm";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "../ui/sectionHeading";

export default function ContactForm() {
    const {
        formData,
        errors,
        status,
        error,
        handleChange,
        handleSubmit,
        resetForm,
    } = useContactForm();

    // ---------- SUCCESS STATE ----------
    if (status === "succeeded") {
        return (
            <section className="w-full bg-black min-h-[calc(100vh-6rem)] py-20 flex justify-center font-sans">
                <div className="max-w-[1440px] w-full mx-auto px-6 md:px-12 flex justify-center">
                    <div className="max-w-2xl w-full text-center flex flex-col items-center">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6"
                    >
                        <CheckCircle2 className="w-10 h-10 text-green-400" />
                    </motion.div>
                    <h2 className="text-white text-3xl md:text-5xl font-bold tracking-tight mb-4">
                        Thank You!
                    </h2>
                    <p className="text-gray-300 text-sm md:text-base mb-8">
                        We have received your message and will get back to you soon.
                    </p>
                    <Button onClick={resetForm}>Send Another Message</Button>
                </div>
              </div>
            </section>
        );
    }

    // ---------- FORM STATE ----------
    return (
        <section className="w-full bg-black min-h-[calc(100vh-6rem)] py-16 flex justify-center font-sans">
            <div className="max-w-[1440px] w-full mx-auto px-6 md:px-12 flex justify-center">
                <div className="max-w-4xl w-full">
                {/* Section Heading */}
                <SectionHeading
                    title="Infinite Possibilities Start with Indium"
                    subtitle="Have a question? Connect with our team by filling out the form below."
                    className="mb-12"
                />

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Top Inputs Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <Input
                            type="text"
                            name="location"
                            placeholder="Location"
                            value={formData.location}
                            onChange={handleChange}
                            required
                        />
                        <Input
                            type="email"
                            name="email"
                            placeholder="Official Email Address"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <Input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                        <Input
                            type="text"
                            name="jobTitle"
                            placeholder="Job Title"
                            value={formData.jobTitle}
                            onChange={handleChange}
                        />
                        <Input
                            type="text"
                            name="organization"
                            placeholder="Organization"
                            value={formData.organization}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Validation Errors for top fields */}
                    {["name", "location", "email", "phone", "organization"].map(
                        (field) =>
                            errors[field as keyof typeof errors] && (
                                <p key={field} className="text-red-400 text-xs -mt-4">
                                    {errors[field as keyof typeof errors]}
                                </p>
                            )
                    )}

                    {/* Project Start Date Radios */}
                    <div className="space-y-3 pt-2">
                        <p className="text-zinc-400 text-sm font-medium">
                            Project Start Date
                        </p>
                        <div className="flex flex-wrap gap-6">
                            {["Immediate", "1-3 Months", "6-12 Months"].map((option) => (
                                <label
                                    key={option}
                                    className="flex items-center gap-3 cursor-pointer group"
                                >
                                    <div className="relative flex items-center justify-center w-5 h-5 border border-primary rounded-sm bg-transparent group-hover:bg-primary/10 transition-colors">
                                        <input
                                            type="radio"
                                            name="projectDate"
                                            value={option}
                                            checked={formData.projectDate === option}
                                            onChange={handleChange}
                                            className="sr-only peer"
                                        />
                                        <div className="w-3 h-3 bg-primary rounded-sm opacity-0 peer-checked:opacity-100 transition-opacity" />
                                    </div>
                                    <span className="text-white text-app-sm font-medium">
                                        {option}
                                    </span>
                                </label>
                            ))}
                        </div>
                        {errors.projectDate && (
                            <p className="text-red-400 text-xs">{errors.projectDate}</p>
                        )}
                    </div>

                    {/* Textarea */}
                    <div className="pt-2">
                        <Input
                            isTextArea
                            name="requirement"
                            placeholder="Please Describe Your Requirement"
                            value={formData.requirement}
                            onChange={handleChange}
                            required
                        />
                        {errors.requirement && (
                            <p className="text-red-400 text-xs mt-1">{errors.requirement}</p>
                        )}
                    </div>

                    {/* Hear About Us Select */}
                    <div className="space-y-3 pt-2">
                        <p className="text-zinc-400 text-sm font-medium">
                            How Did You Hear About Us?
                        </p>
                        <div className="relative">
                            <select
                                name="hearAboutUs"
                                value={formData.hearAboutUs}
                                onChange={handleChange}
                                className="w-full bg-[#111111] text-zinc-300 p-4 rounded-sm outline-none focus:ring-1 focus:ring-primary appearance-none cursor-pointer text-app-sm"
                            >
                                <option value="" disabled>
                                    --Please choose an option--
                                </option>
                                <option value="search">Search Engine (Google, Bing)</option>
                                <option value="social">Social Media</option>
                                <option value="referral">Referral</option>
                                <option value="other">Other</option>
                            </select>
                            <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                                <svg
                                    className="w-4 h-4 text-zinc-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </div>
                        </div>
                        {errors.hearAboutUs && (
                            <p className="text-red-400 text-xs mt-1">{errors.hearAboutUs}</p>
                        )}
                    </div>

                    {/* Consent Checkbox */}
                    <div className="flex items-start gap-4 pt-6 pb-4">
                        <label className="relative flex items-center justify-center w-5 h-5 border border-primary rounded-sm bg-transparent mt-1 shrink-0 cursor-pointer">
                            <input
                                type="checkbox"
                                name="consent"
                                checked={formData.consent}
                                onChange={handleChange}
                                className="absolute inset-0 opacity-0 cursor-pointer peer"
                            />

                            <div className="w-3 h-3 bg-primary rounded-sm opacity-0 peer-checked:opacity-100 transition-opacity" />
                        </label>
                        <p className="text-zinc-400 text-xs leading-relaxed max-w-3xl">
                            By providing your personal information (name, contact number, and
                            email address), you consent to Indium collecting, storing, and
                            using this data to send you updates, job openings, and related
                            communications. Your data will be retained for a period of 5 years
                            in accordance with our Data Back up and Restoration Policy. You
                            have the right to withdraw your consent at any time. However,
                            please note that withdrawing consent may affect our ability to
                            provide you with the information or services you have requested.
                            For more details, please review our{" "}
                            <a href="#" className="text-primary hover:underline">
                                Privacy Policy
                            </a>{" "}
                            for Terms and Conditions.
                        </p>
                    </div>
                    {errors.consent && (
                        <p className="text-red-400 text-xs -mt-4">{errors.consent}</p>
                    )}

                    {/* API Error Message */}
                    {error && (
                        <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="p-4 bg-red-500/10 border border-red-500/20 rounded-sm"
                        >
                            <p className="text-sm text-red-400">{error}</p>
                        </motion.div>
                    )}

                    {/* Submit Button */}
                    <div className="flex justify-center pt-4">
                        <Button type="submit" isLoading={status === "loading"}>
                            Submit
                        </Button>
                    </div>
                </form>
            </div>
          </div>
        </section>
    );
}