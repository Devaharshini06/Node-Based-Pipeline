import { Position } from 'reactflow';
import { BaseNode } from '../components/BaseNode';

export const DelayNode = ({ id }) => {
  return (
    <BaseNode
      title="Delay"
      handles={[
        {
          type: 'target',
          position: Position.Left,
          id: `${id}-input`,
        },
        {
          type: 'source',
          position: Position.Right,
          id: `${id}-output`,
        },
      ]}
    >
      <div>
        Delays pipeline execution.
      </div>
    </BaseNode>
  );
};