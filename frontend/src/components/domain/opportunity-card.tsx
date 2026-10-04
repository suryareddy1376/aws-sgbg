import React from 'react';

export const OpportunityCard = ({ children, className = '' }: { children?: React.ReactNode; className?: string }) => {
  return (
    <div className={className}>
      {children || 'OpportunityCard Component'}
    </div>
  );
};
