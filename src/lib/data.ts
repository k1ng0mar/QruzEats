
export const topCategories = [
    { name: "Grills", iconName: "GrillsIcon" },
    { name: "Rice Dishes", iconName: "RiceDishesIcon" },
    { name: "Swallow", iconName: "SwallowIcon" },
    { name: "Desserts", iconName: "Dessert" },
    { name: "Drinks", iconName: "GlassWater" },
    { name: "Snacks", iconName: "Cookie" },
    { name: "Groceries", iconName: "ShoppingBasket" },
    { name: "Pharmacy", iconName: "Pill" },
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

export const vendors = [
  {
    id: "grill-house-1",
    name: "Grill House",
    image: "https://placehold.co/200x150.png",
    rating: 5,
    deliveryTime: "10-25 min",
    logo: "https://placehold.co/80x80.png",
    price: 7000,
    distance: "800 m",
    tags: ["Food", "Grills", "Restaurant"],
    products: [
        { id: 'prod-1-1', name: 'BBQ Chicken Burger', price: 4500, image: 'https://placehold.co/100x100.png', description: 'Juicy chicken burger with our special BBQ sauce.', category: 'Grills', tags: ['popular'] },
        { id: 'prod-1-2', name: 'Full Chicken Suya', price: 4000, image: 'https://placehold.co/100x100.png', description: 'Spicy grilled chicken suya, a northern classic.', category: 'Grills', tags: ['popular', 'Local'] },
    ]
  },
   {
    id: "wellcare-supermarket-2",
    name: "Wellcare Supermarket",
    image: "https://placehold.co/200x150.png",
    rating: 4.5,
    deliveryTime: "45-60 min",
    logo: "https://placehold.co/80x80.png",
    price: 1000,
    distance: "2.5 km",
    tags: ["Supermarkets", "Groceries"],
    products: [
        { id: 'prod-2-1', name: 'Sliced Bread', price: 800, image: 'https://placehold.co/100x100.png', description: 'Freshly baked sliced bread.', category: 'Bakery', tags: ['popular'] },
        { id: 'prod-2-2', name: 'Crate of Eggs', price: 3000, image: 'https://placehold.co/100x100.png', description: 'A crate of 30 fresh eggs.', category: 'Dairy' },
    ]
  },
  {
    id: "healthplus-pharmacy-3",
    name: "HealthPlus Pharmacy",
    image: "https://placehold.co/200x150.png",
    rating: 4.7,
    deliveryTime: "15-20 min",
    logo: "https://placehold.co/80x80.png",
    price: 1500,
    distance: "300 m",
    tags: ["Pharmacy"],
    products: [
        { id: 'prod-3-1', name: 'Cough Syrup', price: 1200, image: 'https://placehold.co/100x100.png', description: 'For relief from cough and cold.', category: 'Cold & Flu', tags: ['popular'] },
        { id: 'prod-3-2', name: 'Plasters Pack', price: 400, image: 'https://placehold.co/100x100.png', description: 'Pack of assorted adhesive bandages.', category: 'First Aid' },
    ]
  },
  {
    id: "corner-shop-4",
    name: "The Corner Shop",
    image: "https://placehold.co/200x150.png",
    rating: 4.9,
    deliveryTime: "5-10 min",
    logo: "https://placehold.co/80x80.png",
    price: 300,
    distance: "100 m",
    tags: ["Groceries", "Snacks", "Drinks"],
     products: [
        { id: 'prod-4-1', name: 'Coca-Cola Can', price: 300, image: 'https://placehold.co/100x100.png', description: 'A cold can of Coca-Cola.', category: 'Drinks', tags: ['popular'] },
        { id: 'prod-4-2', name: 'Bottled Water', price: 200, image: 'https://placehold.co/100x100.png', description: '50cl bottled water.', category: 'Drinks' },
    ]
  }
];


export const curatedMarkets = [
  {
    name: "Dawanau Market",
    image: "https://placehold.co/600x400.png",
    rating: 4.7,
    deliveryTime: "15-25 min",
    distance: "0.5 km",
  },
  {
    name: "Kasuwar Kurmi",
    image: "https://placehold.co/600x400.png",
    rating: 4.8,
    deliveryTime: "20-30 min",
    distance: "1.2 km",
  },
   {
    name: "Yan Lemo Market",
    image: "https://placehold.co/600x400.png",
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
    image: "https://placehold.co/600x400.png",
    origin: "Originated from the Hausa people of Northern Nigeria.",
    culturalSignificance: "Often served during weddings, naming ceremonies, and other celebrations.",
    bestTimeToEnjoy: "Commonly eaten for breakfast or as a light evening meal.",
  },
  {
    name: "Jollof Rice",
    shortDescription: "The crown jewel of West African cuisine.",
    longDescription: `Jollof rice is a one-pot rice dish cooked across West Africa. The base is rice, tomatoes, tomato paste, onions, scotch bonnet peppers, salt, and spices. It shows up at celebrations, family gatherings, and everyday meals.

Its origins trace to the Senegambian region, and Nigeria and Ghana each have their own version. Nigerian Jollof gets its smoky flavor from cooking over an open fire until a layer of burnt rice forms at the bottom of the pot.`,
    image: "https://placehold.co/600x400.png",
    origin: "Traced back to the Senegambian region, now a West African icon.",
    culturalSignificance: "An essential dish at parties, celebrations, and family gatherings.",
    bestTimeToEnjoy: "Any time! Perfect for lunch, dinner, or any festive occasion.",
  },
  {
    name: "Suya",
    shortDescription: "Spiced grilled meat skewers - the king of Nigerian street food.",
    longDescription: `Suya is a spicy skewered meat, which is a popular food item in West Africa. It is traditionally prepared by the Hausa people of Northern Nigeria, Cameroon, Niger, and some parts of Sudan. Suya is generally made with skewered beef, ram, or chicken. Innards such as kidney, liver and tripe are also used. The thinly sliced meat is marinated in various spices which include peanut cake, salt, vegetable oil and other flavorings, and then barbecued.`,
    image: "https://placehold.co/600x400.png",
    origin: "Originated from the Hausa people of Northern Nigeria.",
    culturalSignificance: "A popular evening snack, best enjoyed with friends and cold drinks.",
    bestTimeToEnjoy: "Perfect for evening meals or as a late-night snack.",
  }
];
