'use server';
// Genkit tool that searches vendor products by text.

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import { vendors } from '@/lib/data';
import Fuse from 'fuse.js';

const ProductSearchInputSchema = z.object({
  query: z.string().describe('The search query for a food product.'),
});

const ProductSearchResultSchema = z.array(
    z.object({
        productName: z.string(),
        productId: z.string(),
        productImage: z.string(),
        price: z.number(),
        vendorName: z.string(),
        vendorId: z.string(),
    })
);

export const findProducts = ai.defineTool(
  {
    name: 'findProducts',
    description: 'Searches for food products across all vendors based on a query.',
    inputSchema: ProductSearchInputSchema,
    outputSchema: ProductSearchResultSchema,
  },
  async (input) => {
    const allProducts = vendors.flatMap(vendor => 
        (vendor.products || []).map(product => ({
            ...product,
            vendorName: vendor.name,
            vendorId: vendor.id
        }))
    );

    const fuse = new Fuse(allProducts, {
        keys: ['name', 'vendorName'],
        includeScore: true,
        threshold: 0.4,
    });

    const results = fuse.search(input.query);

    // Map and rename fields to match the output schema
    return results.slice(0, 5).map(result => ({
        productName: result.item.name,
        productId: result.item.id,
        productImage: result.item.image,
        price: result.item.price,
        vendorName: result.item.vendorName,
        vendorId: result.item.vendorId,
    }));
  }
);
