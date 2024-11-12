import { Review } from '@/types/type';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function DiscountCalc(price: number, discount: number) {
  return price - (price * discount) / 100;
}

export function Rating(reviews: Review[] | number) {
  if (typeof reviews == 'number') return reviews;
  let num =
    reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;
  if (num > Math.trunc(num)) {
    num = Math.trunc(num) + 0.5;
  }
  return num;
}
