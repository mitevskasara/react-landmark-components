import React, { type ReactNode } from 'react';

interface GridProps {
  children?: ReactNode;
}

const Grid: React.FC<GridProps> = ({ children }) => {
  return <div className="grid">{children}</div>;
};

export default Grid;
