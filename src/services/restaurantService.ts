import { ResponseOpenStatus, RestaurantsResponse } from "../types/apiTypes";
import apiClient from "./apiClient";


export const getAllRestaurants = async (): Promise<RestaurantsResponse> => {
  try {
    const response = await apiClient.get<RestaurantsResponse>('/restaurants');
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch restaurants: ${error}`);
  }
};

export const getOpenStatus = async (restaurantId: string): Promise<ResponseOpenStatus> => {
  try {
    const response = await apiClient.get<ResponseOpenStatus>(`/open/${restaurantId}`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch open status: ${error}`);
  }
};
