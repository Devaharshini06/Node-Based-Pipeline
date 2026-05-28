import { Position } from 'reactflow';
import { BaseNode } from '../components/BaseNode';

export const MathNode = ({ id }) => {
  return (
    <BaseNode
      title="Math"
      handles={[
        {
          type: 'target',
          position: Position.Left,
          id: `${id}-number1`,
          style: { top: '35%' },
        },
        {
          type: 'target',
          position: Position.Left,
          id: `${id}-number2`,
          style: { top: '70%' },
        },
        {
          type: 'source',
          position: Position.Right,
          id: `${id}-result`,
        },
      ]}
    >
      <div>
        Performs mathematical operations.
      </div>
    </BaseNode>
  );
};