import React from 'react';

interface BreadcrumbItem {
  label: string;
  href?: string;
  isCurrent?: boolean;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="breadcrumb">
      <ol>
        {items.map((item, index) => (
          <li key={index}>
            {item.isCurrent ? (
              <span aria-current="page">{item.label}</span>
            ) : (
              <a href={item.href}>{item.label}</a>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
