import useBreedsStore from '../../store/useBreedsStore.ts';
import { useEffect } from 'react';
import Title from 'antd/es/typography/Title';
import { List } from 'antd';
import BreedCard from '../../components/BreedCard';

function HomePage() {
  const { breeds, fetchBreeds } = useBreedsStore();
  useEffect(() => {
    fetchBreeds();
  }, [fetchBreeds]);

  return (
    <div>
      <Title>Dog breeds</Title>
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 3,
          lg: 3,
          xl: 3,
          xxl: 3,
        }}
        dataSource={breeds}
        renderItem={(breed) => (
          <List.Item
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <BreedCard id={breed.id} attributes={breed.attributes} />
          </List.Item>
        )}
      ></List>
    </div>
  );
}

export default HomePage;
