export const DraggableNode = ({ type, label }) => {

  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };

    event.dataTransfer.setData(
      'application/reactflow',
      JSON.stringify(appData)
    );

    event.dataTransfer.effectAllowed = 'move';
  };

  const nodeStyle = {
    cursor: 'grab',
    minWidth: '95px',
    height: '65px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '14px',
    background: 'linear-gradient(135deg, #1e293b, #0f172a)',
    border: '1px solid rgba(255,255,255,0.08)',
    color: 'white',
    fontWeight: '600',
    fontSize: '15px',
    letterSpacing: '0.3px',
    transition: 'all 0.2s ease',
    boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
    userSelect: 'none',
  };

  return (
    <div
      className={type}
      draggable
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => {
        event.target.style.cursor = 'grab';
      }}
      onMouseEnter={(event) => {
        event.currentTarget.style.transform = 'translateY(-2px)';
        event.currentTarget.style.boxShadow =
          '0 8px 18px rgba(0,0,0,0.22)';
      }}
      onMouseLeave={(event) => {
        event.currentTarget.style.transform = 'translateY(0px)';
        event.currentTarget.style.boxShadow =
          '0 4px 10px rgba(0,0,0,0.15)';
      }}
      style={nodeStyle}
    >
      {label}
    </div>
  );
};