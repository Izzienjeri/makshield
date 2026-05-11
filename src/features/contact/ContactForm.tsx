"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Loader2, ArrowRight } from "lucide-react";

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
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
    reset();
    alert("Thank you! Your inquiry has been submitted successfully. Our team will contact you shortly.");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 bg-white p-10 rounded-xl shadow-float border border-brand-grey-light/70">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-medium text-brand-navy">Full Name</label>
          <Input
            id="name"
            {...register("name")}
            className="h-12 text-base px-4 border-brand-grey-light focus-visible:ring-brand-accent"
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
            className="h-12 text-base px-4 border-brand-grey-light focus-visible:ring-brand-accent"
            placeholder="john@company.com"
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
          className="h-12 text-base px-4 border-brand-grey-light focus-visible:ring-brand-accent"
          placeholder="+254 7XX XXX XXX"
        />
        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
      </div>

      <div className="space-y-2">
        <label htmlFor="company" className="block text-sm font-medium text-brand-navy">Company (Optional)</label>
        <Input
          id="company"
          {...register("company")}
          className="h-12 text-base px-4 border-brand-grey-light focus-visible:ring-brand-accent"
          placeholder="Acme Corp"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-brand-navy">Interested Service</label>
        <Select onValueChange={(value) => setValue("service", value)}>
          <SelectTrigger className="w-full h-12 text-base px-4 border-brand-grey-light focus-visible:ring-brand-accent">
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
          className="min-h-32 text-base px-4 py-3 border-brand-grey-light focus-visible:ring-brand-accent resize-y"
          placeholder="Please describe your risk management needs or inquiry in detail..."
        />
        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
      </div>

      <Button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full bg-brand-accent hover:bg-brand-accent/90 text-white h-14 text-lg transition-colors group rounded-sm shadow-soft"
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
    </form>
  );
}
