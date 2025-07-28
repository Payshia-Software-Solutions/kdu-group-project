// This file holds the content suggestion flow for generating alternative website copy.
// It exports the suggestContent function, SuggestContentInput type, and SuggestContentOutput type.

'use server';

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestContentInputSchema = z.object({
  originalContent: z.string().describe('The original content to be improved.'),
  context: z.string().describe('The context of the content, e.g., "About Us section", "Service description", etc.'),
});
export type SuggestContentInput = z.infer<typeof SuggestContentInputSchema>;

const SuggestContentOutputSchema = z.object({
  suggestedContent: z.string().describe('The AI-suggested alternative content.'),
});
export type SuggestContentOutput = z.infer<typeof SuggestContentOutputSchema>;

export async function suggestContent(input: SuggestContentInput): Promise<SuggestContentOutput> {
  return suggestContentFlow(input);
}

const suggestContentPrompt = ai.definePrompt({
  name: 'suggestContentPrompt',
  input: {schema: SuggestContentInputSchema},
  output: {schema: SuggestContentOutputSchema},
  prompt: `You are a professional copywriter specializing in creating engaging and professional content for corporate websites.

  Based on the original content and its context, generate an alternative version that is more engaging and professional.

  Original Content: {{{originalContent}}}
  Context: {{{context}}}

  Suggested Content:`, // Removed XML tags.
});

const suggestContentFlow = ai.defineFlow(
  {
    name: 'suggestContentFlow',
    inputSchema: SuggestContentInputSchema,
    outputSchema: SuggestContentOutputSchema,
  },
  async input => {
    const {output} = await suggestContentPrompt(input);
    return output!;
  }
);
