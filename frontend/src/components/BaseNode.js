import { Handle } from 'reactflow';
import '../styles/node.css';

const baseNodeStyle = {
  width: 260,
  minHeight: 160,
  border: '1px solid #3b82f6',
  borderRadius: '16px',
  background: '#ffffff',
  padding: '16px',
  boxShadow: '0 6px 18px rgba(0,0,0,0.08)',
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  overflow: 'hidden',
  transition: 'all 0.2s ease',
};

const titleStyle = {
  fontSize: '16px',
  fontWeight: '700',
  color: '#0f172a',
  borderBottom: '1px solid #e2e8f0',
  paddingBottom: '10px',
};

export const BaseNode = ({
  title,
  children,
  handles = [],
}) => {
  return (
    <div
      style={baseNodeStyle}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow =
          '0 10px 22px rgba(0,0,0,0.12)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0px)';
        e.currentTarget.style.boxShadow =
          '0 6px 18px rgba(0,0,0,0.08)';
      }}
    >
      {handles.map((handle, index) => (
        <Handle
          key={index}
          type={handle.type}
          position={handle.position}
          id={handle.id}
          style={{
            width: '12px',
            height: '12px',
            background: '#2563eb',
            border: '2px solid white',
            ...handle.style,
          }}
        />
      ))}

      <div style={titleStyle}>
        {title}
      </div>

      <div>
        {children}
      </div>
    </div>
  );
};