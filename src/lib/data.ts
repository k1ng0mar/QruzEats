import {Dessert, GlassWater, Cookie, ShoppingBasket, Pill} from 'lucide-react';
import React from 'react';

// The SvgIcon component was moved to src/app/search/page.tsx to fix a parsing error.
// This file should only contain data exports.

export const topCategories = [
    { name: "Grills", icon: React.createElement('svg', {width:"32", height:"32", viewBox:"0 0 24 24", fill:"none", stroke:"currentColor", strokeWidth:"1.5", strokeLinecap:"round", strokeLinejoin:"round", className:"text-primary"}, React.createElement('path', {d: "M8.5 10.5c3.25-1 4.5-2.25 4.5-3.5 0-1.5-1.5-2.5-3-2.5-2.5 0-4.5 2-4.5 4.5"}), React.createElement('path', {d: "M11 14v7"})) },
    { name: "Rice Dishes", icon: React.createElement('svg', {width:"32", height:"32", viewBox:"0 0 24 24", fill:"none", stroke:"currentColor", strokeWidth:"1.5", strokeLinecap:"round", strokeLinejoin:"round", className:"text-primary"}, React.createElement('path', {d: "M2 12.25V12a10 10 0 115.93-9.14"}), React.createElement('path', {d: "M12.5 7.5L22 12l-4-1-3.5-4Z"})) },
    { name: "Swallow", icon: React.createElement('svg', {width:"32", height:"32", viewBox:"0 0 24 24", fill:"none", stroke:"currentColor", strokeWidth:"1.5", strokeLinecap:"round", strokeLinejoin:"round", className:"text-primary"}, React.createElement('path', {d: "M12 2a10 10 0 106.33 17.67"}), React.createElement('path', {d: "M12 2a10 10 0 11-6.33 17.67"})) },
    { name: "Desserts", icon: React.createElement(Dessert, {className: "w-8 h-8 text-primary"}) },
    { name: "Drinks", icon: React.createElement(GlassWater, {className: "w-8 h-8 text-primary"}) },
    { name: "Snacks", icon: React.createElement(Cookie, {className: "w-8 h-8 text-primary"}) },
    { name: "Groceries", icon: React.createElement(ShoppingBasket, {className: "w-8 h-8 text-primary"}) },
    { name: "Pharmacy", icon: React.createElement(Pill, {className: "w-8 h-8 text-primary"}) },
];

export const recentSearches = [
    { name: "BBQ Chicken Burger", context: "Grill House", image: "https://placehold.co/100x100.png", type: "product" },
    { name: "Wellcare Supermarket", context: "No. 10 Gashash Road, Kano", image: "https://placehold.co/100x100.png", type: "store" },
];


export const promotions = [
  { image: "https://placehold.co/600x300.png", alt: "Promotion 1" },
  { image: "https://placehold.co/600x300.png", alt: "Promotion 2" },
  { image: "https://placehold.co/600x300.png", alt: "Promotion 3" },
];

export const popularStores = [
    { id: "sidi-and-sons", name: "Sidi & Sons", logo: "https://placehold.co/140x96.png", distance: "900 m", rating: 5 },
    { id: "smile-store", name: "Smile Store", logo: "https://placehold.co/140x96.png", distance: "1 km", rating: 5 },
    { id: "groceryhub", name: "GroceryHub", logo: "https://placehold.co/140x96.png", distance: "1.2 km", rating: 4.5 },
    { id: "quickmart", name: "QuickMart", logo: "https://placehold.co/140x96.png", distance: "1.5 km", rating: 4.3 },
];

