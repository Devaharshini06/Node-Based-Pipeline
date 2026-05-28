import { DraggableNode } from './draggableNode';

const toolbarStyle = {
  padding: '16px',
  background: '#0f172a',
  borderBottom: '1px solid #1e293b',
};

const containerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '12px',
};

export const PipelineToolbar = () => {
  return (
    <div style={toolbarStyle}>
      <div style={containerStyle}>
        <DraggableNode type='customInput' label='Input' />
        <DraggableNode type='llm' label='LLM' />
        <DraggableNode type='customOutput' label='Output' />
        <DraggableNode type='text' label='Text' />

        <DraggableNode type='api' label='API' />
        <DraggableNode type='math' label='Math' />
        <DraggableNode type='filter' label='Filter' />
        <DraggableNode type='delay' label='Delay' />
        <DraggableNode type='email' label='Email' />
      </div>
    </div>
  );
};