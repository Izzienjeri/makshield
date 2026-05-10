"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Loader2, ArrowRight } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(9, "Valid phone number is required"),
  company: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Please provide more details about your inquiry"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    // TanStack Query mutation
    await new Promise((resolve) => setTimeout(resolve, 1500)); 
    console.log(data);
    reset();
    alert("Inquiry submitted successfully. Our team will contact you shortly.");
  };

  return (
    // Notice: shadow-soft and border-brand-grey-light map directly to our globals.css
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white p-8 rounded-xl shadow-soft border border-brand-grey-light">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-brand-navy">Full Name</label>
          <input
            {...register("name")}
            className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-navy outline-none transition-all"
            placeholder="John Doe"
          />
          {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-brand-navy">Email Address</label>
          <input
            {...register("email")}
            className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-navy outline-none transition-all"
            placeholder="john@company.com"
          />
          {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-brand-navy">Interested Service</label>
        <select
          {...register("service")}
          className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-navy outline-none bg-white transition-all"
        >
          <option value="">Select a service category...</option>
          <option value="corporate">Corporate & Commercial Risk</option>
          <option value="medical">Medical & Health Insurance</option>
          <option value="property">Property & Asset Insurance</option>
          <option value="advisory">Risk Management Advisory</option>
        </select>
        {errors.service && <p className="text-red-500 text-xs">{errors.service.message}</p>}
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-brand-navy">How can we help?</label>
        <textarea
          {...register("message")}
          rows={4}
          className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-navy outline-none transition-all resize-none"
          placeholder="Please describe your risk management needs..."
        />
        {errors.message && <p className="text-red-500 text-xs">{errors.message.message}</p>}
      </div>

      <Button 
        type="submit" 
        disabled={isSubmitting}
        // Notice: hover:bg-brand-navy-light
        className="w-full bg-brand-navy hover:bg-brand-navy-light text-white h-12 text-lg transition-colors group"
      >
        {isSubmitting ? (
          <Loader2 className="w-5 h-5 animate-spin" />
        ) : (
          <span className="flex items-center gap-2">
            Request Consultation
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </span>
        )}
      </Button>
    </form>
  );
}