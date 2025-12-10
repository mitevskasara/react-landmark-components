import React, { type ReactNode } from 'react';

interface RegionProps {
  children?: ReactNode;
  label: string;
  labeledBy: string;
}

const Region: React.FC<RegionProps> = ({ children, label, labeledBy }) => {
  return (
    <div role="region" aria-label={label} aria-labelledby={labeledBy} className="region">
      {children}
    </div>
  );
};

export default Region;
