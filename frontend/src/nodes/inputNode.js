import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from '../components/BaseNode';

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.inputName || id.replace('customInput-', 'input_')
  );

  const [inputType, setInputType] = useState(
    data?.inputType || 'Text'
  );

  return (
    <BaseNode
      title="Input"
      handles={[
        {
          type: 'source',
          position: Position.Right,
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
            value={inputType}
            onChange={(e) => setInputType(e.target.value)}
          >
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </label>
      </div>
    </BaseNode>
  );
};