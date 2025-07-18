
import { initializeApp, cert, getApps, getApp } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import 'dotenv/config';

import { vendors } from './data';

const {
  FIREBASE_ADMIN_PROJECT_ID,
  FIREBASE_ADMIN_PRIVATE_KEY,
  FIREBASE_ADMIN_CLIENT_EMAIL,
} = process.env;

if (!FIREBASE_ADMIN_PROJECT_ID || !FIREBASE_ADMIN_PRIVATE_KEY || !FIREBASE_ADMIN_CLIENT_EMAIL) {
  console.error("Firebase Admin credentials not found in .env file. Please check your configuration.");
  process.exit(1);
}

const serviceAccount = {
  projectId: FIREBASE_ADMIN_PROJECT_ID,
  privateKey: FIREBASE_ADMIN_PRIVATE_KEY.replace(/\\n/g, '\n'),
  clientEmail: FIREBASE_ADMIN_CLIENT_EMAIL,
};

if (!getApps().length) {
  initializeApp({
    credential: cert(serviceAccount),
  });
} else {
  getApp();
}

const db = getFirestore();

async function seedDatabase() {
  console.log('Starting to seed the database...');

  const vendorsCollection = db.collection('vendors');
  const batch = db.batch();

  for (const vendor of vendors) {
    // Use the vendor.id from the data file as the document ID.
    const docRef = vendorsCollection.doc(vendor.id);
    const { id, ...vendorData } = vendor;
    batch.set(docRef, vendorData);
  }

  try {
    await batch.commit();
    console.log(`Successfully seeded ${vendors.length} vendors.`);
  } catch (error) {
    console.error('Error seeding database:', error);
  }
}

seedDatabase();
