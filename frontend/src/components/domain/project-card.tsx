import React from 'react';

export const ProjectCard = ({ children, className = '' }: { children?: React.ReactNode; className?: string }) => {
  return (
    <div className={className}>
      {children || 'ProjectCard Component'}
    </div>
  );
};
