export type ResponseError = {
    error: boolean;
    reason: string;
  };
  
  export type ResponseFilter = {
    id: string;
    name: string;
    image_url: string;
  };
  
  export type ResponseRestaurant = {
    id: string;
    name: string;
    rating: number;
    filterIds: string[];
    image_url: string;
    delivery_time_minutes: number;
  };
  
  export type RestaurantsResponse = {
    restaurants: ResponseRestaurant[];
  };
  
  export type ResponseOpenStatus = {
    restaurant_id: string;
    is_currently_open: boolean;
  };