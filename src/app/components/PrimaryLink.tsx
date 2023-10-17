import React from 'react';

interface PrimaryLinkProps {
  to: string;
  label: string;
}

const PrimaryLink: React.FC<PrimaryLinkProps> = ({ to, label }) => {
  return (
    <a href={to} className="link">
      {label}
    </a>
  );
};

export default PrimaryLink;
