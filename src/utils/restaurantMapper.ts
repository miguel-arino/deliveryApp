import { ResponseFilter, ResponseRestaurant } from "../types/apiTypes";
import { Filter } from "../types/filter";
import { Restaurant } from "../types/restaurant";

export const mapResponseFilterToFilter = (responseFilter: ResponseFilter): Filter => {
    return {
      id: responseFilter.id,
      name: responseFilter.name,
      imageUrl: responseFilter.image_url,
    };
  };

export const mapResponseToRestaurant = (
  responseRestaurant: ResponseRestaurant,
  filters: Filter[]
): Restaurant => {
  return {
    id: responseRestaurant.id,
    name: responseRestaurant.name,
    rating: responseRestaurant.rating,
    filters: responseRestaurant.filterIds
    .map((filterId) => filters.find((filter) => filter.id === filterId)),
    imageUrl: responseRestaurant.image_url,
    deliveryTimeMinutes: responseRestaurant.delivery_time_minutes,
  };
};
