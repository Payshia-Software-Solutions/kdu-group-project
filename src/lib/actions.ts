"use server";

import { z } from "zod";
import { routeInquiry } from "@/ai/flows/route-inquiry";
import { suggestContent } from "@/ai/flows/content-suggestions";

const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  inquiry: z.string().min(10, { message: "Inquiry must be at least 10 characters." }),
});

export async function handleContactForm(prevState: any, formData: FormData) {
  const validatedFields = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    inquiry: formData.get("inquiry"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  
  const inquiryText = `Subject: ${validatedFields.data.subject}\n\n${validatedFields.data.inquiry}`;

  try {
    const result = await routeInquiry({ inquiry: inquiryText });
    return {
      success: true,
      data: result,
    };
  } catch (error) {
    console.error(error);
    return {
      error: "An error occurred while processing your request. Please try again.",
    };
  }
}


export async function getAISuggestion(originalContent: string, context: string) {
    if (!originalContent || !context) {
        return { error: "Original content and context are required." };
    }

    try {
        const result = await suggestContent({ originalContent, context });
        return { success: true, suggestion: result.suggestedContent };
    } catch (error) {
        console.error("AI suggestion error:", error);
        return { error: "Failed to get AI suggestion." };
    }
}
