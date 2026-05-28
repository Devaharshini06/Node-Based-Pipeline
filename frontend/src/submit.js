import { useState } from 'react';
import { useStore } from './store';
import { ResultModal } from './components/ResultModal';

const buttonStyle = {
  padding: '14px 28px',
  background: '#2563eb',
  color: 'white',
  border: 'none',
  borderRadius: '12px',
  fontSize: '16px',
  fontWeight: '700',
  cursor: 'pointer',
  boxShadow: '0 4px 14px rgba(37,99,235,0.3)',
};

export const SubmitButton = () => {
  const { nodes, edges } = useStore();

  const [result, setResult] = useState(null);

  const handleSubmit = async () => {
    try {
      const response = await fetch(
        'http://127.0.0.1:8000/pipelines/parse',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            nodes,
            edges,
          }),
        }
      );

      const data = await response.json();

      setResult(data);

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          padding: '20px',
        }}
      >
        <button onClick={handleSubmit} style={buttonStyle}>
          Submit Pipeline
        </button>
      </div>

      <ResultModal
        data={result}
        onClose={() => setResult(null)}
      />
    </>
  );
};