import { Filter } from "./filter";

export type Restaurant = {
  id: string;
  name: string;
  rating: number;
  filters: Filter[];
  imageUrl: string;
  deliveryTimeMinutes: number;
};