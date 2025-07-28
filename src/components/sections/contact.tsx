"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { handleContactForm } from "@/lib/actions";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Lightbulb, Loader2, Mail, MapPin, Phone } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  inquiry: z.string().min(10, { message: "Inquiry must be at least 10 characters." }),
});

type FormData = z.infer<typeof contactSchema>;

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
      Send Inquiry
    </Button>
  );
}

export default function Contact() {
  const { toast } = useToast();
  const [formResult, setFormResult] = useState<any>(null);

  const [state, formAction] = useFormState(handleContactForm, {
    errors: {},
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", subject: "", inquiry: "" },
  });

  useEffect(() => {
    if (state?.success) {
      toast({
        title: "Inquiry Sent!",
        description: "Thank you for contacting us. We will get back to you shortly.",
      });
      setFormResult(state.data);
      reset();
    } else if (state?.error) {
      toast({
        title: "Error",
        description: state.error,
        variant: "destructive",
      });
    }
  }, [state, toast, reset]);

  const allErrors = { ...errors, ...state.errors };

  return (
    <section id="contact" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl">Contact Us</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Have a question or a project in mind? We'd love to hear from you.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold font-headline">Get in Touch</h3>
            <div className="space-y-4 text-muted-foreground">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-primary mt-1" />
                <p>KDU Group Tower, 123 Galle Road, Colombo 03, Sri Lanka</p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="h-6 w-6 text-primary" />
                <p>+94 11 234 5678</p>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="h-6 w-6 text-primary" />
                <p>info@kdugroup.lk</p>
              </div>
            </div>
            {formResult && (
              <Alert className="mt-8 bg-accent/30">
                <Lightbulb className="h-4 w-4 text-accent-foreground" />
                <AlertTitle className="font-headline text-accent-foreground">Inquiry Routing Analysis</AlertTitle>
                <AlertDescription className="text-accent-foreground/80">
                  <p className="font-semibold mt-2">Relevant Representatives:</p>
                  <ul className="list-disc list-inside">
                    {formResult.relevantRepresentatives.map((rep: string) => <li key={rep}>{rep}</li>)}
                  </ul>
                  <p className="font-semibold mt-2">Reasoning:</p>
                  <p>{formResult.reasoning}</p>
                </AlertDescription>
              </Alert>
            )}
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Send us a message</CardTitle>
              <CardDescription>Fill out the form below and we'll be in touch.</CardDescription>
            </CardHeader>
            <CardContent>
              <form action={formAction} className="space-y-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" {...register("name")} />
                  {allErrors.name && <p className="text-destructive text-sm mt-1">{allErrors.name[0]}</p>}
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" {...register("email")} />
                  {allErrors.email && <p className="text-destructive text-sm mt-1">{allErrors.email[0]}</p>}
                </div>
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" {...register("subject")} />
                  {allErrors.subject && <p className="text-destructive text-sm mt-1">{allErrors.subject[0]}</p>}
                </div>
                <div>
                  <Label htmlFor="inquiry">Inquiry</Label>
                  <Textarea id="inquiry" rows={5} {...register("inquiry")} />
                  {allErrors.inquiry && <p className="text-destructive text-sm mt-1">{allErrors.inquiry[0]}</p>}
                </div>
                <SubmitButton />
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
