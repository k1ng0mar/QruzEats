'use server';
// Recommends food from the catalog for a natural language query.

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import { findProducts } from '../tools/find-products';

const RecommendFoodInputSchema = z.object({
  query: z.string().describe('The user\'s request, mood, or specific craving for a food recommendation.'),
});
export type RecommendFoodInput = z.infer<typeof RecommendFoodInputSchema>;

const RecommendedProductSchema = z.object({
  productName: z.string(),
  productId: z.string(),
  productImage: z.string(),
  price: z.number(),
  vendorName: z.string(),
  vendorId: z.string(),
});

const RecommendFoodOutputSchema = z.object({
  response: z.string().describe("A friendly and helpful textual response to the user's query. This could be an introduction to the recommendations, or a message saying no products were found."),
  recommendations: z.array(RecommendedProductSchema).describe('An array of recommended products that match the user\'s query. Can be empty if no relevant products are found.')
});
export type RecommendFoodOutput = z.infer<typeof RecommendFoodOutputSchema>;

export async function recommendFood(input: RecommendFoodInput): Promise<RecommendFoodOutput> {
  return recommendFoodFlow(input);
}

const prompt = ai.definePrompt({
  name: 'recommendFoodPrompt',
  input: {schema: RecommendFoodInputSchema},
  output: {schema: RecommendFoodOutputSchema},
  tools: [findProducts],
  prompt: `You are a helpful and friendly food recommendation assistant for QruzEats. Your goal is to help users find delicious food from our vendors.

A user will tell you what they are in the mood for. Your task is to:
1.  Use the 'findProducts' tool to search for food items based on the user's query. The search term should be a concise summary of their request (e.g., 'spicy rice', 'chicken burger', 'amala').
2.  If the tool returns products, craft a friendly introductory response and present the products.
3.  If the tool returns no results, respond kindly and inform the user that you couldn't find a match for their request at the moment.

User query: {{{query}}}`,
});

const recommendFoodFlow = ai.defineFlow(
  {
    name: 'recommendFoodFlow',
    inputSchema: RecommendFoodInputSchema,
    outputSchema: RecommendFoodOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    if (!output) {
      return {
        response: "I'm sorry, I had trouble coming up with a recommendation. Please try again!",
        recommendations: [],
      };
    }
    return output;
  }
);
