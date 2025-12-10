import React, { type ReactNode } from 'react';

interface SidebarProps {
  children?: ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  return <nav className="side-navigation">{children}</nav>;
};

export default Sidebar;
