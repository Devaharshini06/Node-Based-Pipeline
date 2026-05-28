import { Position } from 'reactflow';
import { BaseNode } from '../components/BaseNode';

export const APINode = ({ id }) => {
  return (
    <BaseNode
      title="API"
      handles={[
        {
          type: 'target',
          position: Position.Left,
          id: `${id}-input`,
        },
        {
          type: 'source',
          position: Position.Right,
          id: `${id}-response`,
        },
      ]}
    >
      <div>
        Sends API requests and returns responses.
      </div>
    </BaseNode>
  );
};