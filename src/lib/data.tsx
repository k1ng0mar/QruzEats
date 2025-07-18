import {Dessert, GlassWater, Cookie, ShoppingBasket, Pill} from 'lucide-react';
import React from 'react';

const SvgIcon = ({ d, d2 }: { d: string, d2?: string }) => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
        <path d={d}></path>
        {d2 && <path d={d2}></path>}
    </svg>
);


export const topCategories = [
    { name: "Grills", icon: <SvgIcon d="M8.5 10.5c3.25-1 4.5-2.25 4.5-3.5 0-1.5-1.5-2.5-3-2.5-2.5 0-4.5 2-4.5 4.5" d2="M11 14v7" /> },
    { name: "Rice Dishes", icon: <SvgIcon d="M2 12.25V12a10 10 0 115.93-9.14" d2="M12.5 7.5L22 12l-4-1-3.5-4Z" /> },
    { name: "Swallow", icon: <SvgIcon d="M12 2a10 10 0 106.33 17.67" d2="M12 2a10 10 0 11-6.33 17.67" /> },
    { name: "Desserts", icon: <Dessert className="w-8 h-8 text-primary"/> },
    { name: "Drinks", icon: <GlassWater className="w-8 h-8 text-primary"/> },
    { name: "Snacks", icon: <Cookie className="w-8 h-8 text-primary"/> },
    { name: "Groceries", icon: <ShoppingBasket className="w-8 h-8 text-primary"/> },
    { name: "Pharmacy", icon: <Pill className="w-8 h-8 text-primary"/> },
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
    { name: "Sidi & Sons", logo: "https://placehold.co/140x96.png", distance: "900 m", rating: 5, id: 'sidi-sons-3' },
    { name: "Smile Store", logo: "https://placehold.co/140x96.png", distance: "1 km", rating: 5, id: 'smile-store-15' },
    { name: "GroceryHub", logo: "https://placehold.co/140x96.png", distance: "1.2 km", rating: 4.5, id: 'groceryhub-16' },
    { name: "QuickMart", logo: "https://placehold.co/140x96.png", distance: "1.5 km", rating: 4.3, id: 'quickmart-17' },
];


