import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import useBreedsStore from '../../store/useBreedsStore.ts';

function BreedPage() {
  const { id } = useParams<{ id: string }>();
  const { currentBreed, fetchBreed } = useBreedsStore();
  useEffect(() => {
    id && fetchBreed(id);
  }, [fetchBreed, id]);

  return <div>{JSON.stringify(currentBreed)}</div>;
}

export default BreedPage;
