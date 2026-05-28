const overlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: 'rgba(15, 23, 42, 0.55)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
};

const modalStyle = {
  background: 'white',
  borderRadius: '18px',
  padding: '28px',
  width: '360px',
  boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
  display: 'flex',
  flexDirection: 'column',
  gap: '18px',
};

const titleStyle = {
  fontSize: '22px',
  fontWeight: '700',
  color: '#0f172a',
};

const statStyle = {
  fontSize: '16px',
  color: '#334155',
};

const buttonStyle = {
  background: '#2563eb',
  color: 'white',
  border: 'none',
  padding: '12px',
  borderRadius: '10px',
  cursor: 'pointer',
  fontWeight: '600',
};

export const ResultModal = ({ data, onClose }) => {
  if (!data) return null;

  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        <div style={titleStyle}>
          Pipeline Analysis
        </div>

        <div style={statStyle}>
          Nodes: <strong>{data.num_nodes}</strong>
        </div>

        <div style={statStyle}>
          Edges: <strong>{data.num_edges}</strong>
        </div>

        <div style={statStyle}>
          DAG Status:{' '}
          <strong
            style={{
              color: data.is_dag ? '#16a34a' : '#dc2626',
            }}
          >
            {data.is_dag ? 'Valid DAG' : 'Cycle Detected'}
          </strong>
        </div>

        <button onClick={onClose} style={buttonStyle}>
          Close
        </button>
      </div>
    </div>
  );
};