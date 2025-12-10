import React, { type ReactNode } from 'react';

interface FooterProps {
  children?: ReactNode;
}

const Footer: React.FC<FooterProps> = ({ children }) => {
  return <footer className="footer">{children}</footer>;
};

export default Footer;
