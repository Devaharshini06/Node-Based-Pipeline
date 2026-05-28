import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from '../components/BaseNode';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.outputName || id.replace('customOutput-', 'output_')
  );

  const [outputType, setOutputType] = useState(
    data?.outputType || 'Text'
  );

  return (
    <BaseNode
      title="Output"
      handles={[
        {
          type: 'target',
          position: Position.Left,
          id: `${id}-value`,
        },
      ]}
    >
      <div className="node-content">
        <label className="node-label">
          Name
          <input
            className="node-input"
            value={currName}
            onChange={(e) => setCurrName(e.target.value)}
          />
        </label>
          
        <label className="node-label">
          Type
          <select
            className="node-select"
            value={outputType}
            onChange={(e) => setOutputType(e.target.value)}
          >
            <option value="Text">Text</option>
            <option value="Image">Image</option>
          </select>
        </label>
      </div>
    </BaseNode>
  );
};