import { loadStripe } from '@stripe/stripe-js';

let stripePromise;
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe('pk_test_51Mj4HPBnnFZXFBWvuoZVFpe7WbeKvPrfec1gOEI82AEUOwh1Gcni2dnNi4xBpzfoDoa3Mq3mPNjc2yuBMIOnkM8x00gxeyZd29');
  }
  return stripePromise;
};

export default getStripe;