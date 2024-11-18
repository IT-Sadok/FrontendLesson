export interface Breed {
  id: string;
  type: string;
  attributes: BreedAttributes;
  relationships: {
    group: {
      data: {
        id: string;
        type: string;
      };
    };
  };
}

export interface BreedAttributes {
  name: string;
  description: string;
  life: {
    max: number;
    min: number;
  };
  male_weight: {
    max: number;
    min: number;
  };
  female_weight: {
    max: number;
    min: number;
  };
  hypoallergenic: boolean;
}
