import { Avatar, Card, Collapse, CollapseProps, Divider } from 'antd';
import { BreedAttributes } from '../../interfaces/breeds.ts';
import { GitlabFilled } from '@ant-design/icons';
import { Link } from 'react-router-dom';

interface BreedCardProps {
  id: string;
  attributes: BreedAttributes;
}

function BreedCard(props: BreedCardProps) {
  const items: CollapseProps['items'] = [
    {
      key: props.attributes.name,
      label: 'Additional info',
      children: (
        <div>
          <div>
            <p>Min age: {props.attributes.life.min}</p>
            <p>Max age: {props.attributes.life.max}</p>
          </div>
          <div>
            <p>Min male weight: {props.attributes.male_weight.min}</p>
            <p>Max male weight: {props.attributes.male_weight.max}</p>
          </div>
          <div>
            <p>Min female weight: {props.attributes.female_weight.min}</p>
            <p>Max female weight: {props.attributes.female_weight.max}</p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <Card
      title={props.attributes.name}
      extra={<Link to={`/breeds/${props.id}`}>More</Link>}
      style={{ width: 300 }}
    >
      <Avatar size="large" icon={<GitlabFilled />} />
      <Divider />
      <p>Description: {props.attributes.description}</p>
      <Collapse items={items} />
    </Card>
  );
}

export default BreedCard;
