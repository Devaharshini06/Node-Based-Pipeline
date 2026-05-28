import { Position } from 'reactflow';
import { BaseNode } from '../components/BaseNode';

export const FilterNode = ({ id }) => {
  return (
    <BaseNode
      title="Filter"
      handles={[
        {
          type: 'target',
          position: Position.Left,
          id: `${id}-input`,
        },
        {
          type: 'source',
          position: Position.Right,
          id: `${id}-filtered`,
        },
      ]}
    >
      <div>
        Filters and transforms incoming data.
      </div>
    </BaseNode>
  );
};