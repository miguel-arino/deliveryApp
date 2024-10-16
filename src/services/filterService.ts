import { ResponseFilter, ResponseRestaurant } from '../types/apiTypes';
import { Filter } from '../types/filter';
import { mapResponseFilterToFilter } from '../utils/restaurantMapper';
import apiClient from './apiClient';

export const getFilterById = async (filterId: string): Promise<Filter> => {
  try {
    const response = await apiClient.get<ResponseFilter>(`/filter/${filterId}`);
    return mapResponseFilterToFilter(response.data);
  } catch (error) {
    console.error(`Error fetching filter with ID ${filterId}:`, error);
    throw error;
  }
};

export const getAllFilters = async (restaurants: ResponseRestaurant[]): Promise<Filter[]> => {
  try {
    const uniqueFilterIds = Array.from(new Set(restaurants.flatMap((restaurant) => restaurant.filterIds)));
    
    const filterPromises = uniqueFilterIds.map((filterId) => getFilterById(filterId));
    const filterData = await Promise.all(filterPromises);

    return filterData;
  } catch (error) {
    console.error('Error fetching filters:', error);
    throw error;
  }
};