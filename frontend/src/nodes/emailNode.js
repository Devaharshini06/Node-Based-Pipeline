import { Position } from 'reactflow';
import { BaseNode } from '../components/BaseNode';

export const EmailNode = ({ id }) => {
  return (
    <BaseNode
      title="Email"
      handles={[
        {
          type: 'target',
          position: Position.Left,
          id: `${id}-message`,
        },
        {
          type: 'source',
          position: Position.Right,
          id: `${id}-status`,
        },
      ]}
    >
      <div>
        Sends automated email notifications.
      </div>
    </BaseNode>
  );
};