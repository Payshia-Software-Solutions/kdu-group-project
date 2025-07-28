
"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useEffect } from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Breadcrumb from "@/components/layout/breadcrumb";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Loader2, Send, CheckCircle, AlertCircle } from "lucide-react";
import { handleContactForm } from "@/lib/actions";
import { useToast } from "@/hooks/use-toast";
import Image from "next/image";
import { MotionDiv } from "@/components/ui/motion";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Sending...
        </>
      ) : (
        <>
          <Send className="mr-2 h-4 w-4" />
          Send Message
        </>
      )}
    </Button>
  );
}

export default function ContactPage() {
  const { toast } = useToast();
  const [state, formAction] = useFormState(handleContactForm, null);

  useEffect(() => {
    if (state?.success) {
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We will get back to you shortly.",
        variant: "default",
      });
    } else if (state?.error) {
      toast({
        title: "An Error Occurred",
        description: state.error,
        variant: "destructive",
      });
    }
  }, [state, toast]);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <MotionDiv direction="left">
          <section className="relative w-full h-[300px] md:h-[400px]">
            <Image
              src="https://placehold.co/1600x900.png"
              alt="Contact Us background"
              layout="fill"
              objectFit="cover"
              data-ai-hint="office building exterior"
            />
            <div className="absolute inset-0 bg-black/50 z-10" />
            <div className="relative z-20 h-full flex flex-col justify-end container mx-auto px-4 md:px-6 pb-12">
              <Breadcrumb
                items={[
                  { label: "Home", href: "/" },
                  { label: "Contact Us", href: "/contact" },
                ]}
              />
              <h1 className="text-4xl md:text-5xl font-bold font-headline text-white mt-4">
                Contact Us
              </h1>
            </div>
          </section>
        </MotionDiv>

        <MotionDiv direction="right">
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid md:grid-cols-2 gap-12">
                {/* Left Side: Contact Info & Map */}
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-bold font-headline mb-4">
                      Get In Touch
                    </h2>
                    <p className="text-muted-foreground">
                      We're here to help and answer any question you might have.
                      We look forward to hearing from you.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <MapPin className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold">Head Office</h3>
                        <p className="text-muted-foreground">
                          No. 490, Galle Road, Colombo 03, Sri Lanka
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Phone className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold">Phone</h3>
                        <p className="text-muted-foreground">
                          +94 11 2 123 456
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Mail className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold">Email</h3>
                        <p className="text-muted-foreground">
                          info@kdugroup.com
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="h-80 w-full rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src="https://placehold.co/800x600.png"
                      alt="Map to KDU Group head office"
                      width={800}
                      height={600}
                      className="w-full h-full object-cover"
                      data-ai-hint="city map"
                    />
                  </div>
                </div>

                {/* Right Side: Contact Form */}
                <Card className="p-8 shadow-lg">
                  <CardContent className="p-0">
                    <form action={formAction} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" name="name" placeholder="John Doe" />
                        {state?.errors?.name && (
                          <p className="text-sm text-destructive">
                            {state.errors.name[0]}
                          </p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="j.doe@example.com"
                        />
                        {state?.errors?.email && (
                          <p className="text-sm text-destructive">
                            {state.errors.email[0]}
                          </p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input
                          id="subject"
                          name="subject"
                          placeholder="e.g., Sales Inquiry"
                        />
                        {state?.errors?.subject && (
                          <p className="text-sm text-destructive">
                            {state.errors.subject[0]}
                          </p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="inquiry">Your Inquiry</Label>
                        <Textarea
                          id="inquiry"
                          name="inquiry"
                          placeholder="Please describe your inquiry in detail."
                          rows={5}
                        />
                        {state?.errors?.inquiry && (
                          <p className="text-sm text-destructive">
                            {state.errors.inquiry[0]}
                          </p>
                        )}
                      </div>
                      <SubmitButton />
                    </form>
                     {state?.success && state.data && (
                        <div className="mt-6 p-4 bg-green-100 border border-green-200 text-green-800 rounded-lg">
                            <div className="flex items-center gap-2 mb-2">
                                <CheckCircle className="h-5 w-5" />
                                <h4 className="font-semibold">Inquiry Routed!</h4>
                            </div>
                            <p className="text-sm">Your inquiry has been successfully routed to the following department(s): <strong>{state.data.relevantRepresentatives.join(', ')}</strong>.</p>
                            <p className="text-sm mt-1 text-green-700"><strong>Reasoning:</strong> {state.data.reasoning}</p>
                        </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </MotionDiv>
      </main>
      <Footer />
    </div>
  );
}