export const vendors = [
  {
    id: "afrocon",
    name: "Afrocon",
    image: "https://placehold.co/200x150.png",
    rating: 5,
    deliveryTime: "30-35 min",
    logo: "https://placehold.co/40x40.png",
    price: 7000,
    distance: "200 m",
    priceRange: "$$$",
    tags: ["Food", "Rice Dishes", "Nigerian"],
    products: [
      { id: 'jollof-chicken', name: 'Jollof Rice & Chicken', price: 3500, image: 'https://placehold.co/100x100.png' },
      { id: 'fried-plantain', name: 'Fried Plantain (Dodo)', price: 1500, image: 'https://placehold.co/100x100.png' },
    ]
  },
  {
    id: "grill-house",
    name: "Grill House K...",
    image: "https://placehold.co/200x150.png",
    rating: 5,
    deliveryTime: "10-25 min",
    logo: "https://placehold.co/40x40.png",
    price: 7000,
    distance: "800 m",
    priceRange: "$$$",
    tags: ["Food", "Grills"],
    products: [
        { id: 'bbq-burger', name: 'BBQ Chicken Burger', price: 4500, image: 'https://placehold.co/100x100.png' },
        { id: 'suya-platter', name: 'Full Chicken Suya', price: 4000, image: 'https://placehold.co/100x100.png' },
    ]
  },
  {
    id: "sidi-and-sons",
    name: "Sidi & Sons",
    image: "https://placehold.co/200x150.png",
    rating: 5,
    deliveryTime: "60+ min",
    logo: "https://placehold.co/40x40.png",
    price: 500,
    distance: "700 m",
    priceRange: "$",
    tags: ["Supermarkets", "Groceries"],
    products: [
        { id: 'indomie', name: 'Indomie Noodles Carton', price: 8000, image: 'https://placehold.co/100x100.png' },
        { id: 'milk', name: 'Peak Milk Sachet', price: 500, image: 'https://placehold.co/100x100.png' },
    ]
  },
  {
    id: "life-pharmacy",
    name: "Life Pharmacy",
    image: "https://placehold.co/200x150.png",
    rating: 5,
    deliveryTime: "30-35 min",
    logo: "https://placehold.co/40x40.png",
    price: 2000,
    distance: "900 m",
    priceRange: "$$",
    tags: ["Pharmacy"],
    products: [
        { id: 'panadol', name: 'Panadol Extra', price: 500, image: 'https://placehold.co/100x100.png' },
        { id: 'vitamin-c', name: 'Vitamin C Tablets', price: 1500, image: 'https://placehold.co/100x100.png' },
    ]
  },
  {
    id: "mama-delight",
    name: "Mama's Delight",
    image: "https://placehold.co/200x150.png",
    rating: 4.8,
    deliveryTime: "25-30 min",
    logo: "https://placehold.co/40x40.png",
    price: 2500,
    distance: "1.2 km",
    priceRange: "$$",
    tags: ["Food", "Swallow", "Nigerian"],
    products: [
        { id: 'amala', name: 'Amala with Ewedu & Gbegiri', price: 2500, image: 'https://placehold.co/100x100.png' },
        { id: 'fura', name: 'Fura da Nono', price: 1000, image: 'https://placehold.co/100x100.png' },
    ]
  },
  {
    id: "kakas-kitchen",
    name: "Kaka's Kitchen",
    image: "https://placehold.co/200x150.png",
    rating: 4.9,
    deliveryTime: "20-25 min",
    logo: "https://placehold.co/40x40.png",
    price: 3000,
    distance: "500 m",
    priceRange: "$$",
    tags: ["Food", "Rice Dishes", "Grills"],
    products: [
        { id: 'chicken-wings', name: 'Spicy Chicken Wings', price: 3000, image: 'https://placehold.co/100x100.png' },
        { id: 'ram-suya', name: 'Ram Suya Skewers', price: 3500, image: 'https://placehold.co/100x100.png' },
    ]
  },
  {
    id: "wellcare-supermarket",
    name: "Wellcare Supermarket",
    image: "https://placehold.co/200x150.png",
    rating: 4.5,
    deliveryTime: "45-60 min",
    logo: "https://placehold.co/40x40.png",
    price: 1000,
    distance: "2.5 km",
    priceRange: "$",
    tags: ["Supermarkets", "Groceries"],
    products: [
        { id: 'bread', name: 'Sliced Bread', price: 800, image: 'https://placehold.co/100x100.png' },
        { id: 'eggs', name: 'Crate of Eggs', price: 3000, image: 'https://placehold.co/100x100.png' },
    ]
  },
  {
    id: "healthplus-pharmacy",
    name: "HealthPlus Pharmacy",
    image: "https://placehold.co/200x150.png",
    rating: 4.7,
    deliveryTime: "15-20 min",
    logo: "https://placehold.co/40x40.png",
    price: 1500,
    distance: "300 m",
    priceRange: "$$",
    tags: ["Pharmacy"],
    products: [
        { id: 'cough-syrup', name: 'Cough Syrup', price: 1200, image: 'https://placehold.co/100x100.png' },
        { id: 'plasters', name: 'Band-Aids Pack', price: 400, image: 'https://placehold.co/100x100.png' },
    ]
  },
  {
    id: "sweet-treats",
    name: "Sweet Treats",
    image: "https://placehold.co/200x150.png",
    rating: 4.6,
    deliveryTime: "30-40 min",
    logo: "https://placehold.co/40x40.png",
    price: 1500,
    distance: "1.8 km",
    priceRange: "$",
    tags: ["Food", "Desserts", "Snacks"],
    products: [
        { id: 'ice-cream', name: 'Vanilla Ice Cream Tub', price: 2500, image: 'https://placehold.co/100x100.png' },
        { id: 'doughnuts', name: 'Dozen Doughnuts', price: 3000, image: 'https://placehold.co/100x100.png' },
    ]
  },
  {
    id: "fresh-mart",
    name: "FreshMart",
    image: "https://placehold.co/200x150.png",
    rating: 4.8,
    deliveryTime: "35-45 min",
    logo: "https://placehold.co/40x40.png",
    price: 2000,
    distance: "2.1 km",
    priceRange: "$$",
    tags: ["Supermarkets", "Groceries"],
     products: [
        { id: 'apples', name: 'Fresh Apples (1kg)', price: 2000, image: 'https://placehold.co/100x100.png' },
        { id: 'carrots', name: 'Carrots (Bag)', price: 1000, image: 'https://placehold.co/100x100.png' },
    ]
  },
  {
    id: "city-pharmacy",
    name: "City Pharmacy",
    image: "https://placehold.co/200x150.png",
    rating: 4.4,
    deliveryTime: "20-30 min",
    logo: "https://placehold.co/40x40.png",
    price: 800,
    distance: "1.1 km",
    priceRange: "$",
    tags: ["Pharmacy"],
     products: [
        { id: 'painkillers', name: 'Ibuprofen', price: 800, image: 'https://placehold.co/100x100.png' },
        { id: 'antiseptic', name: 'Antiseptic Wipes', price: 600, image: 'https://placehold.co/100x100.png' },
    ]
  },
  {
    id: "global-bites",
    name: "Global Bites",
    image: "https://placehold.co/200x150.png",
    rating: 4.7,
    deliveryTime: "40-50 min",
    logo: "https://placehold.co/40x40.png",
    price: 5000,
    distance: "3.5 km",
    priceRange: "$$$",
    tags: ["Food", "International"],
     products: [
        { id: 'pizza', name: 'Margherita Pizza', price: 6000, image: 'https://placehold.co/100x100.png' },
        { id: 'pasta', name: 'Chicken Alfredo Pasta', price: 5500, image: 'https://placehold.co/100x100.png' },
    ]
  },
  {
    id: "corner-shop",
    name: "The Corner Shop",
    image: "https://placehold.co/200x150.png",
    rating: 4.9,
    deliveryTime: "5-10 min",
    logo: "https://placehold.co/40x40.png",
    price: 300,
    distance: "100 m",
    priceRange: "$",
    tags: ["Supermarkets", "Snacks", "Drinks"],
     products: [
        { id: 'coke', name: 'Coca-Cola Can', price: 300, image: 'https://placehold.co/100x100.png' },
        { id: 'water', name: 'Bottled Water', price: 200, image: 'https://placehold.co/100x100.png' },
    ]
  },
    {
    id: "dan-wake-spot",
    name: "Dan Wake Spot",
    image: "https://placehold.co/200x150.png",
    rating: 4.9,
    deliveryTime: "15-20 min",
    logo: "https://placehold.co/40x40.png",
    price: 1500,
    distance: "600m",
    priceRange: "$",
    tags: ["Food", "Nigerian", "Swallow"],
     products: [
        { id: 'dan-wake', name: 'Dan Wake Special', price: 1500, image: 'https://placehold.co/100x100.png' },
        { id: 'zobo', name: 'Zobo Drink', price: 500, image: 'https://placehold.co/100x100.png' },
    ]
  }
];


