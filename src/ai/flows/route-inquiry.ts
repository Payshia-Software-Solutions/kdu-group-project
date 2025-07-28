'use server';

/**
 * @fileOverview Routes an inquiry to the most relevant company representatives based on the inquiry content.
 *
 * - routeInquiry - A function that handles the inquiry routing process.
 * - RouteInquiryInput - The input type for the routeInquiry function.
 * - RouteInquiryOutput - The return type for the routeInquiry function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RouteInquiryInputSchema = z.object({
  inquiry: z.string().describe('The content of the inquiry submitted by the site visitor.'),
});
export type RouteInquiryInput = z.infer<typeof RouteInquiryInputSchema>;

const RouteInquiryOutputSchema = z.object({
  relevantRepresentatives: z
    .array(z.string())
    .describe(
      'A list of the most relevant company representatives to respond to the inquiry.'
    ),
  reasoning: z.string().describe('The reasoning behind selecting these representatives.'),
});
export type RouteInquiryOutput = z.infer<typeof RouteInquiryOutputSchema>;

export async function routeInquiry(input: RouteInquiryInput): Promise<RouteInquiryOutput> {
  return routeInquiryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'routeInquiryPrompt',
  input: {schema: RouteInquiryInputSchema},
  output: {schema: RouteInquiryOutputSchema},
  prompt: `You are an expert in understanding the organizational structure of KDU Group Sri Lanka.  Based on the content of the inquiry, you will determine the most relevant company representatives to respond to the inquiry.

Inquiry: {{{inquiry}}}

Consider the following departments and their responsibilities:
- Sales: Handles inquiries related to new business opportunities and sales.
- Support: Handles inquiries related to existing customer support and technical issues.
- Marketing: Handles inquiries related to marketing campaigns and branding.
- HR: Handles inquiries related to job openings and employee relations.
- Finance: Handles inquiries related to financial matters.

List the most relevant representatives to respond to the inquiry, and briefly explain your reasoning for selecting them.
`,
});

const routeInquiryFlow = ai.defineFlow(
  {
    name: 'routeInquiryFlow',
    inputSchema: RouteInquiryInputSchema,
    outputSchema: RouteInquiryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
