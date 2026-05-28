import { useState, useMemo } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from '../components/BaseNode';

export const TextNode = ({ id, data }) => {
  const [text, setText] = useState(data?.text || '{{input}}');

  const variables = useMemo(() => {
    const regex = /\{\{\s*([a-zA-Z_$][\w$]*)\s*\}\}/g;

    const matches = [...text.matchAll(regex)];

    return [...new Set(matches.map((match) => match[1]))];
  }, [text]);

  const handles = [
    ...variables.map((variable, index) => ({
      type: 'target',
      position: Position.Left,
      id: `${id}-${variable}`,
      style: {
        top: `${((index + 1) * 100) / (variables.length + 1)}%`,
      },
    })),
    {
      type: 'source',
      position: Position.Right,
      id: `${id}-output`,
    },
  ];

  return (
    <BaseNode
      title="Text"
      handles={handles}
    >
      <div className="node-content">
        <label className="node-label">
          Text
          <textarea
            className="node-textarea"
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={Math.max(4, text.split('\n').length)}
          />
        </label>
          <div
            style={{
              fontSize: '12px',
              color: '#64748b',
            }}
          >
            Use variables like {'{{name}}'} to create dynamic inputs.
          </div>
      </div>
    </BaseNode>
  );
};