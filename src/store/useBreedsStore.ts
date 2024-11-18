import { create } from 'zustand';
import axiosInstance from '../api/axiosInstance.ts';
import { Breed } from '../interfaces/breeds.ts';

interface BreedsState {
  breeds: Breed[];
  currentBreed: Breed | null;
  fetchBreeds: () => Promise<void>;
  fetchBreed: (id: string) => Promise<void>;
}

interface BreedsResponse {
  data: Breed[];
}

interface BreedResponse {
  data: Breed;
}

const useBreedsStore = create<BreedsState>((set) => ({
  breeds: JSON.parse(localStorage.getItem('breeds') || '[]') || [],
  currentBreed: null,
  fetchBreeds: async () => {
    try {
      const response = await axiosInstance.get<BreedsResponse>('/breeds');
      localStorage.setItem('breeds', JSON.stringify(response.data.data));
      set({ breeds: response.data.data });
    } catch (error) {
      console.log(error);
    }
  },
  fetchBreed: async (id: string) => {
    try {
      const response = await axiosInstance.get<BreedResponse>(`/breeds/${id}`);
      set({ currentBreed: response.data.data });
    } catch (error) {
      console.log(error);
    }
  },
}));

export default useBreedsStore;
