interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '0.5rem 1rem',
        background: '#4f46e5',
        color: '#fff',
        borderRadius: '4px',
      }}
    >
      {children}
    </button>
  );
};
