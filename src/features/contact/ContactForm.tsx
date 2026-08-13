"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Loader2, ArrowRight, CircleCheck } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Full Name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(9, "Valid phone number is required"),
  company: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(20, "Please provide more details about your inquiry (at least 20 characters)"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [isSent, setIsSent] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setSubmitError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ kind: "contact", ...data }),
      });

      if (!response.ok) {
        const result = await response.json().catch(() => null);
        setSubmitError(result?.error ?? "We could not send your inquiry. Please try again.");
        return;
      }

      setIsSent(true);
    } catch {
      setSubmitError("We could not send your inquiry. Please check your connection and try again.");
    }
  };

  if (isSent) {
    return (
      <div role="status" className="flex min-h-[420px] flex-col items-center justify-center border border-brand-navy/10 border-t-4 border-t-brand-gold bg-white p-8 text-center shadow-soft">
        <CircleCheck className="h-14 w-14 text-brand-gold" aria-hidden="true" />
        <p className="eyebrow mt-6 text-brand-copper">Message sent</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-navy">Thank you for contacting us.</h2>
        <p className="mt-4 max-w-md leading-7 text-brand-grey">Your inquiry has been delivered. A Mak Shield advisor will contact you shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 bg-white p-5 sm:p-6 md:p-8 border border-brand-navy/10 border-t-4 border-t-brand-navy shadow-soft">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-medium text-brand-navy">Full Name</label>
          <Input
            id="name"
            {...register("name")}
            className="h-11 rounded-none bg-brand-ivory text-base px-4 border-brand-navy/10 focus-visible:ring-brand-accent"
            placeholder="John Doe"
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-brand-navy">Email Address</label>
          <Input
            id="email"
            type="email"
            {...register("email")}
            className="h-11 rounded-none bg-brand-ivory text-base px-4 border-brand-navy/10 focus-visible:ring-brand-accent"
            placeholder="john@company.co.ke"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="phone" className="block text-sm font-medium text-brand-navy">Phone Number</label>
        <Input
          id="phone"
          type="tel"
          {...register("phone")}
          className="h-11 rounded-none bg-brand-ivory text-base px-4 border-brand-navy/10 focus-visible:ring-brand-accent"
          placeholder="+254 7XX XXX XXX"
        />
        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
      </div>

      <div className="space-y-2">
        <label htmlFor="company" className="block text-sm font-medium text-brand-navy">Company (Optional)</label>
        <Input
          id="company"
          {...register("company")}
          className="h-11 rounded-none bg-brand-ivory text-base px-4 border-brand-navy/10 focus-visible:ring-brand-accent"
          placeholder="Acme Corp"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-brand-navy">Interested Service</label>
        <Select onValueChange={(value) => setValue("service", value)}>
          <SelectTrigger className="w-full h-11 rounded-none bg-brand-ivory text-base px-4 border-brand-navy/10 focus-visible:ring-brand-accent">
            <SelectValue placeholder="Select a service category..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="corporate">Corporate &amp; Commercial Risk</SelectItem>
            <SelectItem value="medical">Medical &amp; Health Insurance</SelectItem>
            <SelectItem value="property">Property &amp; Asset Insurance</SelectItem>
            <SelectItem value="advisory">Risk Management Advisory</SelectItem>
            <SelectItem value="claims">Claims Management</SelectItem>
            <SelectItem value="other">Other Inquiry</SelectItem>
          </SelectContent>
        </Select>
        {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service.message}</p>}
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="block text-sm font-medium text-brand-navy">How can we help?</label>
        <Textarea
          id="message"
          {...register("message")}
          rows={5}
          className="min-h-28 rounded-none bg-brand-ivory text-base px-4 py-3 border-brand-navy/10 focus-visible:ring-brand-accent resize-y"
          placeholder="Please describe your risk management needs or inquiry in detail..."
        />
        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
      </div>

      <Button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full bg-brand-gold hover:bg-brand-navy text-brand-navy hover:text-white h-12 text-xs font-bold uppercase tracking-[.15em] transition-colors group rounded-none"
      >
        {isSubmitting ? (
          <Loader2 className="w-6 h-6 animate-spin text-white" />
        ) : (
          <span className="flex items-center gap-3">
            Request Consultation
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </span>
        )}
      </Button>
      {submitError && <p role="alert" className="text-sm text-red-600">{submitError}</p>}
    </form>
  );
}
