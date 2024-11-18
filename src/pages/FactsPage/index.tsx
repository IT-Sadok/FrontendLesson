import useFactsStore from '../../store/useFactsStore.ts';
import { useEffect } from 'react';
import { Button, Card, List, Typography } from 'antd';
import { ReloadOutlined } from '@ant-design/icons';

function FactsPage() {
  const { facts, fetchFacts } = useFactsStore();

  useEffect(() => {
    fetchFacts();
  }, [fetchFacts]);

  return (
    <div>
      <Button onClick={() => fetchFacts()} icon={<ReloadOutlined />}></Button>
      <List
        dataSource={facts}
        grid={{
          gutter: 32,
          xs: 1,
          sm: 2,
          md: 3,
          lg: 3,
          xl: 3,
          xxl: 3,
        }}
        renderItem={(fact) => (
          <Card
            style={{
              height: 'fit-content',
            }}
          >
            <Typography.Text mark>{fact.attributes.body}</Typography.Text>
          </Card>
        )}
      ></List>
    </div>
  );
}

export default FactsPage;
