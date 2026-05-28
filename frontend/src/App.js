import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';

function App() {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        background: '#f1f5f9',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          padding: '18px 24px',
          background: '#ffffff',
          borderBottom: '1px solid #e2e8f0',
        }}
      >
        <div
          style={{
            fontSize: '24px',
            fontWeight: '700',
            color: '#0f172a',
          }}
        >
          VectorShift Pipeline Builder
        </div>

        <div
          style={{
            marginTop: '6px',
            color: '#64748b',
            fontSize: '14px',
          }}
        >
          Drag nodes onto the canvas and connect them to build workflows.
        </div>
      </div>

      <PipelineToolbar />

      <PipelineUI />

      <SubmitButton />
    </div>
  );
}

export default App;