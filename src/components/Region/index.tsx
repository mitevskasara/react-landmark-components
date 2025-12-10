import React, { type ReactNode } from 'react';

interface RegionProps {
  children?: ReactNode;
  label: string;
}

const Region: React.FC<RegionProps> = ({ children, label }) => {
  return (
    <div role="region" aria-label={label} className="region">
      {children}
    </div>
  );
};

export default Region;
