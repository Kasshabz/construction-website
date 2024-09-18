// src/api/firestoreService.js
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase'; // Adjust path if firebase config is in a different folder

const getServices = async () => {
  const querySnapshot = await getDocs(collection(db, 'services'));
  const services = [];
  querySnapshot.forEach(doc => {
    services.push({ ...doc.data(), id: doc.id });
  });
  console.log(services);
  return services;
};

export default getServices;