export const curatedMarkets = [
  {
    name: "Dawanau Market",
    image: "https://placehold.co/600x400/4F3D56/E6E0E9.png?text=Dawanau",
    rating: 4.7,
    deliveryTime: "15-25 min",
    distance: "0.5 km",
  },
  {
    name: "Kasuwar Kurmi",
    image: "https://placehold.co/600x400/4F3D56/E6E0E9.png?text=Kurmi",
    rating: 4.8,
    deliveryTime: "20-30 min",
    distance: "1.2 km",
  },
   {
    name: "Yan Lemo Market",
    image: "https://placehold.co/600x400/4F3D56/E6E0E9.png?text=Yan+Lemo",
    rating: 4.6,
    deliveryTime: "25-35 min",
    distance: "2.1 km",
  },
];

export const featuredCuisines = [
  {
    name: "Masa",
    shortDescription: "A fluffy, rice-based pancake, a beloved staple.",
    longDescription: `Masa, also known as Waina, is a popular Northern Nigerian food item that resembles a pan-fried rice cake or pancake. It is made from a fermented batter of non-parboiled rice, which gives it a slightly sour and tangy taste. The batter is cooked in a special pan with circular indentations, similar to a Danish Aebleskiver pan, which gives Masa its characteristic round and puffy shape.

Traditionally, Masa is enjoyed as a breakfast food or a snack throughout the day. It can be eaten plain or served with a variety of accompaniments, most commonly Miyan Taushe (a savory pumpkin stew) or a sweet syrup. Its soft, spongy texture and unique flavor make it a versatile and cherished dish in Arewa culture.`,
    image: "https://placehold.co/600x400/633d4f/E6E0E9.png?text=Masa",
    origin: "Originated from the Hausa people of Northern Nigeria.",
    culturalSignificance: "Often served during weddings, naming ceremonies, and other celebrations.",
    bestTimeToEnjoy: "Commonly eaten for breakfast or as a light evening meal.",
  },
  {
    name: "Jollof Rice",
    shortDescription: "The crown jewel of West African cuisine.",
    longDescription: `Jollof rice is a one-pot rice dish cooked across West Africa. The base is rice, tomatoes, tomato paste, onions, scotch bonnet peppers, salt, and spices. It shows up at celebrations, family gatherings, and everyday meals.

Its origins trace to the Senegambian region, and Nigeria and Ghana each have their own version. Nigerian Jollof gets its smoky flavor from cooking over an open fire until a layer of burnt rice forms at the bottom of the pot.`,
    image: "https://placehold.co/600x400/633d4f/E6E0E9.png?text=Jollof",
    origin: "Traced back to the Senegambian region, now a West African icon.",
    culturalSignificance: "An essential dish at parties, celebrations, and family gatherings.",
    bestTimeToEnjoy: "Any time! Perfect for lunch, dinner, or any festive occasion.",
  },
  {
    name: "Suya",
    shortDescription: "Spiced grilled meat skewers - the king of Nigerian street food.",
    longDescription: `Suya is a spicy skewered meat, which is a popular food item in West Africa. It is traditionally prepared by the Hausa people of Northern Nigeria, Cameroon, Niger, and some parts of Sudan. Suya is generally made with skewered beef, ram, or chicken. Innards such as kidney, liver and tripe are also used. The thinly sliced meat is marinated in various spices which include peanut cake, salt, vegetable oil and other flavorings, and then barbecued.`,
    image: "https://placehold.co/600x400/633d4f/E6E0E9.png?text=Suya",
    origin: "Originated from the Hausa people of Northern Nigeria.",
    culturalSignificance: "A popular evening snack, best enjoyed with friends and cold drinks.",
    bestTimeToEnjoy: "Perfect for evening meals or as a late-night snack.",
  }
];
