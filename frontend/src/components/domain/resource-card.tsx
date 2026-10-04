import React from 'react';

export const ResourceCard = ({ children, className = '' }: { children?: React.ReactNode; className?: string }) => {
  return (
    <div className={className}>
      {children || 'ResourceCard Component'}
    </div>
  );
};
