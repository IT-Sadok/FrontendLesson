import { Fact } from '../interfaces/fact.ts';
import { create } from 'zustand/index';
import axiosInstance from '../api/axiosInstance.ts';

interface FactsState {
  facts: Fact[];
  fetchFacts: () => Promise<void>;
}

interface FactsResponse {
  data: Fact[];
}

const useFactsStore = create<FactsState>((set) => ({
  facts: [],
  fetchFacts: async () => {
    try {
      const response = await axiosInstance.get<FactsResponse>('/facts?limit=5');
      set({ facts: response.data.data });
    } catch (error) {
      console.log(error);
    }
  },
}));

export default useFactsStore;