export const vendors = [
  {
    id: "afrocon-1",
    name: "Afrocon",
    image: "https://placehold.co/200x150.png",
    rating: 5,
    deliveryTime: "30-35 min",
    logo: "https://placehold.co/80x80.png",
    price: 7000,
    distance: "200 m",
    priceRange: "$$$",
    tags: ["Food", "Rice Dishes", "Nigerian"]
  },
  {
    id: "grill-house-2",
    name: "Grill House K...",
    image: "https://placehold.co/200x150.png",
    rating: 5,
    deliveryTime: "10-25 min",
    logo: "https://placehold.co/80x80.png",
    price: 7000,
    distance: "800 m",
    priceRange: "$$$",
    tags: ["Food", "Grills"]
  },
  {
    id: "sidi-sons-3",
    name: "Sidi & Sons",
    image: "https://placehold.co/200x150.png",
    rating: 5,
    deliveryTime: "60+ min",
    logo: "https://placehold.co/80x80.png",
    price: 500,
    distance: "700 m",
    priceRange: "$",
    tags: ["Supermarkets", "Groceries"]
  },
  {
    id: "life-pharmacy-4",
    name: "Life Pharmacy",
    image: "https://placehold.co/200x150.png",
    rating: 5,
    deliveryTime: "30-35 min",
    logo: "https://placehold.co/80x80.png",
    price: 2000,
    distance: "900 m",
    priceRange: "$$",
    tags: ["Pharmacy"]
  },
  {
    id: "mamas-delight-5",
    name: "Mama's Delight",
    image: "https://placehold.co/200x150.png",
    rating: 4.8,
    deliveryTime: "25-30 min",
    logo: "https://placehold.co/80x80.png",
    price: 2500,
    distance: "1.2 km",
    priceRange: "$$",
    tags: ["Food", "Swallow", "Nigerian"]
  },
  {
    id: "kakas-kitchen-6",
    name: "Kaka's Kitchen",
    image: "https://placehold.co/200x150.png",
    rating: 4.9,
    deliveryTime: "20-25 min",
    logo: "https://placehold.co/80x80.png",
    price: 3000,
    distance: "500 m",
    priceRange: "$$",
    tags: ["Food", "Rice Dishes", "Grills"]
  },
  {
    id: "wellcare-supermarket-7",
    name: "Wellcare Supermarket",
    image: "https://placehold.co/200x150.png",
    rating: 4.5,
    deliveryTime: "45-60 min",
    logo: "https://placehold.co/80x80.png",
    price: 1000,
    distance: "2.5 km",
    priceRange: "$",
    tags: ["Supermarkets", "Groceries"]
  },
  {
    id: "healthplus-pharmacy-8",
    name: "HealthPlus Pharmacy",
    image: "https://placehold.co/200x150.png",
    rating: 4.7,
    deliveryTime: "15-20 min",
    logo: "https://placehold.co/80x80.png",
    price: 1500,
    distance: "300 m",
    priceRange: "$$",
    tags: ["Pharmacy"]
  },
  {
    id: "sweet-treats-9",
    name: "Sweet Treats",
    image: "https://placehold.co/200x150.png",
    rating: 4.6,
    deliveryTime: "30-40 min",
    logo: "https://placehold.co/80x80.png",
    price: 1500,
    distance: "1.8 km",
    priceRange: "$",
    tags: ["Food", "Desserts", "Snacks"]
  },
  {
    id: "freshmart-10",
    name: "FreshMart",
    image: "https://placehold.co/200x150.png",
    rating: 4.8,
    deliveryTime: "35-45 min",
    logo: "https://placehold.co/80x80.png",
    price: 2000,
    distance: "2.1 km",
    priceRange: "$$",
    tags: ["Supermarkets", "Groceries"]
  },
  {
    id: "city-pharmacy-11",
    name: "City Pharmacy",
    image: "https://placehold.co/200x150.png",
    rating: 4.4,
    deliveryTime: "20-30 min",
    logo: "https://placehold.co/80x80.png",
    price: 800,
    distance: "1.1 km",
    priceRange: "$",
    tags: ["Pharmacy"]
  },
  {
    id: "global-bites-12",
    name: "Global Bites",
    image: "https://placehold.co/200x150.png",
    rating: 4.7,
    deliveryTime: "40-50 min",
    logo: "https://placehold.co/80x80.png",
    price: 5000,
    distance: "3.5 km",
    priceRange: "$$$",
    tags: ["Food", "International"]
  },
  {
    id: "corner-shop-13",
    name: "The Corner Shop",
    image: "https://placehold.co/200x150.png",
    rating: 4.9,
    deliveryTime: "5-10 min",
    logo: "https://placehold.co/80x80.png",
    price: 300,
    distance: "100 m",
    priceRange: "$",
    tags: ["Supermarkets", "Snacks", "Drinks"]
  },
  {
    id: "dan-wake-spot-14",
    name: "Dan Wake Spot",
    image: "https://placehold.co/200x150.png",
    rating: 4.9,
    deliveryTime: "15-20 min",
    logo: "https://placehold.co/80x80.png",
    price: 1500,
    distance: "600m",
    priceRange: "$",
    tags: ["Food", "Nigerian", "Swallow"]
  },
  {
    id: "smile-store-15",
    name: "Smile Store",
    image: "https://placehold.co/200x150.png",
    rating: 5,
    deliveryTime: "10-20 min",
    logo: "https://placehold.co/80x80.png",
    price: 1000,
    distance: "1 km",
    priceRange: "$",
    tags: ["Supermarkets", "Groceries"]
  },
  {
    id: "groceryhub-16",
    name: "GroceryHub",
    image: "https://placehold.co/200x150.png",
    rating: 4.5,
    deliveryTime: "30-40 min",
    logo: "https://placehold.co/80x80.png",
    price: 1200,
    distance: "1.2 km",
    priceRange: "$",
    tags: ["Supermarkets", "Groceries"]
  },
  {
    id: "quickmart-17",
    name: "QuickMart",
    image: "https://placehold.co/200x150.png",
    rating: 4.3,
    deliveryTime: "15-25 min",
    logo: "https://placehold.co/80x80.png",
    price: 900,
    distance: "1.5 km",
    priceRange: "$",
    tags: ["Supermarkets", "Groceries"]
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
